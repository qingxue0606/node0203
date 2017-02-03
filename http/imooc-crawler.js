var http=require('http')
// var url='http://www.imooc.com/learn/348';
var url='http://59.151.37.253:8090/count';
http.get(url,function (res) {
	var html="";
	res.on('data',function (data) {
		html=html+data;
	});
	res.on('end',function () {
		console.log(html);
	})
}).on('error',function () {
	console.log('获取数据课程出错!')
})