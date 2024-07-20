module.exports= reqFilter=(req, resp, next)=>{
    if(!req.query.age){
        resp.send("Please Provide Age To Proceed")
    }
    else if(req.query.age<18){
        resp.send("You are not allowed to access the page")
    }
    else{

        next();
    }
}