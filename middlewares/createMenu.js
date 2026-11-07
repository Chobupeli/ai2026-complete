const Topic=require('../models/topic');module.exports=async(req,res,next)=>{try{res.locals.nav=await Topic.find({},'title nick -_id').sort({created:1}).lean();next();}catch(err){next(err);}};
