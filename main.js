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
    canvas.mouseReleased(classifyCanvas);
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
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
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
function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}
function gotResult(error,results){
    if (error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById("label").innerHTML="Label:"+results[0].label;
    document.getElementById("confidence").innerHTML="Confidence:"+Math.round(results[0].confidence*100)+"%";
    utterThis=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}
