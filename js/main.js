// Get the local storage data
let mainBackgroundColor = localStorage.getItem("main-color"),
    secondColor         = localStorage.getItem("second-color"),
    thirdColor          = localStorage.getItem("third-color"),
    forthColor          = localStorage.getItem("forth-color");
    mode                = localStorage.getItem("mode");
    toggleMode          = document.querySelector(".show-mode input");

// Check local storage
if(mainBackgroundColor != "") {

    document.documentElement.style.setProperty("--mainBackgroundColor", mainBackgroundColor);
    document.documentElement.style.setProperty("--secondColor", secondColor);
    document.documentElement.style.setProperty("--thirdColor", thirdColor);
    document.documentElement.style.setProperty("--forthColor", forthColor);
    
    toggleMode.setAttribute(mode, "");
}

// Get info of banner section
let info    = document.querySelectorAll(".banner .info"),
    right   = document.querySelector(".right"),
    left    = document.querySelector(".left"),
    bullets = document.querySelectorAll(".bullets span");

// Count to increaseing or decreaseing for change banner content
let c = 0;

// Function on click
function onClick(ele) {

    ele.addEventListener("click", () => {

        // Call function show info to change content of banner
        showInfo(ele);

    });

}

// Function to change the content of banner
function showInfo(ele) {

    // If the element has a left class then, go to left
    if(ele.classList.value == "left") {

        // Means it's reached to the first element
        if(c > 0) {

            c--;

        } else {

            return false;
            
        }

    }

    // If the element has a right class then, go to right
    if(ele.classList.value == "right") {

        // Means it's reached to the last element
        if(c < info.length - 1) {

            c++;

        } else {

            return false;

        }

    }

    // Loop to change content of the banner
    for(let i = 0; i <= info.length - 1; i++) {

        if(i === c) {

            for(let j = 0; j < info.length; j++) {

                // Remove active class from all elements
                // Hide all elements
                info[j].style.display = "none";
                bullets[j].classList.remove("active");

            }

            // Show the current element
            info[i].style.display = "block";
            // Add active class to the current element
            bullets[i].classList.add("active");

        }

    }

}

// On right click
onClick(right);
// On left click
onClick(left);

// Toggle between dark mode and light mode on click
toggleMode.onclick = function() {

    // Dark mode
    if(this.checked == true) {
        
        // Change the colors to dark
        document.documentElement.style.setProperty("--mainBackgroundColor", "#000");
        document.documentElement.style.setProperty("--secondColor", "#FFF");
        document.documentElement.style.setProperty("--thirdColor", "#333");
        document.documentElement.style.setProperty("--forthColor", "#222");

        // Add the colors to the local storage
        localStorage.setItem("main-color", "#000");
        localStorage.setItem("second-color", "#FFF");
        localStorage.setItem("third-color", "#333");
        localStorage.setItem("forth-color", "#222");

        // Add toggle button to local storage
        localStorage.setItem("mode", "checked");
        
    // Light mode [ Default ]
    } else {
        
        // Change the colors to light [ Default ]
        document.documentElement.style.setProperty("--mainBackgroundColor", "#FAFAFA");
        document.documentElement.style.setProperty("--secondColor", "#777");
        document.documentElement.style.setProperty("--thirdColor", "#FFF");
        document.documentElement.style.setProperty("--forthColor", "#EEE");

        // Add the colors to the local storage
        localStorage.setItem("main-color", "#FAFAFA");
        localStorage.setItem("second-color", "#777");
        localStorage.setItem("third-color", "#FFF");
        localStorage.setItem("forth-color", "#EEE");

        // Add toggle button to local storage
        localStorage.removeItem("mode");

    }
    
}

// Change year automatically
document.querySelector("footer p span:first-of-type").textContent = new Date().getFullYear();

// Toggle menu
document.querySelector("header .main-header .menu").onclick = () => { document.querySelector("header .main-header .navbar").classList.toggle("active"); }

// Add animation for sections on scrolling
let bannerSection  = document.querySelector(".banner"),
    productSection = document.getElementById("products"),
    gallerySection = document.getElementById("gallery"),
    aboutSection   = document.getElementById("about");

// Function to add animation on scroll
function scrollingSection([...elements], [...nameOfSections]) {

    window.onscroll = function() {

        for(let i = 0; i < elements.length; i++) {

            if(window.scrollY > elements[i].offsetTop - window.innerHeight * 0.50 && elements[i].classList.value == nameOfSections[i]) {

                elements[i].classList.add("active");
    
            }
    
        }

    }

}

scrollingSection(
    [bannerSection, productSection, gallerySection, aboutSection],
    ["banner", "products", "galleries", "about"]
);