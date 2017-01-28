window.onload = function() {
  document.getElementById("tool-none").addEventListener("click", function() {
    chrome.tabs.query({}, function(tabs) {
      for (var i=0; i<tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {msg: "tool-none"});
      }
    });
  });

  document.getElementById("tool-set_hidden").addEventListener("click", function() {
    chrome.tabs.query({}, function(tabs) {
      for (var i=0; i<tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {msg: "tool-set_hidden"});
      }
    });
  });

  document.getElementById("tool-drag_and_drop").addEventListener("click", function() {
    chrome.tabs.query({}, function(tabs) {
      for (var i=0; i<tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {msg: "tool-drag_and_drop"});
      }
    });
  });

  document.getElementById("tool-color").addEventListener("click", function() {
    chrome.tabs.query({}, function(tabs) {
      for (var i=0; i<tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {msg: "tool-color"});
      }
    });
  });
}
