function getSelectedText() {
  chrome.tabs.query(
    {active: true},
    function(tabs) {
      console.log("Made it here!");
      console.log(tabs[0].id);
      chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection"});
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

var colorOrange = chrome.contextMenus.create({
  "title": "Orange",
  "parentId": colorParent,
  "contexts": ["selection"],
  "onclick": getSelectedText
});
