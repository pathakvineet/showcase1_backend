
const Task = require('../model/task');
const User = require('../model/user');


async function createTask(req, res) {
    if (!req.body.authorId) return res.status(400).json({ status: 400, massage: 'can not post task without author id' });
    if (!req.body.description) return res.status(400).json({ status: 400, message: 'task description not found' });

    User.findById(req.body.authorId, (err, user) => {
        if (!user) return res.status(400).json({ status: 400, message: 'no user found for this id' });
        const newTask = new Task({
            description: req.body.description,
            author: {
                id: user.id,
                name: user.name
            }
        });
        newTask.save(function (err, task) {
            if (err) return status(400).json({ status: 400, message: 'some unexpected error occured' });
            user.postedTasks.push(newTask);
            user.save((err, data) => {
                res.send({
                    _id: task.id,
                    description: task.description,
                    completed: task.completed
                })
            })
        })
    })

}

async function updateTask(req, res) {

    if (!req.body.authorId) return res.status(400).json({ status: 400, massage: 'can not post task without author id' });
    if (!req.body.taskId) return res.status(400).json({ status: 400, massage: 'task id required' });

    Task.findByIdAndUpdate(req.body.taskId, req.body, { new: true }, function (err, newValue) {
        if (err) return res.status(400).json({ status: 400, errors: { err: 'an error occured', error: err } });

        let data = {
            _id: newValue._id,
            description: newValue.description,
            completed: newValue.completed
        }

        res.send({
            data
        })
    })
}

async function deleteTask(req, res) {


    if (!req.body.authorId) return res.status(400).json({ status: 400, message: 'authorId not found' });
    if (!req.params.taskId) return res.status(400).json({ status: 400, message: 'taskId not found' });


    Task.findOneAndDelete({_id:req.params.taskId}, function (err, deletedValue) {
        if (err) return res.status(400).json({ status: 400, message: 'invalid id' });
        if (deletedValue && deletedValue._id == req.params.taskId) {
            User.update({ _id: req.body.authorId },
                { $pull: { postedTasks: req.params.taskId } }
            )
                .then(result => {

                    if (result.ok == 0) return;
                    res.send({
                        taskDeleted: true,
                        _id: deletedValue._id,
                        message: 'Task deleted successfully'
                    });
                })

        } else {
            res.send({ message: 'task doesn\'t exist' });
        }
    })
}


async function viewAllTasks(req, res) {
    let authorId = req.params.authorId;
    // User.findById(userId).populate('postedTasks')
    // .populate({path: 'postedTasks'})
    // .exec(function(err, list){
    //     res.send(list);
    // })

    Task.find({ 'author.id': authorId }, 'id description completed')
        .exec(function (err, list) {
            res.send(list);
        })
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    viewAllTasks
}
