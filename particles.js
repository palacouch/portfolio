document.addEventListener("DOMContentLoaded", function () {
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

    // Stats for particle count (optional)
    var count_particles, stats, update;
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);

    count_particles = document.querySelector('.js-count-particles');
    update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
});
