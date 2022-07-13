rock_song="";
folk_song="";
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
    rock_song= loadSound("ROCK.mp3");
    folk_song= loadSound("FOLK.mp3");
}

function draw(){
    image(video,0,0,600,530);

    fill("green");
    stroke("green");

    song_name = rock_song.isPlaying();
    console.log(song_name);

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        folk_song.stop();
        if(song_name == false){
            rock_song.play();
        }
        else{
            console.log("Rock song is playing");
            document.getElementById("song_id").innerHTML = "Rock Song is playing";
        }
    }
    if(scoreRightWrist > 0.2){
        circle(rightWrist_x,rightWrist_y,20);
        rock_song.stop();
        if(song_name == false){
            folk_song.play();
        }
        else{
            console.log("Folk song is playing");
            document.getElementById("song_id").innerHTML = "Folk Song is playing";
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