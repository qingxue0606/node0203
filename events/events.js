var EventEmitter=require('events').EventEmitter;

var life= new EventEmitter()
//addEventListener
life.setMaxListeners(11);


function water (who) {
	console.log('给 '+ who +" 倒水")
}
life.on('求安慰',water);
life.on('求安慰',function(who){
	console.log('给 '+ who +" 做饭")
});

life.on('求安慰',function(who){
	console.log('给 '+ who +" 洗衣服")
});

life.on('求安慰',function(who){
	console.log('给 '+ who +" 揉肩")
});

life.on('求安慰',function(who){
	console.log('给 '+ who +" 倒水")
});

life.on('求安慰',function(who){
	console.log('给 '+ who +" 倒水")
});
life.on('求安慰',function(who){
	console.log('给 '+ who +" 倒水")
});
life.on('求安慰',function(who){
	console.log('给 '+ who +" 倒水8")
});
life.on('求安慰',function(who){
	console.log('给 '+ who +" 倒水9")
});
life.on('求安慰',function(who){
	console.log('给 '+ who +" 倒水10")
});
life.on('求安慰',function(who){
	console.log('给 '+ who +" 倒水11")
});

life.on('求溺爱',function(who){
	console.log('给 '+ who +" 买衣服")
});
life.on('求溺爱',function(who){
	console.log('给 '+ who +" 交工资")
});
//去掉监听函数
life.removeListener('求安慰',water);

life.removeAllListeners('求安慰');


var hasConforListener = life.emit('求安慰','汉子');
var hasLovedListener = life.emit('求溺爱','妹子');
var hasPlayedListener = life.emit('求万坏','汉子和妹子');
console.log(life.listeners('求安慰').length);
console.log(EventEmitter.listenerCount(life,'求安慰'));

console.log(hasConforListener)
console.log(hasLovedListener)
console.log(hasPlayedListener)