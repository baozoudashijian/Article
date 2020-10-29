const express = require('express')
const app = express()
const superagent = require('superagent')
const cheerio = require('cheerio')
let hotNews = []
let server = app.listen(3005, function() {
    let host = server.address().address
    let port = server.address().port

    console.log('Your App is running at http://', host, port)
})

// 这个方法是等到浏览器输入地址的时候才会调用.
// 所以这个hotNews的不会为空数据.
app.get('/', function(req, res) {
    console.log('顺序3')
    res.send(hotNews)
})



superagent.get('https://news.163.com/').end((err, res) => {
// superagent.get('http://news.sohu.com/').end((err, res) => {
// superagent.get('https://news.qq.com/').end((err, res) => {
// superagent.get('http://news.baidu.com/').end((err, res) => {
    console.log('顺序1')
    if (err) {
        console.log(err)
    } else {
        hotNews = getHotNews(res)
    }
})

let getHotNews = (res) => {
    console.log('顺序2')
    let hotNews = []
    let $ = cheerio.load(res.text)

    console.log(res.text)

    $('#js_top_news ul li a').each((idx, ele) => {
    // $('.focus-news a').each((idx, ele) => {
    // $('#List .list li .detail h3 a').each((idx, ele) => {
    // $('div#pane-news ul li a').each((idx, ele) => {
        // console.log(11)
        // console.log(idx);
        // console.log(ele)
        let news = {
            title: $(ele).text(),
            href: $(ele).attr('href')
        }
        hotNews.push(news)
    })
    // console.log(hotNews)

    return hotNews
}