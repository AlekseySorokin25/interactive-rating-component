const ratingSubmit = document.querySelectorAll(".ratingSubmit span");
const submitButton = document.querySelector(".submit_btn");
const ratePoint = document.getElementById("rate");
const ratingState = document.querySelector(".ratingState");
const thankYouState = document.querySelector(".thankYouState");

let rate = null;

ratingSubmit.forEach( (ratingSub) => {
    ratingSub.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        if(active) {
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    })
})

submitButton.addEventListener("click", () => {
    if (rate) {
        ratePoint.innerText = rate;
        ratingState.classList.add("hidden");
        thankYouState.classList.remove("hidden");
    }
})