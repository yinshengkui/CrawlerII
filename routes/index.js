var express = require('express');
var router = express.Router();
var sixrooms = require("../module/6Rooms.js");
var laifeng = require("../module/laifeng.js");
var longzhu = require("../module/longzhu.js");
var huajiao = require("../module/huajiao.js");
var ingkee = require("../module/ingkee.js");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/sixrooms', function (req, res) {
    if (sixrooms.SixRooms()) {
        res.render('index', {title: '六间房 start running'});
    } else {
        res.render('index', {title: '六间房 already running'});
    }
});

router.get('/laifeng', function (req, res) {
    if (laifeng.laifeng()) {
        res.render('index', {title: '来疯 start running'});
    } else {
        res.render('index', {title: '来疯 already running'});
    }
});

router.get('/longzhu', function (req, res) {
    if (longzhu.longzhu()) {
        res.render('index', {title: '龙珠 start running'});
    } else {
        res.render('index', {title: '龙珠 already running'});
    }
});

router.get('/huajiao', function (req, res) {
    if (huajiao.huajiao()) {
        res.render('index', {title: '花椒 start running'});
    } else {
        res.render('index', {title: '花椒 already running'});
    }
});

router.get('/ingkee', function (req, res) {
    if (ingkee.ingkee()) {
        res.render('index', {title: '映客 start running'});
    } else {
        res.render('index', {title: '映客 already running'});
    }
});

router.get('/douyu', function (req, res, next) {
    if (douyu.DouYu()) {
        res.render('index', {title: '斗鱼 start running'});
    } else {
        res.render('index', {title: '斗鱼 already running'});
    }
});

router.get('/Panda', function (req, res, next) {
    if (panda.Panda()) {
        res.render('index', {title: '熊猫 start running'});
    } else {
        res.render('index', {title: '熊猫 already running'});
    }
});

router.get('/bilibli', function (req, res, next) {
    if (Bilibli.Bilibli()) {
        res.render('index', {title: '哔哩哔哩 start running'});
    } else {
        res.render('index', {title: '哔哩哔哩 already running'});
    }
});

router.get('/huya', function (req, res, next) {
    if (huya.HuYa()) {
        res.render('index', {title: '虎牙 start running'});
    } else {
        res.render('index', {title: '虎牙 already running'});
    }
});

router.get('/yy', function (req, res, next) {
    if (YY.YY()) {
        res.render('index', {title: 'YY start running'});
    } else {
        res.render('index', {title: 'YY already running'});
    }
});

module.exports = router;
