function toggleScrolled() {
    const header = document.querySelector('header'); 
    if (!header) return; // Prevents null errors
  
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', toggleScrolled);
  