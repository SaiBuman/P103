Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality: 90,
    dest_width:340,
    dest_height:290
  }); 


  camera = document.getElementById("camera");
  Webcam.attach(camera);

  function takeSnapshot() {
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML = "<img src='" + data_uri + "' id='snapshot'>"
      });
  }

  console.log("ML5 version",ml5.version);

  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7_DlaHYQh/model.json",modelLoaded);

  function modelLoaded() {
      console.log("Model Loaded !");
  }

  function check() {
      img = document.getElementById("snapshot");
      classifier.classify(img , gotResult);
      }

 function gotResult(error,results) {
      if(error) {
          console.error("Error");

      }
      else{
          console.log(results);
        if (results[0].label == "Mother") {
            document.getElementById("result_emotion_name").innerHTML = "It's your Mom"
        }

        if (results[0].label == "Father") {
            document.getElementById("result_emotion_name").innerHTML = "It's your Dad"
        }

        if (results[0].label == "Brother") {
            document.getElementById("result_emotion_name").innerHTML = "It's your Brother"
        }    

        if (results[0].label == "Me") {
            document.getElementById("result_emotion_name").innerHTML = "It's you "
        } 
      }
 }