// Lightweight navigation helper for showing sections and smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
	// Optional welcome message (non-blocking)
	console.log('Portfolio script loaded');

	const navLinks = document.querySelectorAll('.nav-link');
	const sections = document.querySelectorAll('.section-content');

	function showSection(id) {
		sections.forEach(s => {
			s.style.display = s.id === id ? '' : 'none';
		});
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}

	navLinks.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			navLinks.forEach(l => l.classList.remove('active'));
			this.classList.add('active');
			const target = this.getAttribute('href').replace('#', '') || 'home';
			showSection(target);
		});
	});

	// Contact link also handled via anchor hashing if present
	const contactLink = document.querySelector('.contact');
	if (contactLink) {
		contactLink.addEventListener('click', function (e) {
			e.preventDefault();
			navLinks.forEach(l => l.classList.remove('active'));
			showSection('contact');
		});
	}

	// Show home by default
	showSection('home');
});