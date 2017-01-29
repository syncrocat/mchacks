function sendToContentScript(params) {
  chrome.tabs.query(
    {active: true},
    function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, params);
    }
  );
}

var mainParent = chrome.contextMenus.create({
  "title": "Happy Fruit",
  "contexts": ["all"]
});

var stylingParent = chrome.contextMenus.create({
  "title": "Styling",
  "contexts": ["selection"]
});
chrome.contextMenus.create({
  "title": "Bold",
  "parentId": stylingParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "styling", style: "bold"});
  }
});
chrome.contextMenus.create({
  "title": "Underline",
  "parentId": stylingParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "styling", style: "underline"});
  }
});
chrome.contextMenus.create({
  "title": "Italic",
  "parentId": stylingParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "styling", style: "italic"});
  }
});
chrome.contextMenus.create({
  "title": "Strikethrough",
  "parentId": stylingParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "styling", style: "strikeThrough"});
  }
});
chrome.contextMenus.create({
  "title": "Remove Format",
  "parentId": stylingParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "styling", style: "removeformat"});
  }
});

var fontParent = chrome.contextMenus.create({
  "title": "Font",
  "contexts": ["selection"]
});
var fontNameParent = chrome.contextMenus.create({
  "title": "Set Font",
  "parentId": fontParent,
  "contexts": ["selection"],
});
chrome.contextMenus.create({
  "title": "Arial",
  "parentId": fontNameParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "font", method: "fontName", font: "Arial"});
  }
});
chrome.contextMenus.create({
  "title": "Courier New",
  "parentId": fontNameParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "font", method: "fontName", font: "Courier New"});
  }
});
// var colorParent = chrome.contextMenus.create({
//   "title": "Color text selection",
//   "contexts": ["selection"],
// });
//
// var colorList = ["red", "blue", "orange", "purple", "black"];
// chrome.contextMenus.create({
//   "title": "Red",
//   "parentId": colorParent,
//   "contexts": ["selection"],
//   "onclick": function() {
//     colorSelectedText("red");
//   }
// });
// chrome.contextMenus.create({
//   "title": "Blue",
//   "parentId": colorParent,
//   "contexts": ["selection"],
//   "onclick": function() {
//     colorSelectedText("blue");
//   }
// });
// chrome.contextMenus.create({
//   "title": "Orange",
//   "parentId": colorParent,
//   "contexts": ["selection"],
//   "onclick": function() {
//     colorSelectedText("orange");
//   }
// });
// chrome.contextMenus.create({
//   "title": "Purple",
//   "parentId": colorParent,
//   "contexts": ["selection"],
//   "onclick": function() {
//     colorSelectedText("purple");
//   }
// });
// chrome.contextMenus.create({
//   "title": "Black",
//   "parentId": colorParent,
//   "contexts": ["selection"],
//   "onclick": function() {
//     colorSelectedText("black");
//   }
// });
