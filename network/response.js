module.exports = {
    success : function (req,res, message, error){
        res.send({
            body : message ,
            error: ''
        })
    },
    error : (req, res, message, error) => {
        res.send({
            message: '',
            error: error
        })
    }
}