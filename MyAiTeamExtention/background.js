
// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
      url: "https://app.myaiteam.com",
      active: true
    });
  });