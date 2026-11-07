const router=require('express').Router();
router.get('/',(req,res)=>{res.cookie('greeting','Hello AI',{sameSite:'lax',httpOnly:true,maxAge:3600000});res.render('index',{title:'AI — интерактивный гид',home:true});});
router.get('/vision',(req,res)=>res.redirect('/topics/vision'));
router.get('/patterns',(req,res)=>res.redirect('/topics/patterns'));
router.get('/actions',(req,res)=>res.redirect('/topics/actions'));
router.get('/text',(req,res)=>res.redirect('/topics/text'));
module.exports=router;
