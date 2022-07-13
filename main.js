folk="";
instrumental="";
pop_music="";
rock="";
hindi="";
english="";
tamil="";
punjabi="";
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;
function modelLoaded(){
    console.log("MODEL IS LOADED");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left WristX: "+leftWristX+" Left WristY: "+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Right WristX: "+rightWristX+" Right WristY: "+rightWristY);
    }
}
function draw(){
    image(video, 0, 0, 500, 400);
}
function next_page1(){
    window.open("index1.html");
}
function next2(){
    window.open("index2.html");
}
function next3(){
    window.open("index3.html");
}
function next4(){
    window.open("index4.html");
}