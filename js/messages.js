/* start the #external #action and say hello */
console.log("Messages is alive");

/* 1. Yikes! A Message! */

function Messages(text){
	this.createdBy = currentLocation.what3words;
	this.latitude = currentLocation.latitude;
	this.longitude = currentLocation.longitude;
	this.createdOn = new Date();
	this.expiresOn = new Date();
	this.expiresOn.setMinutes(this.expiresOn.getMinutes()+15);
	this.text = text;
	this.own = true;
}

function sendMessage(){
	var msg0 = $('#msg-text')[0].value;
	$('#msg-text')[0].value = "";
	var msg1 = new Messages(msg0);
	var msg2 = createMessageElement(msg1);
	$('#messages').append(msg2);
}

function createMessageElement(messageObject){
	var a = Date.parse(new Date());
	var b = Date.parse(messageObject.expiresOn);
	var msgExpiresIn = (b-a)/(1000*60);
	var msgCreatedOn = messageObject.createdOn.toLocaleString();

	var exitMessage = actualCreateMessageElement(messageObject.createdBy,msgCreatedOn,msgExpiresIn,messageObject.text);

	return exitMessage;
}

function actualCreateMessageElement(a,b,c,d){

	var msg = '<div class="message">';
	msg += '<h3><a href="http://w3w.co/' + a + '" target="_blank"><strong>' + a + '</strong></a>';
	msg += b + ' <em>' + c + ' min. left</em></h3>';
	msg += '<p>' + d + '</p><button>+5 min.</button></div>';

	return msg;
}