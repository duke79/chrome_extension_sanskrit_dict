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
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
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
  }  
});