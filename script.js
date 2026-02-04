const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "green";
      form.reset();
    } else {
      formMessage.textContent = "Something went wrong.";
      formMessage.style.color = "red";
    }
  } catch {
    formMessage.textContent = "Network error.";
    formMessage.style.color = "red";
  }

  formMessage.classList.remove('hidden');
});


document.addEventListener("DOMContentLoaded", () => {

  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {

    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close menu when link clicked
    document.querySelectorAll("#mobile-menu a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });

  }

});



window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


// Close mobile menu when link is clicked
// document.querySelectorAll('#mobile-menu a').forEach(link => {
//   link.addEventListener('click', () => {
//     mobileMenu.classList.add('hidden');
//   });
// });
