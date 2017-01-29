// From http://stackoverflow.com/questions/4445102/google-chrome-extension-highlight-the-div-that-the-mouse-is-hovering-over
// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

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

      // The current element is now the previous. So we can remove the class
      // during the next iteration.
      prevDOM = srcElement;
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
});

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
    document.execCommand(param1, false);
    document.designMode = "off";
}

function makeEditableTwoParam(param1, param2) {
  document.styleWithCSS = "on";
  document = getEditableDocument();
  document.execCommand(param1, false, param2);
  document.designMode = "off";
}

chrome.runtime.onMessage.addListener(function(request) {
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
});
