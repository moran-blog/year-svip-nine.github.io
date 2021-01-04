if((/app\.4399\.funnycore/gi).test(navigator.userAgent)){
	//趣核不检测域名
}else{
	var blnOur = false;
	var arrOurDomain = ["http://www.4399.com","http://4399.com","http://www.4399.net","http://4399.net","http://my.4399.com","http://www.3839.com","http://3839.com","http://www2.4399.net","http://4399.somp3.com",".4399.com","http://test.4399.com","http://www.4399er.com"]
	var strLocation = document.referrer;
	if(top!=window){
		for (var j=0;j<arrOurDomain.length;j++){
			if(strLocation.indexOf(arrOurDomain[j])>=0){
				blnOur = true;
				break;
			}
		}
	}

	if(!blnOur){
		alert("4399小游戏");
	}
}
