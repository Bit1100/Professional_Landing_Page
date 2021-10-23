const siteContentWrapper = document.querySelector(".site-content-wrapper");
const navTriggerImg = document.querySelector(".nav-trigger__img");
const navbarLinks = document.querySelectorAll(".nav-bg .second a");
const counters = document.querySelectorAll(".counter");
const dealSection = document.querySelector("#deal");

navTriggerImg.addEventListener("click", () => {
    if (siteContentWrapper.classList.contains("scaled")) {
        siteContentWrapper.classList.remove("scaled");
        navTriggerImg.style.transform = "rotate(0deg)";
    } else {
        navTriggerImg.style.transform = "rotate(540deg)";
        siteContentWrapper.classList.add("scaled");
    }
});

navbarLinks.forEach((link) => {
    link.onclick = () => {
        siteContentWrapper.classList.remove("scaled");
        navTriggerImg.style.transform = "rotate(0deg)";
    };
});

function runCounter() {
    counters.forEach((counter) => {
        counter.innerText = 0;

        const target = +counter.dataset.count;

        const step = 0.5;

        const countIt = () => {
            let counted = +counter.innerHTML;
            if (counted < target) {
                counter.innerText = Math.ceil(counted + step);
                setTimeout(countIt, 100);
            } else {
                counter.innerText = target;
            }
        };
        countIt();
    });
}

/* Counter Up Animation */
// Options for Intersection Observer Section
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.65,
};

let animationDone = false;

// If intersection, this handler get invoked
const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !animationDone) {
            runCounter();
            animationDone = true;
        }
    }, options);
};

// Creating object of IO
const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(dealSection);