gsap.from(".logo", { duration: 1, y: -50, opacity: 0 });
gsap.from(".nav-menu li", { duration: 0.5, y: -20, opacity: 0, stagger: 0.2, delay: 0.3 });
gsap.from(".hero-left h1", { duration: 1, x: -100, opacity: 0, delay: 0.6 });
gsap.from(".hero-left p", { duration: 1, x: -100, opacity: 0, delay: 0.9 });
gsap.fromTo(".hero-left button", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, delay: 1.2 });
gsap.from(".hero-right img", { duration: 1, x: 100, opacity: 0, delay: 1.4 });
