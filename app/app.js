"use strict";
var main = {
	
restCall: function (uri,success){
	success(true);
},
callback:function (data){
	console.log(data);
}

}
main.restCall("ciao",main.callback);



