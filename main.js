
var lastpositionofx, lastpositionofy;
var mouseEvent="empty"
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "blue";
    widthoftheline = 2;
  
    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e)
{
    mouseEvent="mouseDown"
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent="mouseUp"
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseLeave"
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
     if(mouseEvent=="mouseDown"){
       ctx.beginPath()
        ctx.strokeStyle="blue"
         ctx.lineWidth=widthoftheline
      
            ctx.moveTo(lastpositionofx, lastpositionofy); 
            
               ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
                ctx.stroke();
}
}