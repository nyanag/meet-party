console.log('POP UPPP, party startedddd')

document.getElementById('celebrate').addEventListener('click', function(){
    console.log('clicked!')
    chrome.tabs.executeScript({
        file: 'celebrate.js'
    }); 
})