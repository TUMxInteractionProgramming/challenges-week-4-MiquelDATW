/* start the #external #action and say hello */
console.log("Channels is alive");


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
var sevenContinents = new Channel('SevenContinents',new Date(2016,4,2),'cheeses.yard.applies',true,60,5);
var killerApp = new Channel('KillerApp',new Date(2016,4,3),'minus.plus.yummy',false,1,10351);
var firstPersonOnMars = new Channel('FirstPersonOnMars',new Date(2016,4,4),'minus.plus.yummy',true,3003,2424);
var octoberFest = new Channel('OctoberFest',new Date(2016,4,5),'minus.plus.yummy',false,60,321);

var currentChannel;

function listChannels(){

	var ch = createChannelElement(yummy);
	$('#channels ul').append(ch);

	ch = createChannelElement(sevenContinents);
	$('#channels ul').append(ch);

	ch = createChannelElement(killerApp);
	$('#channels ul').append(ch);

	ch = createChannelElement(firstPersonOnMars);
	$('#channels ul').append(ch);

	ch = createChannelElement(octoberFest);
	$('#channels ul').append(ch);
}

function createChannelElement(channelObject){

	var nameC = channelObject.name.substring(1,channelObject.name.length);
	var nameU = nameC.charAt(0).toLowerCase()+nameC.substring(1,nameC.length);
	var star = (channelObject.starred) ? "fas" : "far";
	var messages = channelObject.messageCount;
	var expires = channelObject.expiresIn;

	var exitChannel = actualCreateChannelElement(nameU,nameC,star,messages,expires);

	return exitChannel;
}

function actualCreateChannelElement(u,c,s,m,e){

	var ch = '<li onclick="switchChannel('+u+')">#'+c;
	ch += '<!-- #5 #channels #icons now grouped in .channel-meta span -->';
	ch += '<span class="channel-meta">';
	ch += '<i id="'+u+'-star" class="'+s+' fa-star a-bit-bigger"></i>';

	ch += '<span class="small-and-blue">' + e + ' min</span> ';
	ch += '<span class="small-and-blue">' + m + ' new</span> ';

	ch += '<!-- #5 #channels #icons now with chevron -->';
	ch += '<i class="fas fa-chevron-right a-bit-bigger"></i>';
	ch += '</span>' + '</li>';

	return ch;
}

/*

        <li onclick="switchChannel(yummy)">
            #Yummy
            <!-- #5 #channels #icons now grouped in .channel-meta span -->
            <span class="channel-meta">
                <i id="yummy-star" class="far fa-star a-bit-bigger"></i>
                <!-- #5 #channels #icons now with chevron -->
                <i class="fas fa-chevron-right a-bit-bigger"></i>
            </span>
        </li>

*/