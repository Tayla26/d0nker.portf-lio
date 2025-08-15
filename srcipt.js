// Destaca link ativo no menu
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
window.addEventListener('scroll', function() {
  document.querySelectorAll('.fade-in').forEach(function(el) {
    let windowHeight = window.innerHeight;
    let revealTop = el.getBoundingClientRect().top;
    let revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

window.addEventListener('scroll', function() {
  document.querySelectorAll('.reveal').forEach(function(el) {
    let windowHeight = window.innerHeight;
    let revealTop = el.getBoundingClientRect().top;
    let revealPoint = 100;
    if(revealTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
});