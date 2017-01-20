
var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);

/*function getSelText()
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

document.addEventListener('DOMContentLoaded', function() {  
    console.log("Sanskrit Dictionary loaded.");
	var dictresult = document.getElementById('dict-result');  
	dictresult.textContent='Extension started';	
    
	//chrome.tabs.executeScript(null, {code: 'window.alert("doc="'});
	//window.alert('doc='+document.documentElement.innerHTML);      
	
	var txt = getSelText();       	
	
	dictresult.textContent='txt='+txt;
	if (/[\u0900-\u097F]/.test(txt)) {            
	  alert(txt);
	  var url = 'https://spokensanskrit.de/index.php?beginning=0+&tinput='+txt+'&trans=Translate';
		
	  var httpContent = httpGet(url);          
		alert('after fetch: '+txt);
	  alert(httpContent);
	}    
	
}, false);*/