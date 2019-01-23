window.onload=function(){var div = document.createElement("div");
    
div.id='block';
var draggableDiv =document.createElement("div");
draggableDiv.innerHTML="&nbsp";
draggableDiv.setAttribute('class', 'draggableDiv');

div.style="height:100px; width:20%;border:2px solid black;";
// div.contentEditable="true";
div.setAttribute("contentEditable", "true");
//textSpan = document.createElement("span");
//CKEDITOR.inline(div);
div.appendChild(draggableDiv);

document.getElementById("canvas").appendChild(div);}