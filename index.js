var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonPress = this.innerHTML;
        
btnAni(buttonPress);
makeSound(buttonPress);

    });
}

document.addEventListener("keypress",function(event){
makeSound(event.key);
btnAni(event.key);
});

function makeSound(key){
    switch (key) {
        case "w": var audio = new Audio('/sounds/tom-1.mp3');
            audio.play()
            break;

        case "a": var audio = new Audio('/sounds/tom-2.mp3');
            audio.play()
            break;

        case "s": var audio = new Audio('/sounds/tom-3.mp3');
            audio.play()
            break;

        case "d": var audio = new Audio('/sounds/tom-4.mp3');
            audio.play()
            break;

        case "j": var audio = new Audio('/sounds/kick-bass.mp3');
            audio.play()
            break;

        case "k": var audio = new Audio('/sounds/snare.mp3');
            audio.play()
            break;

        case "l": var audio = new Audio('/sounds/crash.mp3');
            audio.play()
            break;
        
            default:
    }

}
function btnAni(key){
   var activbtn=document.querySelector("."+key);

   activbtn.classList.add("pressed");

   setTimeout(() => {
       activbtn.classList.remove("pressed");
   }, 100);

}



// document.addEventListener("keypress",function(){
// alert("hello");
// });
