const router=require('express').Router();
const staticNav=[{"title": "Компьютерное зрение", "nick": "vision", "avatar": "/images/topic-vision.svg", "desc": "Изображение из пикселей превращается в оценки категорий."}, {"title": "Закономерности в данных", "nick": "patterns", "avatar": "/images/topic-patterns.svg", "desc": "Данные, поиск закономерности и прогноз — три части одного эксперимента."}, {"title": "Обучение с подкреплением", "nick": "actions", "avatar": "/images/topic-actions.svg", "desc": "Агент выбирает действия и ищет путь к цели среди препятствий."}, {"title": "Генерация текста", "nick": "text", "avatar": "/images/topic-text.svg", "desc": "Интерактивная схема показывает выбор продолжения по вероятностям следующего слова."}];
router.get('/',(req,res)=>{res.locals.nav=staticNav;res.cookie('greeting','Hello AI',{sameSite:'lax',httpOnly:true,maxAge:3600000});res.render('index',{title:'AI — интерактивный гид',home:true});});
router.get('/vision',(req,res)=>res.redirect('/topics/vision'));
router.get('/patterns',(req,res)=>res.redirect('/topics/patterns'));
router.get('/actions',(req,res)=>res.redirect('/topics/actions'));
router.get('/text',(req,res)=>res.redirect('/topics/text'));
module.exports=router;
