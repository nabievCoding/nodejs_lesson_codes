const fs=require('fs');
const file=fs.readFile('./index.html',(err,txt)=>{
        if(err){
                console.log(err);
        }
        else{
                
                console.log("kitilgan matn: "+txt);
        }
})
