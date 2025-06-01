function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
  }


  /*MAterials*/
  function showMaterialDetail(material) {
    document.querySelector('.material-cards').style.display = 'none';
    document.getElementById(material + '-detail').style.display = 'block';
  }
  
  function goBack() {
    document.querySelectorAll('.material-detail').forEach(el => el.style.display = 'none');
    document.querySelector('.material-cards').style.display = 'flex';
  }

  
  // Initialize ScrollReveal
  ScrollReveal({
    reset: false,         // true = reveal every time; false = only once
    distance: '60px',
    duration: 1000,
    delay: 200
  });

  // Target elements
  ScrollReveal().reveal('.section-title, .home-content', { origin: 'top' });
  ScrollReveal().reveal('.doorpad-card, .material-card, .toproof-card, .toproof-description, .contact', { origin: 'bottom', interval: 300 });
  ScrollReveal().reveal('.about_details_container,.about-container,.material-cards,.softlawn-detail', { origin: 'left' });
  ScrollReveal().reveal('.details_container, .rexin-detail', { origin: 'right', interval: 150 });

