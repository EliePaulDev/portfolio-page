let slideIndex = 1;
showSlides(slideIndex);



function toggleTheme() {
    let element = document.querySelector("html");
    let theme = element.getAttribute("data-theme");
    let newTheme = theme === "light" ? "dark" : "light";
    element.setAttribute("data-theme", newTheme);
}

//ternary operator
//similar if else

const contactForm = document.getElementById("contact-form");


// key, value
//{ test: "test string", }


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    fetch("https://formspree.io/f/mldloljz", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json'
        }
    }).then(response => {
        if(response.ok) {
            alert(`Thank you, ${data.firstName}! We received your contact information.`);
            contactForm.reset();
        }
        else {
            alert("We could not send your information. Try Again!");
        }

    }).catch(error => console.log(`Error: ${error}`));


    

    
})

const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener('click', () => {
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenu.classList.toggle("hidden");
})


// += , number += 1, number = number + 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("portfolio-slide");
    if(n > slides.length) slideIndex = 1;
    if(n < 1) slideIndex = slides.length;
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}