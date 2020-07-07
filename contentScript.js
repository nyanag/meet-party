var add_disco = setInterval(function (){
    if(document.body.contains(document.getElementsByClassName('NzPR9b')[0])){
        console.log('YEEEEEEEEEE')
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
        main.insertBefore(disco,main.childNodes[0])
        disco.addEventListener("click", console.log('Lez party'))
}