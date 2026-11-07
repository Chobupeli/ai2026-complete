const router=require('express').Router();router.get('/',(req,res)=>res.render('index',{title:'AI — интерактивный гид',home:false}));module.exports=router;
