
var commands = [];
var consoleText = document.getElementById("console-text");
var lines = document.getElementById("terminal-lines"); //needs to be changed later
var textInput = document.getElementById("terminal-input");
var currentLine = document.getElementById("current-line");
var lastLine = document.getElementById("last-line");


//This function needs to be modify to add new html elements, instead of appending to existing. (Incomplete)
function printToTerminal(){
  let innerH = "";
  for (let i = 0; i<commands.length; i++){
    innerH += commands[i] + "<br>";
  }
  lines.innerHTML = innerH;
}


function addLine(text, style, time){
  var t="";
  //loops through text to eliminate extra spaces.
  for (let i=0; i<text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    }
    else{
      t+=text.charAt(i);
    }
  }

  //create a new paragraph element.
  var nextLine = document.createElement("p");
  nextLine.innerHTML = t;
  nextLine.style = style;
  lastLine.appendChild(nextLine);
  lastLine = nextLine;

  
}

document.body.onkeyup = function(e) {
  if(e.keyCode == 13) {
    var value = textInput.value.slice(0,-1);
    console.log(value);
    
    commands.push(value)

    textInput.value = "";
    //printToTerminal();
    //addLine(value, '',0);
    options(value);
    currentLine.innerHTML = "";

    
    
  }

  if (e.code == "Space") {

    //console.log(commands);
    //console.log(help[1]);
  }
}

function typeIt(from,e){
  //console.log("Key being pressed");

  //If paramater 'e' was not passed, default it to window.event.
  e = e || window.event;

  console.log(from.value);
  currentLine.innerHTML = from.value;
}

function options(input){
  addLine("<b>></b> <span style='color:yellow;'>"+input+"</span>", '',0);
  let str ="";
  switch(input.toLowerCase()) {
    case "about-me":
      str = "";
      for (let i = 0; i<about.length;i++){
        str+=about[i];
      }
      addLine(str,'',0);
      break;
    case "about-this":
      str = "";
      for (let i=0;i<this_project.length;i++){
        str+=this_project[i];
      }
      addLine(str,'',0)
    case "socials":
      addLine('<a href="https://github.com/InfiniteTachyon">Github</a>','', 0);
      break;
    case "help":
      str = "<br>";
      for (let i=0; i<help.length;i++) {
        str+=help[i];
        str+="<br>";
      }
      addLine(str, '',0);
      break;
    case "clear":

      while (consoleText.firstChild) {
        consoleText.removeChild(consoleText.lastChild);
      }
      lastLine = consoleText;
      break;
    default:
      addLine("This command does not exist. {finish later}",'',0);
  }
}
