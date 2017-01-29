// From http://stackoverflow.com/questions/4445102/google-chrome-extension-highlight-the-div-that-the-mouse-is-hovering-over
// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// chrome.runtime.sendMessage({method: 'asdf'});

// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;

var mode = "tool-none";

// Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {
  var srcElement = e.srcElement;

  // Lets check if our underlying element is a DIV.
  if (srcElement.nodeName == 'DIV') {

    // For NPE checking, we check safely. We need to remove the class name
    // Since we will be styling the new one after.
    if (prevDOM != null) {
      prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
    }

    // Add a visited class name to the element. So we can style it.
    srcElement.classList.add(MOUSE_VISITED_CLASSNAME);

    // The current element is now the previous. So we can remove the class
    // during the next iteration.
    prevDOM = srcElement;
  }
}, false);

document.addEventListener("click", function(e) {
  if (prevDOM != null) {
    if (mode == "tool-none") {

    } else if (mode == "tool-set_hidden") {
      prevDOM.hidden = true;
    } else if (mode == "tool-drag_and_drop") {

    } else if (mode == "tool-color") {
      prevDOM.style.color = "purple";
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
  else if (request.msg == "tool-drag_and_drop") {
    mode = "tool-drag_and_drop";
  } else if (request.msg == "tool-color") {
    mode = "tool-color";
  }
});

function setTextColor(color) {
  if (prevDOM != null) {

  }
}

// From http://stackoverflow.com/questions/1335252/how-can-i-get-the-dom-element-which-contains-the-current-selection
function getSelectionBoundaryElement(isStart) {
    var range, sel, container;
    if (document.selection) {
        range = document.selection.createRange();
        range.collapse(isStart);
        return range.parentElement();
    } else {
        sel = window.getSelection();
        if (sel.getRangeAt) {
            if (sel.rangeCount > 0) {
                range = sel.getRangeAt(0);
            }
        } else {
            // Old WebKit
            range = document.createRange();
            range.setStart(sel.anchorNode, sel.anchorOffset);
            range.setEnd(sel.focusNode, sel.focusOffset);

            // Handle the case when the selection was selected backwards (from the end to the start in the document)
            if (range.collapsed !== sel.isCollapsed) {
                range.setStart(sel.focusNode, sel.focusOffset);
                range.setEnd(sel.anchorNode, sel.anchorOffset);
            }
       }

        if (range) {
           container = range[isStart ? "startContainer" : "endContainer"];
           // Check if the container is a text node and return its parent if so
           return container.nodeType === 3 ? container.parentNode : container;
        }
    }
}

chrome.runtime.onMessage.addListener(function(request) {
  // console.log("Saw something");
  if (request.method == "getSelection") {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    if (selection.anchorNode == selection.focusNode) {
      // Simple stuff
      var start = selection.anchorNode;
      start = range["startContainer"];
      start = start.nodeType === 3 ? start.parentNode : start;
      console.log("start");
      console.log(start.innerHTML);
      console.log("gotcha");
      start.innerHTML = start.innerHTML.slice(0, selection.anchorOffset) + "<span class=\"colored\">" + start.innerHTML.slice(selection.anchorOffset, selection.focusOffset)  + "</span>" + start.innerHTML.slice(selection.focusOffset);
    } else {
      var allWithinRangeParent = range.commonAncestorContainer.getElementsByTagName("*");
      var allSelected = [];
      for (var i=0, el; el = allWithinRangeParent[i]; i++) {
        // The second parameter says whether to include the element
        // even if it's not fully selected
        if (selection.containsNode(el, false) ) {
          allSelected.push(el);
        }
      }

      var start = getSelectionBoundaryElement(true);
      var end = getSelectionBoundaryElement(false);

      // Add the spans to the HTML now
      for (var i = 0; i < allSelected.length; i++) {
        allSelected[i].innerHTML = "<span class=\"colored\">" + allSelected[i].innerHTML + "</span>";
      }

      start.innerHTML = start.innerHTML.slice(0, selection.anchorOffset) + "<span class=\"colored\">" + start.innerHTML.slice(selection.anchorOffset) + "</span>";
      end.innerHTML = "<span class=\"colored\">" + end.innerHTML.slice(0, selection.focusOffset) + "</span>" + end.innerHTML.slice(selection.focusOffset);

      // Remove your selection to see the result & because the selection gets fucky if you leave it
      selection.removeAllRanges();
    }
    // start.innerText = start.innerText.slice(0, selection.anchorOffset) + "~" + start.innerText.slice(selection.anchorOffset);
    // var index = 0;
    // while (start.innerHTML[index] != "~") {
    //   index ++;
    // }
    // console.log("index");
    // console.log(index);
    //end.innerText selection.focusOffset
    //
    // allSelected = [];
    // for (var i=0, el; el = allWithinRangeParent[i]; i++) {
    //   // The second parameter says to include the element
    //   // even if it's not fully selected
    //   if (selection.containsNode(el, false) ) {
    //     allSelected.push(el);
    //   }
    // }
    // console.log("Alternative Selected");
    // console.log(allSelected);
    //
    // var range = selection.getRangeAt(0);
    // var el = range.startContainer.getElementsByTagName("*")[0];
    // var end = range.endContainer.getElementsByTagName("*")[0];
    // while (el != end) {
    //   console.log("loop:");
    //   console.log(el);
    //   el = el.nextSibling;
    // }
    // var selection = window.getSelection();
    // var text = selection.toString();
    // var range = selection.getRangeAt(0);
    // var clonedContents = range.cloneContents();
    // var container = range.commonAncestorContainer;
    // var anchorNode = selection.anchorNode;
    // var anchorOffset = selection.anchorOffset;
    // var focusOffset = selection.focusOffset;
    // var focusNode = selection.focusNode;
    // console.log("Selection");
    // console.log(selection);
    // console.log("Text:");
    // console.log(text);
    // console.log("Cloned Contents");
    // console.log(selection.getRangeAt(0).cloneContents());
    // console.log("Common Container");
    // console.log(container);
    // console.log("Anchor Node");
    // console.log(anchorNode);
    // console.log("Anchor offset");
    // console.log(anchorOffset);
    // console.log("Focus Node");
    // console.log(focusNode);
    // console.log("Focus Offset");
    // console.log(focusOffset);
    // console.log("range");
    // console.log(range);
    // var start = getSelectionBoundaryElement(true);
    // var end = getSelectionBoundaryElement(false);
    // console.log("Start");
    // console.log(start);
    // console.log("End");
    // console.log(end);
    // var newStart = range.startContainer;
    // console.log("newStart");
    // console.log(newStart);
    // var newEnd = range.endContainer;
    // console.log("newEnd");
    // console.log(newEnd);
    // while (start != end) {
    //   start = start.nextElementSibling;
    //   console.log("loop result:");
    //   console.log(start);
    // }
    //selection.modify("move", "forward", "documentboundary");
    //selection.modify("extend", "backward", "documentboundary");
    // var node = document.createElement("span");
    // //.setAttribute("class", "colored");
    // console.log("range.startcontainer");
    // console.log(range.startContainer);
    // console.log("range.startcontainer.nextsibling");
    // console.log(range.startContainer.nextSibling);
    // console.log("x");
    // var x = range.startContainer.nextSibling;
    // console.log(x);
    // range.setStart(x, 0);
    // var y = range.endContainer.previousSibling;
    // console.log("y");
    // console.log(y);
    // range.setEnd(y, 0);
    // console.log(range);
    // range.surroundContents(node);
    //container.append(x);

    //start.innerText = start.innerText.slice(0, anchorOffset) + "<%>" + start.innerText.slice(anchorOffset);
    //end.innerText = end.innerText.slice(0, focusOffset) + "<~>" + end.innerText.slice(focusOffset);
    //start.innerHTML = start.innerHTML.replace(/<&>/, "HELLO");
    //start.innerHTML = start.innerHTML.replace(/%/, "HELLO");
    //start.innerHTML = start.innerHTML.replace(startRegex, "<span class=\"black\">").replace(startRegex2, "</span>");
    //end.innerHTML = end.innerHTML.replace(endRegex, "<span class=\"black\">").replace(endRegex2, "</span>");
    //container.innerHTML = "<span class=\"colored\">" + container.innerHTML + "</span>";
    // var startIndex = 0;
    // var endIndex = 0;
    // for (var i=0; i < start.innerHTML.length; i++) {
    //   if (start.innerHTML[i] === "%") {
    //     startIndex = i;
    //   }
    // }
    // for (var i = 0; i < end.innerHTML.length; i++) {
    //   if (end.innerHTML[i] === "~") {
    //     endIndex = i;
    //   }
    // }
    // console.log(start.innerHTML);
    // console.log(end.innerHTML);
    // console.log(startIndex);
    // console.log(endIndex);
    //
    // start.innerHTML = start.innerHTML.slice(0, startIndex) + "" + start.innerHTML.slice(startIndex);
    // end.innerHTML = end.innerHTML.slice(0, endIndex) + "" + end.innerHTML.slice(endIndex);
    //window.getSelection().getRangeAt(0).innerHTML="ITWASAPRANK";
    //var newNode = document.createElement("span");
    //newNode.append(clonedContents);
    //range.deleteContents();
    //range.insertNode(newNode);

  }
});
