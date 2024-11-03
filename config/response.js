module.exports={
    send:({result,res})=>{
        let statusCode = result.statusCode || 200;
        let data = {
            statusCode,
            success:true,
            data:result
        }

        return res.status(statusCode).send(data);
    }
}