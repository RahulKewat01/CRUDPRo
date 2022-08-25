const data=require('./data');

const getProduct=(req,res)=>{
res.send(data);
}

const getProductById=async (req,res)=>{
    const id=req.params.id;
    try{
        if(data.length>0){
            await data.filter(ele=>{
                if(ele.ProductId===id.toString()){
                return  res.send(ele); 
                }
            })
        }
        
    }catch(err){
        console.log(err);
    }

}

const updatebyId=(req,res)=>{
const  {ProductName,
CategoryName,
CategoryId}=req.body;
data.find(ele=>{
    if(ele.ProductName==ProductName){
        ele[CategoryName]=CategoryName;
        ele[CategoryId]=CategoryId;
    }else{
     return  res.send("ele not found ");
    }
})
}

const deleteProduct=(req,res)=>{
    const {ProductName}=req.body;
    data.find(ele=>{
   if(ele.ProductName==ProductName){
    data.slice(ele);
    res.send("Data is deleted");
   }
})
}


module.exports={
    getProduct,
    getProductById,
    updatebyId,
    deleteProduct
}