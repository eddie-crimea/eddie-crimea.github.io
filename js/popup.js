  var link = document.querySelector(".address-block-btn");
  var popup = document.querySelector(".popup");
  var close = popup.querySelector(".popup-content-close");
  var overlay = document.querySelector(".popup-overlay");
  var username = popup.querySelector(".popup-user-field")

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-content-show");
    overlay.classList.add("popup-overlay-show");
    username.focus();
  });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-content-show");
    overlay.classList.remove("popup-overlay-show");
  });
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("popup-content-show")) {
        popup.classList.remove("popup-content-show");
      }
    }
    if (event.keyCode === 27) {
      if (overlay.classList.contains("popup-overlay-show")) {
        overlay.classList.remove("popup-overlay-show")
      }
    }
  });
