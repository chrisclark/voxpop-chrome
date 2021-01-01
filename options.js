let ipt = document.getElementById('username');
chrome.storage.sync.get('username', function(data) {
  ipt.value = data.username;
});
ipt.addEventListener('input', function(e) {
  chrome.storage.sync.set({username: e.target.value});
});
