nosex = 0;
nosey=0;
difference = 0;
rightxwrist = 0;
leftxwrist = 0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Posenet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex = "+ nosex + "nose y = "+nosey);
        leftxwrist = results[0].pose.leftWrist.x;
        rightxwrist = results[0].pose.rightWrist.x;
        difference = floor(leftxwrist-rightxwrist);
        console.log("leftwristx ="+leftxwrist+ "rightwristx = " + rightxwrist + "difference =" + difference);
    }
}
function draw(){
    background('#808080');
    document.getElementById("square_side").innerHTML = "width and height =" +difference+"px";
    fill('#008080');
    stroke('#008080');
    square(nosex,nosey,difference);
    

}