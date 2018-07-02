$(function() {
    var canvas=document.getElementById('MyCanvas');
    var context=canvas.getContext('2d');
    context.fillStyle='orange';
    context.strokeStyle = "black";
    for(i=0;i<5;i++){
        console.log('i:'+i);
        for(j=0;j<6;j++){
            console.log('j:'+j);
            context.fillRect(i*50,50,50,50);
            context.strokeRect(i*50,50,50,50);
        }
    }
  });