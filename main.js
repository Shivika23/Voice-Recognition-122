x= 0
y= 0
draw_cir= ""
draw_rect= ""
draw_square= ""

var SpeechRecognition= window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML="System is listening please speak."

    recognition.start()
}

recognition.onresult=function(event){
    console.log(event)

    content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML="The shape has been recognised as" + content;

    if(content=="circle"){
        x= Math.floor(Math.random()*900)
        y= Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML="Circle is drawn";
        draw_cir="set"
    }

    if(content=="rectangle"){
        x= Math.floor(Math.random()*900)
        y= Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML="Rectangle is drawn";
        draw_rect="set"
    }

    if(content=="square"){
        x= Math.floor(Math.random()*900)
        y= Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML="Square is drawn";
        draw_square="set"
    }
}

function setup() {
    canvas= createCanvas(900,600)
}

function draw() {

    r= Math.floor(Math.random()*255)
    g= Math.floor(Math.random()*255)
    b= Math.floor(Math.random()*255)

    fill(r,g,b)

    if(draw_cir=="set"){
        radius=Math.floor(Math.random()*100)
        circle(x,y,radius)
        draw_cir=""
    }

    if(draw_rect=="set"){
        rect(x,y,70,50)
        draw_rect=""
    }

    if(draw_square=="set"){
        rect(x,y,50,50)
        draw_square=""
    }
}