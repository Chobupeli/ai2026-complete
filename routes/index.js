const router=require('express').Router();
router.get('/',(req,res)=>{res.render('index',{title:'AI — интерактивный гид',home:false});});
router.get('/vision',(req,res)=>{res.render('topic',{"title": "Компьютерное зрение", "picture": "/images/topic-vision.svg", "desc": "Изображение из пикселей превращается в оценки категорий.", "home": false});});
router.get('/patterns',(req,res)=>{res.render('topic',{"title": "Закономерности в данных", "picture": "/images/topic-patterns.svg", "desc": "Данные, поиск закономерности и прогноз — три части одного эксперимента.", "home": false});});
router.get('/actions',(req,res)=>{res.render('topic',{"title": "Обучение с подкреплением", "picture": "/images/topic-actions.svg", "desc": "Агент выбирает действия и ищет путь к цели среди препятствий.", "home": false});});
router.get('/text',(req,res)=>{res.render('topic',{"title": "Генерация текста", "picture": "/images/topic-text.svg", "desc": "Интерактивная схема показывает выбор продолжения по вероятностям следующего слова.", "home": false});});
module.exports=router;
