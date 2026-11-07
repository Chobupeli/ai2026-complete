const router=require('express').Router();router.get('/',(req,res)=>res.send('Темы AI'));router.get('/:nick',(req,res)=>res.send(req.params.nick));module.exports=router;
