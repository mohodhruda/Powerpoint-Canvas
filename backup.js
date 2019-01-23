var textButton= document.getElementById("textButton");
textButton.addEventListener("click",addTextBox)

const realFileBtn = document.getElementById("filetoRead");
const customBtn = document.getElementById("customButton");
customBtn.addEventListener("click", function() {
  realFileBtn.click();
});


function addTextBox()
{   
  //var count=0;
    var div = document.createElement("div");
    let textarea = document.createElement('div');
    textarea.setAttribute('class', 'textarea');
    textarea.setAttribute('contenteditable', 'true');


    //divs for resizing
    var resizersDiv=document.createElement("div");
    resizersDiv.setAttribute('class','resizers');
    var leftTopResizer = document.createElement("div");
    leftTopResizer.classList.add('resizer','top-left');
    var rightTopResizer = document.createElement("div");
    rightTopResizer.classList.add('resizer','top-right');
    var bottomLeftResizer = document.createElement("div");
    bottomLeftResizer.classList.add('resizer','bottom-left');
    var bottomRightResizer = document.createElement("div");
    bottomRightResizer.classList.add('resizer','bottom-right');

   CKEDITOR.inline(textarea);
    div.setAttribute('class','block');
    var draggableDiv =document.createElement("div");
    //draggableDiv.innerHTML="&nbsp";
    draggableDiv.setAttribute('class', 'draggableDiv');
    draggableDiv.innerHTML = '&nbsp';
    div.style="height:100px; width:20%;border:2px solid black;";
    // div.contentEditable="true";
    // div.setAttribute("contentEditable", "true");
    //textSpan = document.createElement("span");
    div.appendChild(draggableDiv);
    div.appendChild(textarea);
    div.appendChild(resizersDiv);
    resizersDiv.appendChild(leftTopResizer);
    resizersDiv.appendChild(rightTopResizer);
    resizersDiv.appendChild(bottomLeftResizer);
    resizersDiv.appendChild(bottomRightResizer);

 
    document.getElementById("canvas").appendChild(div);
    dragElement(div);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  // let elmnt = document.getElementById('block');
  // if (draggableDiv) {
  //   /* if present, the header is where you move the DIV from:*/
  // let elements = document.getElementById('block');
    draggableDiv.onmousedown = dragMouseDown;
  // } else {
  //   /* otherwise, move the DIV from anywhere inside the DIV:*/
  //   elmnt.onmousedown = dragMouseDown;
  // }


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    // alert("hi");
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    // alert(elmnt.style.top);
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    // alert(elmnt.style.left);
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//code for resizing:
//commit readme,gitgnore and LICENSE file
function makeResizableDiv(elements,k) {
  //const elements = document.getElementsByClassName("block");
  
    
    const resizers = document.querySelectorAll(' .resizer')
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;
  for (let i = 0;i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      original_width = parseFloat(getComputedStyle(elements[k], null).getPropertyValue('width').replace('px', ''));
      original_height = parseFloat(getComputedStyle(elements[k], null).getPropertyValue('height').replace('px', ''));
      original_x = elements[k].getBoundingClientRect().left;
      original_y = elements[k].getBoundingClientRect().top;
      original_mouse_x = e.pageX;
      original_mouse_y = e.pageY;
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })
    
    function resize(e) {
      if (currentResizer.classList.contains('bottom-right')) {
        elements[k].style.width = original_width + (e.pageX - original_mouse_x)  + 'px'
        elements[k].style.height = original_height + (e.pageY - original_mouse_y)  + 'px'
      }
      else if (currentResizer.classList.contains('bottom-left')) {
        elements[k].style.width = original_width - (e.pageX - original_mouse_x)  + 'px'
        elements[k].style.height = original_height + (e.pageY - original_mouse_y)  + 'px'
        elements[k].style.left = original_x + (e.pageX - original_mouse_x) + 'px'
      }
      else if (currentResizer.classList.contains('top-right')) {
        elements[k].style.width = original_width + (e.pageX - original_mouse_x)  + 'px'
        elements[k].style.height = original_height - (e.pageY - original_mouse_y)  + 'px'
        elements[k].style.top = original_y + (e.pageY - original_mouse_y) + 'px'
      }
      else {
        elements[k].style.width = original_width - (e.pageX - original_mouse_x)  + 'px'
        elements[k].style.height = original_height - (e.pageY - original_mouse_y)  + 'px'
        elements[k].style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        elements[k].style.left = original_x + (e.pageX - original_mouse_x) + 'px'
      }
    }
    
    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }



  }
  const elements = document.getElementsByClassName("block");
  
  makeResizableDiv(elements,elements.length-1);
  
alert (elements.length);
alert(elements[elements.length-1]);


}

    

    


document.getElementById("filetoRead").addEventListener("change",function(){
    var imageDiv=document.createElement("div");
    imageDiv.id='image';
    imageDiv.style="height:100px; width:20%;resize:both";
    var image = document.createElement("img");
    var draggableImageDiv =document.createElement("div");
    //draggableDiv.innerHTML="&nbsp";
    draggableImageDiv.setAttribute('class', 'draggableDiv');
    draggableImageDiv.innerHTML = '&nbsp';
    imageDiv.appendChild(draggableImageDiv);
    dragElement(imageDiv);
  var file = this.files[0];

  if (file) {
  		if ((file.type == 'image/png') ||
          (file.type == 'image/jpg') ||          
          (file.type == 'image/jpeg')
          ){
      	
         var reader = new FileReader();

      reader.onload = function (evt) {
          image.src=evt.target.result;
          image.style="max-width:100%; max-height:100%"
          imageDiv.appendChild(image);
          document.getElementById("canvas").appendChild(imageDiv);
          
         // document.getElementById("image-container").innerHTML = imgTag;
         
      };

      reader.onerror = function (evt) {
        console.error("An error ocurred reading the file",evt);
      };

      reader.readAsDataURL(file);
        
      }else{
      	alert("Please provide a png or jpg image.");
        return false;
      }
    }


    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      // let elmnt = document.getElementById('block');
      // if (draggableDiv) {
      //   /* if present, the header is where you move the DIV from:*/
      // let elements = document.getElementById('block');
        draggableImageDiv.onmousedown = dragMouseDown;
      // } else {
      //   /* otherwise, move the DIV from anywhere inside the DIV:*/
      //   elmnt.onmousedown = dragMouseDown;
      // }
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
      // alert("hi");
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      // alert(elmnt.style.top);
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      // alert(elmnt.style.left);
    }
    
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
    }

},false);




