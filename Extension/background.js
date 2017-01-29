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

var textColorParent = chrome.contextMenus.create({
  "title": "Text Color",
  "parentId": colorParent,
  "contexts":["selection"],
});
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

var hiliteColorParent = chrome.contextMenus.create({
  "title": "Highlight",
  "parentId": colorParent,
  "contexts":["selection"],
});
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

// Start on link
var linkParent = chrome.contextMenus.create({
  "title": "Link",
  "contexts":["selection"],
});
var addLinkParent = chrome.contextMenus.create({
  "title": "Add link",
  "parentId": linkParent,
  "contexts": ["selection"]
});
chrome.contextMenus.create({
  "title": "Custom text 1",
  "parentId": addLinkParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context:"link", mode: "text1"});
  }
});
chrome.contextMenus.create({
  "title": "Custom text 2",
  "parentId": addLinkParent,
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context:"link", mode: "text2"});
  }
});
chrome.contextMenus.create({
  "title": "Remove",
  "parentId": linkParent,
  "contexts":["selection"],
  "onclick": function(){
    sendToContentScript({context:"unlink"})
  }
});

chrome.contextMenus.create({
  "title": "Delete selection",
  "contexts": ["selection"],
  "onclick": function() {
    sendToContentScript({context:"delete"});
  }
});

var insertParent = chrome.contextMenus.create({
  "title": "Insert Text",
  "contexts": ["all"],

});
chrome.contextMenus.create({
  "title": "Custom text 1",
  "parentId": insertParent,
  "contexts": ["all"],
  "onclick": function() {
    sendToContentScript({context: "insertText", mode: "text1"});
  }
});
chrome.contextMenus.create({
  "title": "Custom text 2",
  "parentId": insertParent,
  "contexts": ["all"],
  "onclick": function() {
    sendToContentScript({context: "insertText", mode: "text2"});
  }
});

chrome.contextMenus.create({
  "title": "Undo",
  "contexts": ["all"],
  "onclick": function() {
    sendToContentScript({context:"undo"});
  }
});

chrome.contextMenus.create({
  "title": "Redo",
  "contexts": ["all"],
  "onclick": function() {
    sendToContentScript({context: "redo"});
  }
});
