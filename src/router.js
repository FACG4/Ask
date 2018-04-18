const getData=require('./queries/getData');
const router=(req,res)=>{
    const endpoint=req.url;
    console.log(endpoint);
    
    if(endpoint === "/"){

    }else if(endpoint.split('/')[1]==="user"){
        let id =endpoint.split('/')[2];
        getData.getUserData(id,(err,response)=>{
            console.log(response);
        });
        
      
        
    }
}

module.exports=router;