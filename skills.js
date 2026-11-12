document.querySelectorAll(".signature .card-faces").forEach((faces) => {
    const front = faces.querySelector(".card-front");
    const back = faces.querySelector(".card-back");
    const frontButton = front.querySelector(".card-turn");
    const backButton = back.querySelector(".card-turn");

    function flipCard() {
        const flipped = faces.classList.toggle("is-flipped");
        front.inert = flipped;
        back.inert = !flipped;
        const visibleButton = flipped ? backButton : frontButton;
        visibleButton.focus({ preventScroll: true });
    }

    frontButton.addEventListener("click", flipCard);
    backButton.addEventListener("click", flipCard);
});

const labCategories = document.querySelectorAll(".lab-categories a");
const labTitle = document.querySelector(".lab-details h3");

labCategories.forEach((category) => {
    category.addEventListener("click", () => {
        labCategories.forEach((item) => item.removeAttribute("aria-current"));
        category.setAttribute("aria-current", "page");
        if (labTitle) labTitle.textContent = category.textContent.trim();
    });
});
