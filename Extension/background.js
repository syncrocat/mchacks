function sendToContentScript(params) {
  chrome.tabs.query(
    {active: true},
    function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, params);
    }
  );
}

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
  "title": "Font Type",
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

var fontSizeParent = chrome.contextMenus.create({
    "title": "Font Size",
    "parentId":fontParent,
    "contexts" : ["selection"],
});
chrome.contextMenus.create({
  "title": "1",
  "parentId": fontSizeParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "font", method: "fontSize", font: "1"});
  }
});
chrome.contextMenus.create({
  "title": "2",
  "parentId": fontSizeParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "font", method: "fontSize", font: "2"});
  }
});
chrome.contextMenus.create({
  "title": "3",
  "parentId": fontSizeParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "font", method: "fontSize", font: "3"});
  }
});
chrome.contextMenus.create({
  "title": "4",
  "parentId": fontSizeParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "font", method: "fontSize", font: "4"});
  }
});
chrome.contextMenus.create({
  "title": "5",
  "parentId": fontSizeParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "font", method: "fontSize", font: "5"});
  }
});
chrome.contextMenus.create({
  "title": "6",
  "parentId": fontSizeParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "font", method: "fontSize", font: "6"});
  }
});
chrome.contextMenus.create({
  "title": "7",
  "parentId": fontSizeParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "font", method: "fontSize", font: "7"});
  }
});

var colorParent = chrome.contextMenus.create({
  "title": "Color text selection",
  "contexts": ["selection"],
});

var hiliteColorParent = chrome.contextMenus.create({
  "title": "Highlight",
  "parentId": colorParent,
  "contexts":["selection"],
});
var colorList = ["red", "blue", "orange", "purple", "black"];
chrome.contextMenus.create({
  "title": "Red",
  "parentId": hiliteColorParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "color", method: "hiliteColor", color: "red"});
  }
});
chrome.contextMenus.create({
  "title": "Blue",
  "parentId": hiliteColorParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "color", method: "hiliteColor", color: "blue"});
  }
});
chrome.contextMenus.create({
  "title": "Orange",
  "parentId": hiliteColorParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "color", method: "hiliteColor", color: "orange"});
  }
});
chrome.contextMenus.create({
  "title": "Purple",
  "parentId": hiliteColorParent,
  "contexts": ["selection"],
  "onclick": function() {
  sendToContentScript({context: "color", method: "hiliteColor", color: "purple"});
  }
});
chrome.contextMenus.create({
  "title": "Black",
  "parentId": hiliteColorParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "color", method: "hiliteColor", color: "black"});
  }
});


var textColorParent = chrome.contextMenus.create({
  "title": "Text Color",
  "parentId": colorParent,
  "contexts":["selection"],
});
var colorList = ["red", "blue", "orange", "purple", "black"];
chrome.contextMenus.create({
  "title": "Red",
  "parentId": textColorParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "color", method: "foreColor", color: "red"});
  }
});
chrome.contextMenus.create({
  "title": "Blue",
  "parentId": textColorParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "color", method: "foreColor", color: "blue"});
  }
});
chrome.contextMenus.create({
  "title": "Orange",
  "parentId": textColorParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "color", method: "foreColor", color: "orange"});
  }
});
chrome.contextMenus.create({
  "title": "Purple",
  "parentId": textColorParent,
  "contexts": ["selection"],
  "onclick": function() {
  sendToContentScript({context: "color", method: "foreColor", color: "purple"});
  }
});
chrome.contextMenus.create({
  "title": "Black",
  "parentId": textColorParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context: "color", method: "foreColor", color: "black"});
  }
});

// start on backColor
//
// var backgroundColorParent = chrome.contextMenus.create({
//   "title": "Background Color",
//   "parentId": colorParent,
//   "contexts":["selection"],
// });
// chrome.contextMenus.create({
//   "title": "Red",
//   "parentId": backgroundColorParent,
//   "contexts": ["selection"],
//   "onclick": function() {
//     sendToContentScript({context: "color", method: "backColor", color: "red"});
//   }
// });
// chrome.contextMenus.create({
//   "title": "Blue",
//   "parentId": backgroundColorParent,
//   "contexts": ["selection"],
//   "onclick": function() {
//     sendToContentScript({context: "color", method: "backColor", color: "blue"});
//   }
// });
// chrome.contextMenus.create({
//   "title": "Orange",
//   "parentId": backgroundColorParent,
//   "contexts": ["selection"],
//   "onclick": function() {
//     sendToContentScript({context: "color", method: "backColor", color: "orange"});
//   }
// });
// chrome.contextMenus.create({
//   "title": "Purple",
//   "parentId": backgroundColorParent,
//   "contexts": ["selection"],
//   "onclick": function() {
//   sendToContentScript({context: "color", method: "backColor", color: "purple"});
//   }
// });
// chrome.contextMenus.create({
//   "title": "Black",
//   "parentId": backgroundColorParent,
//   "contexts": ["selection"],
//   "onclick": function() {
//     sendToContentScript({context: "color", method: "backColor", color: "black"});
//   }
// });


// Start on link
var linkParent = chrome.contextMenus.create({
  "title": "Link",
  "contexts":["selection"],
});
chrome.contextMenus.create({
  "title": "Remove",
  "parentId": linkParent,
  "contexts":["selection"],
  "onclick": function(){
    sendToContentScript({context:"link", method:"unLink"})
  }
});
// chrome.contextMenus.create({
//   "title": "Add Link",
//   "parentId": linkParent,
//   "contexts":["selection"],
//   "onclick": function(){
//     sendToContentScript({context:"link", method:"createLink"})
//   }
// });
