// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
// Event listeners for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      scrollToSection(sectionId);
    });
  });
// Event listeners for navigation links
document.getElementById("homeLink").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("home");
});

document.getElementById("aboutLink").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("about");
});

document.getElementById("educationLink").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("education");
});

document.getElementById("skillsLink").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("skills");
});

document.getElementById("projectsLink").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("projects");
});

document.getElementById("contactLink").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("contact");
});
