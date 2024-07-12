function scrollToResume() {
    document.getElementById("resume").scrollIntoView({ behavior: 'smooth' });
}

function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
}

function scrollToFooter() {
    document.getElementById("footer").scrollIntoView({ behavior: 'smooth' });
}

// Dark mode
let isDarkMode = false; 

function switchColors(){
    isDarkMode = !isDarkMode;

    const navbar = document.querySelector(".navbar"); 
    const logo = document.getElementById("navbar_logo");
    const links = document.querySelectorAll(".navbar_links");
    const moon = document.getElementById("moon");

    const sections = document.querySelectorAll(".sections");
    const headers = document.querySelectorAll("h1"); 
    const download = document.querySelector(".sections button");

    const bottom = document.querySelector(".footer_container");
    const socials = document.querySelectorAll(".social_icons i");
    const copyright = document.querySelector(".copyright");

    navbar.classList.toggle("dark-mode");
    logo.classList.toggle("dark-mode");
    links.forEach(link => link.classList.toggle("dark-mode"));
    moon.classList.toggle("dark-mode");
    
    sections.forEach(section => section.classList.toggle("dark-mode"));
    headers.forEach(header => header.classList.toggle("dark-mode"));
    bottom.classList.toggle("dark-mode");

    socials.forEach(social => social.classList.toggle("dark-mode"));
    download.classList.toggle("dark-mode");
    copyright.classList.toggle("dark-mode");
}