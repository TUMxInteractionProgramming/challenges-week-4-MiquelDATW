/* #6 start the #external #action and say hello */
console.log("Script is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Object which is set
 */
 /* 2. Treat your channels like objects */
function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName.name);

    //Write the new channel to the right app bar
    $('#channel-name').html(channelName.name);

    //#6 change the #channel #location
    $('#channel-location').html('by <a href="http://w3w.co/'+channelName.createdBy+'" target="_blank"><strong>'+channelName.createdBy+'</strong></a>');

    /* #6 #liking channels on #click */
    var star = (channelName.starred) ? 'fas fa-star a-bit-bigger' : 'far fa-star a-bit-bigger';
    $('#channel-star').removeClass().addClass(star);


    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');

    /* 3. Where am I? */
    currentChannel= channelName;
    console.log(currentChannel);
}

/* #6 #liking a channel on #click */
/* 4. Toggle the stars */
function star() {
    var c = $('#channel-star')[0].className;
    var s = (c=='fas fa-star a-bit-bigger');
    var myname = currentChannel.name.charAt(0)+currentChannel.name.charAt(1).toLowerCase()+currentChannel.name.slice(2);
    if (s){
        $('#channel-star').removeClass().addClass('far fa-star a-bit-bigger');
        currentChannel.starred = false;
        $('#channels '+myname+'-star').removeClass().addClass('far fa-star a-bit-bigger');
    }else{
        $('#channel-star').removeClass().addClass('fas fa-star a-bit-bigger');
        currentChannel.starred = true;
        $('#channels '+myname+'-star').removeClass().addClass('fas fa-star a-bit-bigger');
    }
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

/* 3. Where am I? */

var currentLocation = {longitude: 39.431817, latitude: -0.472828, what3words: "deserved.making.wanted"};
console.log(currentLocation);