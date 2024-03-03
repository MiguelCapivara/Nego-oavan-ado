x = 0;
y = 0;

ScreenWidth = 0;
screenHeight = 0;
var toNumber = "";
var drawApple = "";

function loadImage()
{
loadImage("apple.png")
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {


 console.log(event); 
 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
    to_number = Number(content);

    if (Number.isInteger(toNumber)){
      document.getElementById("status").innerHTML = "A maça começou a ser desenhada.";
      var set = drawApple = 1;

    }else{
      document.getElementById("status").innerHTML = "Numero não reconhecido";
    }
}

function setup() {
 
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  createCanvas(ScreenWidth=150,screenHeight=150)
 Canvas.position(150, 150, 150); ;
}

function draw() {
  if(drawApple == "set")
  {
    for(i=1; i <= toNumber; i+1){
Math.floor(Math.random(700))
Math.floor(Math.random(400))
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    image(drawApple, x, y,height,widht)

  }
}
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);
     speak();
    speakData = "";
}
