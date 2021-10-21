const siteContentWrapper = document.querySelector(".site-content-wrapper");
const navTriggerImg = document.querySelector(".nav-trigger__img");

navTriggerImg.addEventListener("click", () => {
    if (siteContentWrapper.classList.contains("scaled")) {
        siteContentWrapper.classList.remove("scaled");
        navTriggerImg.style.transform = "rotate(0deg)";
    } else {
        navTriggerImg.style.transform = "rotate(540deg)";
        siteContentWrapper.classList.add("scaled");
    }
});