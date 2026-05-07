document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) { target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
    // Feedback download
    var btn = document.querySelector('.btn-download');
    if (btn) {
        btn.addEventListener('click', function() {
            var old = btn.innerHTML;
            btn.innerHTML = '✅ Préparation...';
            btn.style.pointerEvents = 'none';
            setTimeout(function() { btn.innerHTML = old; btn.style.pointerEvents = 'auto'; }, 2000);
        });
    }
    console.log('🚀 Landing page chargée');
});
