(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const iconMenu = document.querySelector(".icon-menu");
    const menuBody = document.querySelector(".menu");
    const lock = document.querySelector("html");
    if (iconMenu) iconMenu.addEventListener("click", (function(e) {
        lock.classList.toggle("lock");
        iconMenu.classList.toggle("menu-open");
        menuBody.classList.toggle("menu-open");
    }));
    function script_location() {
        const location = document.querySelector(".header__button");
        const newLocation = document.querySelector(".menu__newLocation-button");
        let cloneLocation = location.cloneNode(true);
        cloneLocation.classList.add("newloc");
        newLocation.appendChild(cloneLocation);
    }
    function location2() {
        const location = document.querySelector(".mail-header");
        const newLocation = document.querySelector(".menu__newLocation-mail");
        let cloneLocation = location.cloneNode(true);
        cloneLocation.classList.add("newloc2");
        newLocation.appendChild(cloneLocation);
    }
    function location3() {
        const location = document.querySelector(".header__social");
        const newLocation = document.querySelector(".menu__newLocation-social");
        let cloneLocation = location.cloneNode(true);
        cloneLocation.classList.add("newloc3");
        newLocation.appendChild(cloneLocation);
    }
    function location4() {
        const location = document.querySelector(".graph-header");
        const newLocation = document.querySelector(".menu__newLocation-graph");
        let cloneLocation = location.cloneNode(true);
        cloneLocation.classList.add("newloc4");
        newLocation.appendChild(cloneLocation);
    }
    script_location();
    location2();
    location3();
    location4();
    function mascTel() {
        window.addEventListener("DOMContentLoaded", (function() {
            [].forEach.call(document.querySelectorAll(".tel"), (function(input) {
                var keyCode;
                function mask(event) {
                    event.keyCode && (keyCode = event.keyCode);
                    var pos = this.selectionStart;
                    if (pos < 3) event.preventDefault();
                    var matrix = "+7 (___) ___ ____", i = 0, def = matrix.replace(/\D/g, ""), val = this.value.replace(/\D/g, ""), new_value = matrix.replace(/[_\d]/g, (function(a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                    }));
                    i = new_value.indexOf("_");
                    if (-1 != i) {
                        i < 5 && (i = 3);
                        new_value = new_value.slice(0, i);
                    }
                    var reg = matrix.substr(0, this.value.length).replace(/_+/g, (function(a) {
                        return "\\d{1," + a.length + "}";
                    })).replace(/[+()]/g, "\\$&");
                    reg = new RegExp("^" + reg + "$");
                    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                    if ("blur" == event.type && this.value.length < 5) this.value = "";
                }
                input.addEventListener("input", mask, false);
                input.addEventListener("focus", mask, false);
                input.addEventListener("blur", mask, false);
                input.addEventListener("keydown", mask, false);
            }));
        }));
    }
    mascTel();
    window["FLS"] = true;
    isWebp();
})();