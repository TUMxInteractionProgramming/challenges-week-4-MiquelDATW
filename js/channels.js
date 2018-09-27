/* #6 start the #external #action and say hello */
console.log("Channels are alive");


/* 2. Treat your channels like objects */
function Channel(n,d,c,s,e,m){
	this.name = "#"+n;
	this.createdOn = d;
	this.createdBy = c;
	this.starred = s;
	this.expiresIn = e;
	this.messageCount = m;
}

function channelCopy(c){
	return new Channel(c.name.substring(1,c.name.length),c.createdOn,c.createdBy,c.starred,c.expiresIn,c.messageCount);
}

//var yummy = {name: 'yummy', createdOn: new Date(2016,4,1), createdBy: "minus.plus.yummy", starred: false, expiresIn: 100, messageCount: 999};

var yummy = new Channel('Yummy',new Date(2016,4,1),'minus.plus.yummy',false,100,999);
var sevenContinents = new Channel('SevenContinents',new Date(2016,4,2),'cheeses.yard.applies',true,100,999);
var killerApp = new Channel('KillerApp',new Date(2016,4,3),'minus.plus.yummy',false,100,999);
var firstPersonOnMars = new Channel('FirstPersonOnMars',new Date(2016,4,4),'minus.plus.yummy',true,100,999);
var octoberFest = new Channel('OctoberFest',new Date(2016,4,5),'minus.plus.yummy',false,100,999);

var currentChannel;
