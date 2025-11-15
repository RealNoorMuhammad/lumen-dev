let scroll; // global locomotive instance

window.addEventListener('load', function() {
  const scrollContainer = document.querySelector('[data-scroll-container]');

  // --- Locomotive ---
  scroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    multiplier: 0.8,
    smartphone: { smooth: true },
    tablet: { smooth: true }
  });

  // --- GSAP + ScrollTrigger ---
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
        : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed"
  });

  scroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  ScrollTrigger.refresh();

  // --- Feature Animations (data-animate="left"/"right") ---
  document.querySelectorAll("[data-animate]").forEach(el => {
    const fromX = el.dataset.animate === "left" ? -120 : 120;
    gsap.from(el, {
      x: fromX,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        scroller: scrollContainer,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  });

  // --- Compliance Section ---
  gsap.from([".compliance-badge", ".compliance-title"], {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".compliance-section",
      scroller: scrollContainer,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".compliance-image", {
    x: 120,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".compliance-section",
      scroller: scrollContainer,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".compliance-feature", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".compliance-features",
      scroller: scrollContainer,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  // --- Process Section ---
  gsap.from([".process-title", ".process-subtitle"], {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".process-header",
      scroller: scrollContainer,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".process-btn", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".process-header",
      scroller: scrollContainer,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from([".process-step:nth-of-type(1)", ".process-step:nth-of-type(2)"], {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".process-steps",
      scroller: scrollContainer,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
  
  gsap.from([".process-step:nth-of-type(3)", ".process-step:nth-of-type(4)"], {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".process-steps",
      scroller: scrollContainer,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });



  // --- CTA Section ---
gsap.from(".cta-title", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cta-section",
      scroller: scrollContainer,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
  
  gsap.from(".cta-btn", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cta-section",
      scroller: scrollContainer,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
  


  
});

// Update Locomotive on resize
window.addEventListener('resize', function() {
  if (scroll) scroll.update();
});

// --- Mobile Menu, FAQ, Chat ---
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  // Create backdrop if it doesn't exist
  let backdrop = document.querySelector('.mobile-menu-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-menu-backdrop';
    document.body.appendChild(backdrop);
  }

  navToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    backdrop.classList.toggle('active');
    
    // Prevent body scroll when menu is open (mobile only)
    if (window.innerWidth <= 768) {
      document.body.style.overflow = isActive ? 'hidden' : '';
    }
  });

  // Close menu when clicking backdrop
  backdrop.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Only close menu on non-dropdown navigation links
  document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Handle dropdown toggles separately - don't close the menu
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = toggle.closest('.dropdown');
        // Close other dropdowns
        document.querySelectorAll('.dropdown').forEach(d => {
          if (d !== dropdown) {
            d.classList.remove('active');
          }
        });
        // Toggle current dropdown
        dropdown.classList.toggle('active');
      }
    });
  });

  // Close menu when clicking on actual dropdown links (inside dropdown)
  document.querySelectorAll('.dropdown-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      document.querySelectorAll('.dropdown.active')
        .forEach(drop => drop.classList.remove('active'));
    }
  });

  // FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const toggle = item.querySelector('.faq-toggle');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq-toggle').textContent = '+';
        }
      });
      if (isActive) {
        item.classList.remove('active');
        toggle.textContent = '+';
      } else {
        item.classList.add('active');
        toggle.textContent = '−';
      }
      
      // Update Locomotive Scroll after content height changes
      setTimeout(() => {
        if (scroll) scroll.update();
      }, 300); // Wait for CSS transition to complete
    });
  });

  // Chatbox
  const chatBubble = document.getElementById('chatBubble');
  const chatWindow = document.getElementById('chatWindow');
  const chatClose = document.getElementById('chatClose');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');
  const chatMessages = document.getElementById('chatMessages');

  function toggleChat() {
    if (chatWindow.classList.contains('show')) {
      chatWindow.classList.remove('show');
      setTimeout(() => (chatWindow.style.display = 'none'), 300);
    } else {
      chatWindow.style.display = 'flex';
      setTimeout(() => chatWindow.classList.add('show'), 10);
    }
  }

  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (sender === 'user') {
      messageDiv.innerHTML = `
        <div class="message-content">
          <div class="message-info">
            <span class="message-sender">You</span>
            <span class="message-time">${time}</span>
          </div>
          <div class="message-text">${text}</div>
        </div>`;
    } else {
      messageDiv.innerHTML = `
        <div class="message-avatar"><div class="avatar-circle"><span>SP</span></div></div>
        <div class="message-content">
          <div class="message-info">
            <span class="message-sender">SolPay</span>
            <span class="message-time">${time}</span>
          </div>
          <div class="message-text">${text}</div>
        </div>`;
    }
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
      addMessage(message, 'user');
      chatInput.value = '';
      setTimeout(() => {
        addMessage('Thank you for your message! Our team will get back to you shortly.', 'bot');
      }, 1000);
    }
  }

  chatBubble.addEventListener('click', toggleChat);
  chatClose.addEventListener('click', toggleChat);
  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendMessage();
  });

  document.addEventListener('click', e => {
    if (!chatWindow.contains(e.target) && !chatBubble.contains(e.target) && chatWindow.classList.contains('show')) {
      toggleChat();
    }
  });

  // Careers Modal
  const careersModal = document.getElementById('careersModal');
  const careersModalBtn = document.getElementById('careersModalBtn');
  const careersModalClose = document.getElementById('careersModalClose');
  const careersModalOverlay = careersModal?.querySelector('.careers-modal-overlay');

  function openCareersModal() {
    if (careersModal) {
      careersModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCareersModal() {
    if (careersModal) {
      careersModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (careersModalBtn) {
    careersModalBtn.addEventListener('click', openCareersModal);
  }

  if (careersModalClose) {
    careersModalClose.addEventListener('click', closeCareersModal);
  }

  if (careersModalOverlay) {
    careersModalOverlay.addEventListener('click', closeCareersModal);
  }

  // Close modal on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && careersModal?.classList.contains('active')) {
      closeCareersModal();
    }
  });

  // Handle Apply Now buttons
  const jobApplyButtons = document.querySelectorAll('.job-apply-btn');
  jobApplyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const jobTitle = this.closest('.job-card').querySelector('.job-title').textContent;
      // You can customize this behavior - redirect to contact page or open email
      window.location.href = `./contact.html?position=${encodeURIComponent(jobTitle)}`;
    });
  });
});
