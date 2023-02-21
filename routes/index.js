const router=require('express').Router();

router.get('/',require('../controllers/intial').init,require('../controllers/index').getPos);
router.post('/',require('../controllers/intial').init,require('../controllers/index').postPos);
module.exports={router};