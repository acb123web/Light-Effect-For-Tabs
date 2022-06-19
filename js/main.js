const links = document.querySelectorAll("li");
const svg = document.querySelectorAll("svg");
const border = document.getElementsByClassName("border-effect");
const doctors = document.getElementById("doctors-icon");
const care = document.getElementById("care-icon");
const check = document.getElementById("check-icon");
const service = document.getElementById("service-icon");

links.forEach(function (link) {
    link.addEventListener('click', function (e) {
        switch (link.id) {
            case "doctors":
                border[0].style.left = "39px";
                removeStyles();
                link.classList.add("active");
                doctors.classList.add("active-fill");
                break;
            case "care":
                border[0].style.left = "150px";
                removeStyles();
                link.classList.add("active");
                care.classList.add("active-fill");
                break;
            case "check":
                border[0].style.left = "268px";
                removeStyles();
                link.classList.add("active");
                check.classList.add("active-fill");
                break;
            case "service":
                border[0].style.left = "383px";
                removeStyles();
                link.classList.add("active");
                service.classList.add("active-fill");
                break;
        }
    });
});
const removeStyles = () => {
    links.forEach(function (link) {
        link.classList.remove("active");
    });
    svg.forEach(function (svg) {
        svg.classList.remove("active-fill");
    });
};