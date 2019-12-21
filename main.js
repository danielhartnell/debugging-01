var urlParams = new URLSearchParams(window.location.search);
document.getElementById('content').innerHTML = urlParams.get('hax');
