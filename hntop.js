function hnParentUrl(doc) {
	var parentReference = doc.getElementsByClassName('par')[0];
	if (parentReference && parentReference.childNodes[1] && parentReference.childNodes[1].attributes[0]) {
		return parentReference.childNodes[1].attributes[0].value;
	}
}
function withDomFrom(url, callback) {
	var h = new XMLHttpRequest();
	h.onreadystatechange = function() {
		if (this.readyState == 4) {
			callback(h.responseXML.documentElement);
		}
	};
	h.open("GET", url);
	h.responseType = 'document';
	h.send();	
}

function withTopUrl(callback, doc, url) {
	doc = doc || document;
	url = url || document.location.href;
	var parentUrl = hnParentUrl(doc);
	if (parentUrl) {
		withDomFrom(parentUrl, function(parentDom) {
			withTopUrl(callback, parentDom, parentUrl);	
		});
	} else {
		callback(url);	
	}

}
function redirectTo(url) {
	document.location.href = url;
}

withTopUrl(redirectTo);
