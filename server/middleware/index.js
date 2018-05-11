const router = require('express').Router();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const session = require('./session');
const cors = require('./cors');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cors);
router.use(session);
router.use(helmet());
router.use(cookieParser());

module.exports = router;
