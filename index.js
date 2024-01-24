const msgs = ["אתה מת", "לא אכלתי כלום היום", "מי חבר שך'!", "גוג'ו אבא שלי", "אני מדבר עם החברות שלי"]
const lies = [msgs[1], msgs[4]]
console.log(msgs[0])

let i = 0;
function characterPlay(){
    var x = document.getElementsByClassName("bubble")[0];
    if (i >= msgs.length){
        i = 0;
        document.getElementsByClassName("guess-box")[0].style.display="block";
        
    } 
    let msg = msgs[i++];
    if (lies.includes(msg)){
        lie();
    }
    var text = document.getElementById("character-text");
    text.textContent = msg;


}

function toggleSpeechBubble() {
    console.log("Toggle speech bubble")
    var x = document.getElementsByClassName("bubble")[0];
    if (x.style.visibility == "hidden") {
        x.style.visibility = "visible";
      } else {
        x.style.visibility = "hidden";
      }
}

function cancel(){
    const x = document.getElementsByClassName("guess-box")[0];
    x.style.display = "none";
}

function showAnswer(){
    cancel(); // close window

    transition();
}
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }