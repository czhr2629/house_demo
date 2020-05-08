const express =require('express')
const cors =require('cors')
// post请求
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

// 北京的数据
const beijng_hot = require('./data/home/beijing_homehot')
// 上海的数据
const shanghai_hot = require('./data/home/shanghai_homehot')
// 搜索的数据
const searchdata = require('./data/search/index')
// 详情页面的数据
const detaildata = require('./data/details/index')
// 评论的数据
const pinglundata = require('./data/comment/index')
// 全部订单数据
const orderdata = require('./data/shopcar/index')



// home页请求数据
app.get('/homehot',function(req,res){
    let city =req.query.city
    if(city === 'beijing'){
        res.send(beijng_hot)
    }else{
        res.send(shanghai_hot)
    }
})

// 搜索接口 get有：1. ?携带数据 2. restful数据
// 1. ？携带数据形式
app.get('/searchinfo',function(req,res){
    let keyword = req.query.keyword;
    // console.log(keyword)
    res.send(searchdata)
})
// 2. restful数据  使用params接收前端的数据{}
app.get('/searchinfo2/:keyword',function(req,res){
    let keyword = req.params.keyword;
    res.send(searchdata)
    // console.log(keyword)
})

// detail详情页面接口  post
app.post('/detail',(req,res)=>{
    let id = req.body.id;//传递过来的id
    // console.log(id)

    res.send(detaildata)
})

// 评论信息的接口  1. id   2.page
app.get('/pinglun',(req,res)=>{
    let id = req.query.id;
    let page = req.query.page;
    // console.log(id,page)

    res.send(pinglundata)
})

// 全部订单数据 restful数据使用params接收
app.get('/order/:user',function(req,res){
    let user = req.params.user;
    console.log(user)
    res.send(orderdata)
})


app.listen(4000,function(){
    console.log('运行在4000端口上')
})