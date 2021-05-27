var bar = document.querySelector(".bar");

var toggle = document.querySelector('.toggle');

var body = document.querySelector('body');
var theme = 0;

bar.addEventListener("click", function() {
    if (theme == 0) {
        body.className = "theme2";
        toggle.classList.replace("left", "center");
        theme += 1;
    }

    else if (theme == 1) {
        body.className = "theme3";
        toggle.classList.replace("center", "right");
        theme += 1;
    }

    else if (theme == 2) {
        body.className = "theme1";
        toggle.classList.replace("right", "left");
        theme = 0;
    }
})
