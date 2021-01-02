let ipt = document.getElementById('username');
chrome.storage.sync.get('username', function(data) {
  ipt.value = data.username;
});
ipt.addEventListener('input', function(e) {
  let entry = e.target.value;
  chrome.storage.sync.set({username: entry.replace(/\W/g, '')});
});
