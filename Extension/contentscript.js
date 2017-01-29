// From http://stackoverflow.com/questions/4445102/google-chrome-extension-highlight-the-div-that-the-mouse-is-hovering-over
// Unique ID for the className.
// var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// chrome.runtime.sendMessage({method: 'asdf'});

// Previous dom, that we want to track, so we can remove the previous styling.
// var prevDOM = null;
//
// var mode = "tool-none";

// Mouse listener for any move event on the current document.
// document.addEventListener('mousemove', function (e) {
//   var srcElement = e.srcElement;
//
//   // Lets check if our underlying element is a DIV.
//   if (srcElement.nodeName == 'DIV') {
//
//     // For NPE checking, we check safely. We need to remove the class name
//     // Since we will be styling the new one after.
//     if (prevDOM != null) {
//       prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
//     }
//
//     // Add a visited class name to the element. So we can style it.
//     srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
//
//     // The current element is now the previous. So we can remove the class
//     // during the next iteration.
//     prevDOM = srcElement;
//   }
// }, false);

// document.addEventListener("click", function(e) {
//   if (prevDOM != null) {
//     if (mode == "tool-none") {
//
//     } else if (mode == "tool-set_hidden") {
//         prevDOM.style.opacity = "0";
//     } else if (mode == "tool-set_delete"){
//         prevDOM.hidden = true;
//     } else if (mode == "tool-drag_and_drop") {
//
//     } else if (mode == "tool-color") {
//         prevDOM.style.color = "purple";
//     }
//   }
// });

// chrome.runtime.onMessage.addListener(function(request) {
//   if (request.msg == "tool-none") {
//     mode = "tool-none";
//   }
//   else if (request.msg == "tool-set_hidden") {
//     mode = "tool-set_hidden";
//   }
//   else if (request.msg == "tool-set_delete") {
//     mode = "tool-set_delete";
//   }
//   else if (request.msg == "tool-drag_and_drop") {
//     mode = "tool-drag_and_drop";
//   }
//   else if (request.msg == "tool-color") {
//     mode = "tool-color";
//   }
// });

// function setTextColor(color) {
//   if (prevDOM != null) {
//
//   }
// }

function makeEditableAndColor(color) {
    var range, sel = window.getSelection();
    if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
    }
    document.designMode = "on";
    if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
    }
    // Use HiliteColor since some browsers apply BackColor to the whole block
    // if (!document.execCommand("HiliteColor", false, colour)) {
    //     document.execCommand("BackColor", false, colour);
    // }
    document.execCommand("ForeColor", false, color);
    document.designMode = "off";
}

chrome.runtime.onMessage.addListener(function(request) {
  // console.log("Saw something");
  if (request.method == "colorSelection") {
    makeEditableAndColor(request.color);
  }
});
