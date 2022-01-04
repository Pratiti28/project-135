status="";
objects=[];

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
    if(status!=""){
    objectdetector.detect(video,gotresults);
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status:objects detected";
        fill("red");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
        nofill();
        stroke("red");
        rect(objects[i].x,objects[i].y,object[i].width,objects[i].height);
        if(objects[i].label==objectname){
            video.stop()
            objectdetector.detect(gotresults);
            document.getElementById("object_status").innerHTML=objectname+" found";
            synth=window.speechSynthesis;
            utterthis=new SpeechSynthesisUtterance(objectname+" found");
            synth.speak(utterthis);

        }
        else{
            document.getElementById("object_status").innerHTML=objectname+" not found";
        }
    }
    }
}

function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}