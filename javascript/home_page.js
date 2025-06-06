$('.Центрове-navbar').click(function(e) {
  e.preventDefault();
  setTimeout(function(url) { window.location = url }, 5000, this.href);
});