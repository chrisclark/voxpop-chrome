chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(changeInfo.url) {
    if (changeInfo.url.includes('grove.zoom.us') && changeInfo.url.includes('#success')) {
      var mtgId = changeInfo.url.match('([0-9]{10,12})')[0];
      const baseUrl = 'https://infallible-davinci-893d51.netlify.app/';
      chrome.storage.sync.get('username', function(data) {
        var newURL = baseUrl + mtgId.toString() + '/' + data.username;
        chrome.windows.create({ url: newURL, type: 'popup', height: 700, width:375 });
      });
    }
  }
});
