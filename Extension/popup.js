window.onload = function() {
  document.getElementById("tool-none").classList.add("selected");
  document.getElementById("tool-none").addEventListener("click", function() {
    var noneButton = document.getElementById("tool-none");
    noneButton.classList.remove("selected");
    var hiddenButton = document.getElementById("tool-set_hidden");
    hiddenButton.classList.remove("selected");
    var deleteButton = document.getElementById("tool-set_delete");
    deleteButton.classList.remove("selected");
    var revealButton = document.getElementById("tool-reveal-hidden");
    revealButton.classList.remove("selected");
    document.getElementById("tool-none").classList.add("selected");
    chrome.tabs.query({}, function(tabs) {
      for (var i=0; i<tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {msg: "tool-none"});
      }
    });
  });

  document.getElementById("tool-set_hidden").addEventListener("click", function() {
    var noneButton = document.getElementById("tool-none");
    noneButton.classList.remove("selected");
    var hiddenButton = document.getElementById("tool-set_hidden");
    hiddenButton.classList.remove("selected");
    var deleteButton = document.getElementById("tool-set_delete");
    deleteButton.classList.remove("selected");
    var revealButton = document.getElementById("tool-reveal-hidden");
    revealButton.classList.remove("selected");
    document.getElementById("tool-set_hidden").classList.add("selected");
    chrome.tabs.query({}, function(tabs) {
      for (var i=0; i<tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {msg: "tool-set_hidden"});
      }
    });
  });

  document.getElementById("tool-set_delete").addEventListener("click", function() {
    var noneButton = document.getElementById("tool-none");
    noneButton.classList.remove("selected");
    var hiddenButton = document.getElementById("tool-set_hidden");
    hiddenButton.classList.remove("selected");
    var deleteButton = document.getElementById("tool-set_delete");
    deleteButton.classList.remove("selected");
    var revealButton = document.getElementById("tool-reveal-hidden");
    revealButton.classList.remove("selected");
    document.getElementById("tool-set_delete").classList.add("selected");
    chrome.tabs.query({}, function(tabs) {
      for (var i=0; i<tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {msg: "tool-set_delete"});
      }
    });
  });

  document.getElementById("tool-reveal-hidden").addEventListener("click", function() {
    var noneButton = document.getElementById("tool-none");
    noneButton.classList.remove("selected");
    var hiddenButton = document.getElementById("tool-set_hidden");
    hiddenButton.classList.remove("selected");
    var deleteButton = document.getElementById("tool-set_delete");
    deleteButton.classList.remove("selected");
    var revealButton = document.getElementById("tool-reveal-hidden");
    revealButton.classList.remove("selected");
    document.getElementById("tool-reveal-hidden").classList.add("selected");
    chrome.tabs.query({}, function(tabs) {
      for (var i=0; i<tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, {msg: "tool-reveal-hidden"});
      }
    });
  });

  document.getElementById("text-1-button").addEventListener("click", function() {
    var text = document.getElementById("text-1").value;
    chrome.storage.local.set({"text1": text});
    console.log("updated text1");
    console.log(text);
  });

  document.getElementById("text-2-button").addEventListener("click", function() {
    var text = document.getElementById("text-2").value;
    chrome.storage.local.set({"text2": text});
    console.log("updated text2");
    console.log(text);
  });

  chrome.storage.local.get("text1", function(data) {
    if (typeof data.text1 !== "undefined")
      document.getElementById("text-1").value = data.text1;
  });

  chrome.storage.local.get("text2", function(data) {
    if (typeof data.text2 !== "undefined")
      document.getElementById("text-2").value = data.text2;
  });
}
