document.addEventListener("DOMContentLoaded", function () {
    if (typeof window.particlesJS !== "function") {
        return;
    }

    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 38, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#bbaeae" },
            "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
            "opacity": { "value": 0.5 },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 0.6, "direction": "none" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true }
        },
        "retina_detect": true
    });

});
