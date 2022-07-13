tamil_song="";
hindi_song="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
song_name = "";
scoreRightWrist=0;

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload(){
    tamil_song= loadSound("TAMIL_COMPRESSED.wav");
    hindi_song= loadSound("HINDI_COMPRESSED.wav");
}

function draw(){
    image(video,0,0,600,530);

    fill("green");
    stroke("green");

    song_name = tamil_song.isPlaying();
    console.log(song_name);

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        hindi_song.stop();
        if(song_name == false){
            tamil_song.play();
        }
        else{
            console.log("Tamil song is playing");
            document.getElementById("song_id").innerHTML = "Tamil Song is playing";
        }
    }

    if(scoreRightWrist>0.2){
        circle(rightWrist_x, rightWrist_y, 20);
        tamil_song.stop();
        if(song_name==false){
            hindi_song.play();
        }
        else{
            console.log("Hindi song is playing");
            document.getElementById("song_id").innerHTML="Hindi song is playing";
        }
    }
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        scoreRightWrist=results[0].pose.keypoints[10].score;
        console.log(scoreRightWrist);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}