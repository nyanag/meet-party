var add_disco = setInterval(function (){
    if(document.body.contains(document.getElementsByClassName('NzPR9b')[0])){
        // console.log('YEEEEEEEEEE')
        stopInterval();
        addDisco();
    }
},3000)

function stopInterval(){
    clearInterval(add_disco);
}
function addDisco(){
        main = document.getElementsByClassName('NzPR9b')[0];
        disco = document.createElement("div");
        disco.id="celebratern"
        disco.innerHTML = "🎉"
        disco.style.fontSize = "30px"
        disco.style.padding = "5px"
        disco.style.marginLeft = "10px"
        main.insertBefore(disco,main.childNodes[0])
        disco.addEventListener("click", poof)
}

function poof(){
    // console.log('poof')
    // const poofpoof = chrome.tabs.executeScript({
    //     file: 'celebrate.js'
    // }); 
    // poofpoof.then(onexecuted, onerror)

    chrome.runtime.sendMessage({type: "notification", options: { 
        type: "basic", 
        title: "Test",
        message: "Test"
    }});

}
function onExecuted(result) {
    console.log(`We made it `);
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  chrome.extension.sendMessage({}, function(response) {
    //code to initialize my extension
});

//code to send message to open notification. This will eventually move into my extension logic
