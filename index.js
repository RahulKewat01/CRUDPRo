const express=require('express');
const routes=require('./router');

const app=express();
app.use(express.json());
app.use(routes);
const port=process.env.PORT || 4000;
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})


