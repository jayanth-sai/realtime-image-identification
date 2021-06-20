function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('Mobilenet', modelLoaded);
}


function modelLoaded(){
  console.log ("model is Loaded")
}

function draw(){

  image (video,0, 0, 300, 300)
  classifier.classify(video, gotResult);

}

function gotResult(error, result){
if (error){

  console.log(error)
}

else{
  console.log(result)
document.getElementById("object").innerHTML = result[0].label;

document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3)
}

}