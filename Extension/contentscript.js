// From http://stackoverflow.com/questions/4445102/google-chrome-extension-highlight-the-div-that-the-mouse-is-hovering-over
// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// chrome.runtime.sendMessage({method: 'asdf'});

//Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;

var mode = "tool-none";
var prevOpacity = null;

//Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {
  if (mode == "tool-none") {
    if (prevDOM != null) {
      prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
      prevDOM = null;
    }
  } else {
    var srcElement = e.srcElement;

    // Lets check if our underlying element is a DIV.
    if (srcElement.nodeName == 'DIV') {

      // For NPE checking, we check safely. We need to remove the class name
      // Since we will be styling the new one after.
      if (prevDOM != null) {
        prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
      }
      if (mode == "tool-reveal-hidden") {
        if (prevOpacity != null) {
          // Restore old opacity
          prevDOM.style.opacity = prevOpacity;
        }
        // Save old opacity
        prevOpacity = srcElement.style.opacity;
        srcElement.style.opacity = 1;
      }

      

      // Add a visited class name to the element. So we can style it.
      srcElement.classList.add(MOUSE_VISITED_CLASSNAME);



      // if (prevDOM.style.opacity == "0") {
      //   prevDOM.style.opacity = ;
      //   prevDOM.style.opacity = "0";
      // }


      // The current element is now the previous. So we can remove the class
      // during the next iteration.
      prevDOM = srcElement;
      
      //prevDOM.style.opacity = "0";
    }
  }
}, false);

document.addEventListener("click", function(e) {
  if (prevDOM != null) {
    if (mode == "tool-set_hidden") {
        prevDOM.style.opacity = "0";
    } else if (mode == "tool-reveal-hidden"){
        prevDOM.style.opacity = "1";
        prevOpacity = null;
    }else if (mode == "tool-set_delete"){
        prevDOM.hidden = true;
//     } else if (mode == "tool-drag_and_drop") {
//        prevDOM.ondragstart="event.dataTransfer.setData('text/plain',null)"
//        prevDOM.draggable="true";
//     } else if (mode == "tool-color") {
//         prevDOM.style.color = "purple";
//     }
    }else if (mode == "tool-cat"){
      var cat = document.createElement("DIV");
      cat.setAttribute("width", prevDOM.offsetWidth);
      cat.setAttribute("height", prevDOM.offsetHeight);
      cat.setAttribute("background-color", "red");
      cat.setAttribute("background-image", "url('https://s-media-cache-ak0.pinimg.com/originals/c2/48/36/c24836d55ec95a86f1bda1b42b2297c0.jpg')");
      cat.setAttribute("background-size", "cover");
      prevDOM.parentNode.insertBefore(cat, prevDOM);
      prevDOM.parentNode.removeChild(prevDOM);
    }
  }
});

chrome.runtime.onMessage.addListener(function(request) {
  if (request.msg == "tool-none") {
    mode = "tool-none";
  }
  else if (request.msg == "tool-set_hidden") {
    mode = "tool-set_hidden";
  }
  else if (request.msg == "tool-reveal-hidden") {
    mode = "tool-reveal-hidden";
  }
  else if (request.msg == "tool-set_delete") {
    mode = "tool-set_delete";
  }
  // else if (request.msg == "tool-drag_and_drop") {
  //   mode = "tool-drag_and_drop";
  // }
  else if (request.msg == "tool-cat") {
    mode = "tool-cat";
  }
});
//
// document.addEventListener("drag", function( event ) {
//
// }, false);
//
//   document.addEventListener("dragstart", function( event ) {
//       // store a ref. on the dragged elem
//       dragged = event.target;
//       // make it half transparent
//       event.target.style.opacity = .5;
//   }, false);
//
//   document.addEventListener("dragend", function( event ) {
//       // reset the transparency
//       event.target.style.opacity = "";
//   }, false);
//
//   /* events fired on the drop targets */
//   document.addEventListener("dragover", function( event ) {
//       // prevent default to allow drop
//       event.preventDefault();
//   }, false);
//
//   document.addEventListener("dragenter", function( event ) {
//       // highlight potential drop target when the draggable element enters it
//       if (prevTarget != null) {
//         prevTarget.classList.remove(MOUSE_VISITED_CLASSNAME);
//       }
//       event.target.classList.add(MOUSE_VISITED_CLASSNAME);
//       prevTarget = event.target
//
//   }, false);
//
//   document.addEventListener("dragleave", function( event ) {
//       // reset background of potential drop target when the draggable element leaves it
//       if (prevTarget != null) {
//         prevTarget.classList.remove(MOUSE_VISITED_CLASSNAME);
//       }
//       event.target.classList.add(MOUSE_VISITED_CLASSNAME);
//       prevTarget = event.target
//   }, false);
//
//   document.addEventListener("drop", function( event ) {
//       // prevent default action (open as link for some elements)
//       event.preventDefault();
//       // move dragged elem to the selected drop target
//           event.target.style.background = "";
//           dragged.parentNode.removeChild( dragged );
//           event.target.appendChild( dragged );
//
//   }, false);
//
// function setTextColor(color) {
//   if (prevDOM != null) {
//
//   }
// }
function getEditableDocument() {
  var range, sel = window.getSelection();
  if (sel.rangeCount && sel.getRangeAt) {
      range = sel.getRangeAt(0);
  }
  document.designMode = "on";
  if (range) {
      sel.removeAllRanges();
      sel.addRange(range);
  }
  return document;
}

function makeEditableOneParam(param1) {
    document = getEditableDocument();
    // Use HiliteColor since some browsers apply BackColor to the whole block
    // if (!document.execCommand("HiliteColor", false, colour)) {
    //     document.execCommand("BackColor", false, colour);
    // }
    document.execCommand(param1, false);
    document.designMode = "off";
}

function makeEditableTwoParam(param1, param2) {
  // document.styleWithCss = "on"; //Working on BackColor
  document.styleWithCSS = "on";//only needed for hiliteColor method
  document = getEditableDocument();
  document.execCommand(param1, false, param2);
  document.designMode = "off";
  //document.styleWithCSS = "o";
  // document.styleWithCss = "off"; //Working on backColor
}

// function makeEditableThreeParam(font) {
//   document = getEditableDocument();
//   document.execCommand(font, false,
// }

chrome.runtime.onMessage.addListener(function(request) {
  // console.log("Saw something");
  // {context: "styling", style: "bold"}
  if (request.context == "styling") {
    makeEditableOneParam(request.style);
  } else if (request.context == "font") {
    makeEditableTwoParam(request.method, request.font);
  } else if (request.context == "color") {
    makeEditableTwoParam(request.method, request.color);
  } else if (request.context == "link"){
    if (request.mode == "text1") {
      chrome.storage.local.get("text1", function(data) {
        console.log("trying to make link");
        console.log(data.text1);
        makeEditableTwoParam("createLink", data.text1);
      });
    } else if (request.mode == "text2") {
      chrome.storage.local.get("text2", function(data) {
        makeEditableTwoParam("createLink", data.text2);
      });
    }
  } else if (request.context == "unlink") {
    makeEditableOneParam(request.context);
  } else if (request.context == "insertText") {
    if (request.mode == "text1") {
      chrome.storage.local.get("text1", function(data) {
        makeEditableTwoParam("insertText", data.text1);
      });
    } else if (request.mode == "text2") {
      chrome.storage.local.get("text2", function(data) {
        makeEditableTwoParam("insertText", data.text2);
      });
    }
  } else if (request.context == "delete") {
    makeEditableOneParam(request.context);
  } else if (request.context == "undo") {
    makeEditableOneParam(request.context);
  } else if (request.context == "redo") {
    makeEditableOneParam(request.context);
  }

  // if (request.method == "colorSelection") {
  //   makeEditableAndColor(request.color);
  // }
});
