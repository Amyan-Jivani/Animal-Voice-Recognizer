function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kZONda105/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
var bear=0;
var dog=0;
var lion=0;
var rooster=0;
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;
        document.getElementById("nameofaudio").innerHTML= " Detected Voice is of- " + results[0].label;
        document.getElementById("numberdetected").innerHTML="Detected Dog "+ dog+"Detected Lion "+ lion+"Detected Rooster "+ rooster+ "Detected Bear "+ bear;
        document.getElementById("nameofaudio").style.color= "rgb("+ random_number_r+","+ random_number_g+","+ random_number_b+")";
        document.getElementById("numberdetected").style.color= "rgb("+ random_number_r+","+ random_number_g+","+ random_number_b+")";
        img= document.getElementById("image_animal");
        if(results[0].label=="Dog Barking"){
            img.src="Dog-Barking Img.gif";
            dog= dog+1;
        }
        else if(results[0].label=="Rooster Crowing"){
img.src="Rooster-Crowing Img.gif";
rooster= rooster+1;
        }
        else if(results[0].label=="Lion Roaring"){
            img.src="Lion-Roaring Img.gif";
            lion= lion+1;
                    }
            else if(results[0]=="Bear Growling"){
                img.src="Bear-Growling Img.gif";
            bear= bear+1;
            }
            else{
                img.src="defaultimg.png";
            }
    }
}    