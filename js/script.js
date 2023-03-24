document.addEventListener("DOMContentLoaded", () => {
    console.log("funkar");

    // --- The navigation --- //
    let button = document.querySelector("i");
    console.log(button)
    let menu = document.querySelector("nav");
    let certificate = document.querySelector("certificate");

    button.addEventListener("click", show);

    function show() {
        console.log("funkar");
        menu.classList.toggle("show");
        certificate.visibility = "hidden";
    }
});


