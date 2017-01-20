var mSelectedText;
function getSelText()
{
	var txt='';
	if (window.getSelection)
	{
//		window.alert('txt='+window.getSelection());
		return txt+window.getSelection();
	}
	else if (document.getSelection)
	{
		return txt+document.getSelection();
	}
	else if (document.selection)
	{
		return document.selection.createRange().text;
	}
	else return 'not found!';            
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.onload = function (e) {
	  if (xmlHttp.readyState === 4) {
		if (xmlHttp.status === 200) {
		  console.log(xmlHttp.responseText);
		  var result = $(xmlHttp.responseText).find("table.bgcol2 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(4) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(5)").innerText;
		  console.log("Result: "+result);
		} else {
		  console.error(xmlHttp.statusText);
		}
	  }
	};
	xmlHttp.onerror = function (e) {
	  console.error(xmlHttp.statusText);
	};
	xmlHttp.send(null);
    return xmlHttp.responseText;
}

$( "*" ).mouseup(function() {
  var text = getSelText();
  if(text!=null)
	  text = text.trim();
  if(text!=null && text!=mSelectedText)
  {
	  mSelectedText=text;
	  console.log("Text: "+mSelectedText);
	  var url = 'http://spokensanskrit.de/index.php?beginning=0+&tinput='+mSelectedText+'&trans=Translate';console.log("URL: "+url);	                     
		
	  var httpContent = httpGet(url);          
	  console.log('after fetch: '+mSelectedText);
	  console.log(httpContent);
	  // $("table.bgcol2 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(4) > tbody:nth-child(2) > tr:nth-child(
	  //2
	  //) > td:nth-child(5)")
	  var result = $(httpContent).find("table.bgcol2 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(4) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(5)").innerText;
	  console.log("Result: "+result);
  }  
});