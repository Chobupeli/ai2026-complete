const router=require('express').Router();
router.get('/',(req,res)=>{res.render('index',{title:'AI — интерактивный гид',home:false});});
router.get('/vision',(req,res)=>{res.send("<h1>Компьютерное зрение</h1>");});
router.get('/patterns',(req,res)=>{res.send("<h1>Закономерности в данных</h1>");});
router.get('/actions',(req,res)=>{res.send("<h1>Обучение с подкреплением</h1>");});
router.get('/text',(req,res)=>{res.send("<h1>Генерация текста</h1>");});
module.exports=router;
