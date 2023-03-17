document.addEventListener("DOMContentLoaded", () => {
    console.log("funkar");
    // Ändrar texten så att den inte skärs av skärmen //
    window.addEventListener('resize', function() {
        var text = document.getElementsByClassName('title');
        if (window.innerWidth <= 350) {
            text = 'Small viewport text';
        } else {
            text = 'Large viewport text';
        }
    });

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


