$(function() {
    var canvas=document.getElementById('MyCanvas');
    var context=canvas.getContext('2d');
    context.fillStyle='orange';
    context.strokeStyle = "white";
    for(i=0; i<5; i++) {
        for(j=0; j<i+1; j++) {
            context.fillRect(50 + j * 50, 50 + i * 50, 45, 45);
            //context.strokeRect(50 + j * 50, 50 + i * 50, 50, 50);
        }
    }
  });