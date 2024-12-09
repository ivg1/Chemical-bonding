const scroll_to_top = () => {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );
}

const button_scroller = document.querySelector(".button_to_top");
document.addEventListener("scroll", async () => {
    await sleep(800);

    if (window.scrollY > 600) {
        button_scroller.style.display = "flex";
        sleep(10).then(() => {
            button_scroller.style.opacity = 1;
        });
    } else {
        button_scroller.style.opacity = 0;
        sleep(400).then(() => {
            button_scroller.style.display = "none";
        });
    }
});

button_scroller.addEventListener("click", scroll_to_top);