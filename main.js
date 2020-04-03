var key1Val = true;
 
$(document).ready(function(){
    chrome.storage.local.get('koSwitch', function(result) {
        
        if(typeof result.koSwitch === "undefined") {
            chrome.storage.local.set({'koSwitch' : key1Val}, function() {
                console.log('[9dbPokemon extension] Setting koSwitch set to ' + key1Val );
                $("#koSwitch").prop("checked", key1Val);
            });
        }
        else{
            $("#koSwitch").prop("checked", result.koSwitch);
        }
    })

})


document.addEventListener('DOMContentLoaded',function(){
    
    koSwitch.addEventListener('change', function() {
 
        key1Val = $("#koSwitch").prop("checked");
        
        chrome.storage.local.set({'koSwitch': key1Val}, function() {
            console.log('[9dbPokemon extension] Setting koSwitch is ' + key1Val);
          });
        chrome.tabs.executeScript( null, {code:'document.getElementById("btnkoSwitch").value = "'+key1Val + '";'},
        function(){ 
            if(chrome.runtime.lastError) {
                console.error("Script execute failed:  " + chrome.runtime.lastError.message);
              }
        } );
    });

    var btnRefresh = document.getElementById("btnRefresh");

    btnRefresh.addEventListener('click', function() {
        // 새로고침 할때 처리할 내용 
        chrome.tabs.executeScript( null, {code:'document.getElementById("btnkoSwitch").click();'},
        function(){ 
            if(chrome.runtime.lastError) {
                console.error("Script execute failed: " + chrome.runtime.lastError.message);
              }
        } );        

    }); 
 
 });
 

 