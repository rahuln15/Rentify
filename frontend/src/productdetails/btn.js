
  document.querySelectorAll('.month').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.month').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

