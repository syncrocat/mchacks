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

  document.getElementById("tool-set_delete").addEventListener("click", function() {
    chrome.tabs.query({}, function(tabs) {
      for (var i=0; i<tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {msg: "tool-set_delete"});
      }
    });
  });

  document.getElementById("tool-cat").addEventListener("click", function() {
    chrome.tabs.query({}, function(tabs) {
      for (var i=0; i<tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {msg: "tool-cat"});
      }
    });
  });
}
