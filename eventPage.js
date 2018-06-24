var menuItem = {
	"id": "SIFT",
	"title": "SIFT",
	"contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
	return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
	if(clickData.menuItemId == "SIFT" && clickData.selectionText){
		var SIFTurl = "https://www.snopes.com/?s=" + fixedEncodeURI(clickData.selectionText);
		var createData = {
			"url": SIFTurl,
			"type": "popup",
			"top": 5,
			"left": 5,
			"width": screen.availWidth/2,
			"height": screen.availHeight/2,
		};
		chrome.windows.create(createData, function(){});
	}
});