const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector(".button");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

buttonEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
})