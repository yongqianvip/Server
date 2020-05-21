var express = require('express');
var app = express();

var clientList = require('./src/json/clientList.json');

app.use('/public', express.static('public'));

app.get('/index.htm', function (req, res) {
  console.log(__dirname);
   res.sendFile( __dirname + "/src/" + "index.htm" );
})
/**
 *
 */
app.get('/login', function (req, res) {
  console.log(req.query);
  var passwordString = req.query.password + '';
  var nameString = req.query.name + '';
  var response = {}
  setTimeout(() => {
    if('123' == passwordString){
      response = {
        status: 0,
        data: {
          name:req.query.name,
          token: ''+parseInt(Math.random() * 1000000)
        }
      };
    }else{
      response = {
        status: -1,
        des: '密码错误'
      }
    }
    res.send(JSON.stringify(response));
  }, 1000);
})
/**
 * get user  info
 */
app.get('/user', function(req, res){
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/user.json")
  }, 500);
})

// 客户列表
app.get('/clientList', function(req, res){
  console.log(req.query);
  var params = req.query;
  var page = parseInt(params ? params['page'] : 0);
  var allClient = clientList['list'];
  var targetClient = [];
  if(page * 10 + 10 < allClient.length){
    targetClient = allClient.slice(page * 10, page * 10 + 10);
  }
  var response = {
    status: 0,
    data: {
      list: targetClient
    }
  }
  setTimeout(() => {
    res.send(JSON.stringify(response));
  }, 4000);
})

app.get('/checkVersion', function(req, res){
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/version.json")
  }, 1000);
})

app.get('/getHomeData', function(req, res){
  console.log(req.headers);
  console.log(req.query);
  const params = req.query
  if (params.page > 9) {
    params.page = 0
  }
  setTimeout(() => {
    if (params.all) {
      res.sendFile(__dirname + "/src/json/runwaygo/home.json")
    }else{
      res.sendFile(__dirname + "/src/json/runwaygo/home" + params.page + ".json")
    }
  }, 1000);
})

app.get('/searchResultList', function(req, res){
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/runwaygo/search/searchResult.json")
  }, 1000);
})
// "header": {
//   "type": "1 视频  0 普通图片",
//   "pic": "http://pic.runwaygo.com/image/user/201911201518336328968.jpg",
//   "videoUrl": "pic.runwaygo.com/video/test201911211513251255911.mp4"
// },

app.get('/productDetail', function(req, res){
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/runwaygo/product/detail.json")
  }, 500)

})


app.get('/getAddressList', function(req, res){
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/runwaygo/mine/address.json")
  }, 500)

})

app.get('/getPayInfo', function(req, res){
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/runwaygo/pay/payInfo.json")
  }, 1000)

})


app.get('/getPayOfflineData', function(req, res){
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/runwaygo/pay/payOffline.json")
  }, 1000);
})


app.get('/getPreAddress', function(req, res){
  const params = req.query
  const id = params.id
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/runwaygo/mine/preAddress_" + id + ".json")
  }, 0);
})

app.get('/getOrderDetail', function(req, res){
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/runwaygo/order/orderDetail.json")
  }, 500);
})


app.get('/getBatchProductList', function(req, res){
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/runwaygo/search/batchProductList.json")
  }, 500);
})

app.get('/getUnionPayData', function(req, res){
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/runwaygo/charles/unionpay.json")
  }, 500);
})


app.get('/getHotSearchList', function(req, res) {
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/rayCloud/hotSearchList.json")
  }, 500);
})

app.get('/keywordAssociate', function(req, res) {
  setTimeout(() => {
    res.sendFile(__dirname + "/src/json/rayCloud/keywordAssociate.json")
  }, 500);
})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port
  console.log(server.address());

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
  // console.log(clientList);
})

