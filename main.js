status="";


function setup(){
    canvas= createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}

function start(){
    objectdetector=ml5.objectDetector("cocossd",modalloaded);
    document.getElementById("status").innerHTML="status: detecting objects";
    objectname=document.getElementById("object").value;
}

function modalloaded(){
    console.log("model is loaded");
    status=true;
}

function draw(){
    image(video,0,0,480,380);
}