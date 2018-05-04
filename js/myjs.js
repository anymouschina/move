function getStyle(obj,attr){

if(obj.currentStyle){return obj.currentStyle[attr];}
else{

return getComputedStyle(obj,false)[attr];
}
}

 function startMove(obj,json,time,fn){
 	time=time?time:30;
	obj.timer=setInterval(function(){
		var flag=true;
		for(var attr in json){
		//取当前的值
		var icur=0;
		
		if(attr=='opacity'){
			icur=Math.round(parseFloat(getStyle(obj,attr))*100);
		}
		else{
			icur=parseInt(getStyle(obj,attr));//获取当前属性的数据 每次数据不一样
		}
		//速度
		var speed=(json[attr]-icur)/8;
		
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		//检测停止
	
			if(attr=='opacity'){
				obj.style.fliter='opacity:'+icur+speed+'';//火狐浏览器
				obj.style.opacity=(icur+speed)/100; //ie
			}
			else{
				obj.style[attr]=icur+speed+'px';
			}	
		if(icur!=json[attr]){
		flag=false;
		}
	  
	    //console.log(icur+'||'+json[attr]+'||高:'+obj.style.height); debug
		if(flag){
			
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
			}	
		}
	},30)
	
}