
// ----------------- 404 and 500 error responses --------------------------


var notFoundError = (req, res) => {
    let errResponse = {
      "status": "404",
      error: {"msg": "Invalid API endpoint"}
    };
    return res.status(404).json(errResponse);
  }

  //------------------------------------------------------------------------------------------
  
  var internalServerError = (err, req, res, next) => {
    console.error(err.stack);
    let errResponse = {
      "status": "500",
      error: {"msg": "Oops! It seems like there's an issue at our end. Not to worry, our team is working hard improving this BETA version as you are reading this."}
    }
    res.status(500).json(errResponse);
  }
  
  module.exports = {
    notFoundError ,
    internalServerError
  }

  //-------------------------------------------END---------------------------------------------