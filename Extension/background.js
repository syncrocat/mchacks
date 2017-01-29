function colorSelectedText(col) {
  chrome.tabs.query(
    {active: true},
    function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {method: "colorSelection", color: col});
    }
  )
}

function myFunc() {
  console.log("Yay!");
}

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log(request.message);
//   console.log("sent from tab.id=", sender.tab.id);
// });

var colorParent = chrome.contextMenus.create({
  "title": "Color text selection",
  "contexts": ["selection"],
});

var colorList = ["red", "blue", "orange", "purple", "black"];
chrome.contextMenus.create({
  "title": "Red",
  "parentId": colorParent,
  "contexts": ["selection"],
  "onclick": function() {
    colorSelectedText("red");
  }
});
chrome.contextMenus.create({
  "title": "Blue",
  "parentId": colorParent,
  "contexts": ["selection"],
  "onclick": function() {
    colorSelectedText("blue");
  }
});
chrome.contextMenus.create({
  "title": "Orange",
  "parentId": colorParent,
  "contexts": ["selection"],
  "onclick": function() {
    colorSelectedText("orange");
  }
});
chrome.contextMenus.create({
  "title": "Purple",
  "parentId": colorParent,
  "contexts": ["selection"],
  "onclick": function() {
    colorSelectedText("purple");
  }
});
chrome.contextMenus.create({
  "title": "Black",
  "parentId": colorParent,
  "contexts": ["selection"],
  "onclick": function() {
    colorSelectedText("black");
  }
});
