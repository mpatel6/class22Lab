function calculateRectArea(){
    
     var parent = document.getElementById("mainContainer");
     var length = prompt("Please enter length");
     var width = prompt("Please enter width");
     var node = document.createElement('h3');
     node.innerHTML = 'Rectangle Area is: ' + length*width;
     parent.appendChild(node);
}


function changeHeaderColor(){
    document.getElementById("header1").style.color = "#ff0000";
}

function displayCharacters(){
    var parent = document.getElementById("displayText");
    var msgLength = document.getElementById("header1").textContent.length;
    var msg = document.getElementById("header1").textContent;
    
    for(var i =0; i<msgLength;i++){
       // document.write(msg.charAt(i)+"<br>");
           var node = document.createElement('p');

       node.innerHTML = msg.charAt(i)+"<br>";
     parent.appendChild(node);
    }
      
}


