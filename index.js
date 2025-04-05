function scrollToAboutMe(){
    document.getElementById("aboutme").scrollIntoView({ behavior: 'smooth' });
}

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
function switchColors(){

    const navbar = document.querySelector(".navbar"); 
    const logo = document.getElementById("navbar_logo");
    const links = document.querySelectorAll(".navbar_links");
    const moon = document.getElementById("moon");

    const sections = document.querySelectorAll(".sections");
    const headers = document.querySelectorAll("h1"); 
    const download = document.querySelector(".sections button");
    const titles = document.querySelectorAll(".project a"); 

    const bottom = document.querySelectorAll(".footer_container");
    const socials = document.querySelectorAll(".social_icons i");
    const copyright = document.querySelector(".copyright");

    navbar.classList.toggle("dark-mode");
    logo.classList.toggle("dark-mode");
    links.forEach(link => link.classList.toggle("dark-mode")); //iterates through nodelist
    moon.classList.toggle("dark-mode");
    
    sections.forEach(section => section.classList.toggle("dark-mode"));
    headers.forEach(header => header.classList.toggle("dark-mode"));
    bottom.forEach(elt => elt.classList.toggle("dark-mode"));
    titles.forEach(elt => elt.classList.toggle("dark-mode")); 

    socials.forEach(social => social.classList.toggle("dark-mode"));
    download.classList.toggle("dark-mode");
    copyright.classList.toggle("dark-mode");
}

document.getElementById("year").textContent = new Date().getFullYear();