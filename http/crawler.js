var http=require('http')
var url='http://www.imooc.com/learn/348';
//var url='http://59.151.37.253:8090/count';
var cheerio=require('cheerio');
function filterChapters(html){
	var $ = cheerio.load(html)
	var chapters =$('.chapter');

/*	[{
		chapterTitle:'',
		videos:[
			title:'',
			id:''
		]
	}]
*/
	var courseDate=[];
	chapters.each(function(){
		var chapter= $(this)
		var chapterTitle=chapter.find('strong').text().replace(/\ +/g,"").replace(/[\r\n]/g," ");
		var videos=chapter.find('.video').children('li')
		var chapterData={
			chapterTitle:chapterTitle,
			videos:[]
		}

		videos.each(function(item) {
			var video =$(this).find('.J-media-item')
			var videoTitle= video.text().replace(/\ +/g,"").replace(/[\r\n]/g," ");
			var id =video.attr('href').split('video/')[1];
			chapterData.videos.push({
				title:videoTitle,
				id:id
			})
		});
		courseDate.push(chapterData);

	})

	return courseDate

}
function printCourseInfo(courseDate){
	courseDate.forEach(function(item){
		var chapterTitle=item.chapterTitle;
		console.log(chapterTitle+'\n');
		item.videos.forEach(function(video){
			console.log('     【'+video.id+ '】 '+video.title +'\n');

		})

	})
}

http.get(url,function (res) {
	var html="";
	res.on('data',function (data) {
		html=html+data;
	});
	res.on('end',function () {
		var courseDate=filterChapters(html);
		printCourseInfo(courseDate);
	})
}).on('error',function () {
	console.log('获取数据课程出错!')
})