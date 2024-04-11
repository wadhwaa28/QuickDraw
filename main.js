images=["ball","clock","bottle","particle accelerator","jug","pen","book","apple","black hole","torch", "potato"];
randomnumber=Math.floor((Math.random()*images.length)+1);
sketch=images[randomnumber];
document.getElementById("sketchdrawn").innerHTML="sketch to be drawn:"+sketch;
timer=0;
timercheck="";
score=0;
answer="";
drawnsketch="";
function updateCanvas(){
    background("whitesmoke")
    randomnumber=Math.floor((Math.random()*images.length)+1);
    sketch=images[randomnumber];
    document.getElementById("sketchdrawn").innerHTML="sketch to be drawn:"+sketch;
}
function setup(){
    canvas=createCanvas(800,560);
    canvas.center();
    background("whitesmoke");
}
function clearCanvas() {
    background("whitesmoke");
}
function draw() {
    check_sketch();
    if (drawnsketch == sketch) {
        answer="set";
        score++;
        document.getElementById("score").innerHTML="Score:"+score;
    }
}
function check_sketch() {
    timer++
    document.getElementById("time").innerHTML="Timer:"+timer;
    if (timer >= 400) {
        timer=0;
        timercheck="completed";
    }
    if (answer == "set" || timercheck == "completed") {
        answer="";
        timercheck="";
        updateCanvas();
    }
}