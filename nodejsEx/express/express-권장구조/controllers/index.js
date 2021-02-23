const { Router } = require('express');
const router = Router()

router.use('/admin', require('./admin'));

module.exports = router;

// 모든 폴더별 위치가 저장되는 파일