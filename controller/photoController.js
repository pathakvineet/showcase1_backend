
const Photo = require('../model/photo');
const User = require('../model/user');
const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: process.env.KEY,
    secretAccessKey: process.env.SECRET
})
const s3 = new AWS.S3();



async function uploadPhoto(req, res) {

    // console.log('body',req.body);

    // console.log('file', req.files);
    // return res.send('OK');
    let files = req.files;
    if (!files) {
        return res.status(400).json({ status: 400, message: 'upload file' });
    } else {
        if (!files.file) {
            return res.status(400).json({ status: 400, message: 'upload file not found' });
        } else {
            if (!files.file.mimetype.startsWith('image')) {
                return res.status(400).json({ status: 400, message: 'image format only' });
            }
            if (files.file.size > 5000000) {
                return res.status(400).json({ status: 400, message: 'image size not more than 5mb' });
            }
        }
    }
    const file = req.files.file;

    let fileExt = file.name.substr(file.name.lastIndexOf('.') + 1);

    let filePath = `project1/${req.body.authorId}` + Date.now() + '.' + fileExt;

    let fileBody = req.files.file.data;
    var awsParams = {
        Bucket: process.env.BUCKET,
        Key: filePath,
        Body: fileBody
    }
    s3.upload(awsParams, function (err, data) {
        if (err) {
            console.log(err);
        }
        if (data) {
            User.findById(req.body.authorId, function (err, user) {
                const newPhoto = new Photo({
                    title: req.body.title,
                    author: {
                        id: user._id,
                        name: user.name
                    },
                    url: filePath
                });
                newPhoto.save(function (err, photoData) {

                    if (err) return console.error(err);
                    let responseData = {
                        _id: photoData._id,
                        url: photoData.url
                    }

                    user.uploadedPhotos.push(newPhoto);
                    user.save(function (err, data) {

                        res.send({
                            responseData
                        });
                    });
                });
            })
        }
    })
}

//-------------------------------------------------------------------------------------------



async function photoThumbnails(req, res) {
    let authorId = req.params.authorId;
    Photo.find({ 'author.id': authorId }, 'url')
        .limit(4)
        .exec(function (err, list) {

            res.send(list);
        })
}

async function photosList(req, res) {
    let authorId = req.params.authorId;
    Photo.find({ 'author.id': authorId }, 'url')
        .exec(function (err, list) {

            res.send(list);
        })
}
async function deletePhoto(req, res) {
    if (!req.body.authorId) return res.status(400).json({ status: 400, message: 'authorId not found' });
    if (!req.params.photoId) return res.status(400).json({ status: 400, message: 'taskId not found' });


    Photo.findOneAndDelete({ _id: req.params.photoId }, function (err, deletedValue) {
        if (err) return res.status(400).json({ status: 400, message: 'invalid id' });
        if (deletedValue && deletedValue._id == req.params.photoId) {
            User.updateOne({ _id: req.body.authorId },
                { $pull: { uploadedPhotos: req.params.taskId } }
            )
                .then(result => {
                    if (result.ok == 0) return;
                    var awsParams = {
                        Bucket: process.env.BUCKET,
                        Key: deletedValue.url

                    }
                    s3.deleteObject(awsParams, function (err, data) {
                        if (err) console.log(err, err.stack);  // error
                        else               // deleted
                            res.send({
                                photoDeleted: true,
                                _id: deletedValue._id,
                                message: 'photo deleted successfully'
                            });
                    });
                    // console.log(deletedValue);
                })

        } else {
            res.send({ message: 'task doesn\'t exist' });
        }
    })
}

module.exports = {
    uploadPhoto,
    photoThumbnails,
    photosList,
    deletePhoto
}