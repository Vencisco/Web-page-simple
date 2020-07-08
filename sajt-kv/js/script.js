window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("header").style.paddingTop = "0";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.backgroundColor = "grey";

    } else {
        document.getElementById("header").style.paddingTop = "40px";
        document.getElementById("header").style.backgroundColor = "orange";
    }
}