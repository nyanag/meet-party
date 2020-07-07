// alert(
//     document.body.contains(document.getElementsByClassName('NzPR9b')[0])    
// )

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "notification"){
        chrome.tabs.executeScript({
            file: 'celebrate.js'
        }, function() {
            console.log('script done')
        }); 
    }

    sendResponse();
});