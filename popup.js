

document.addEventListener('DOMContentLoaded', function() {  
var dictresult = document.getElementById('dict-result');  
dictresult.textContent='Extension started';

    document.body.onmouseup = function() {mouseUp()};
    function mouseUp() {
       var txt = getSelText();       
        if (/[\u0900-\u097F]/.test(txt)) {            
          alert(txt);
          var url = 'https://spokensanskrit.de/index.php?beginning=0+&tinput='+txt+'&trans=Translate';
            
          var httpContent = httpGet(url);          
            alert('after fetch: '+txt);
          alert(httpContent);
        }
    }       
}, false);