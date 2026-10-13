/**
 * =========================================================================
 * Digvijay Deshmukh - Portfolio Application Logic
 * Clean, tactile, high-craft interactions with zero AI-slop
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDynamicTyping();
  initSkills();
  initProjects();
  initTerminal();
  initMilestones();
  initContactForm();
  initCopyEmail();
  initScrollSpy();
  initMobileMenu();
  lucide.createIcons();
});

/* -------------------------------------------------------------------------
 * Theme Management (Dark / Light)
 * ------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const html = document.documentElement;

  // Read saved theme or default to dark
  const savedTheme = localStorage.getItem('digvijay_portfolio_theme') || 'dark';
  applyTheme(savedTheme);

  function toggle() {
    const isDark = html.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('digvijay_portfolio_theme', newTheme);
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
    updateThemeIcons(theme === 'dark');
  }

  function updateThemeIcons(isDark) {
    const icons = document.querySelectorAll('.theme-toggle-icon');
    icons.forEach(icon => {
      icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    });
    lucide.createIcons();
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggle);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggle);
}

/* -------------------------------------------------------------------------
 * Dynamic Typing Effect
 * ------------------------------------------------------------------------- */
function initDynamicTyping() {
  const typingEl = document.getElementById('typing-text');
  if (!typingEl) return;

  const phrases = [
    "Ex-Google SWE Intern • IIIT Lucknow",
    "Architecting scalable backend systems",
    "Engineering distributed microservices",
    "Designing resilient database architectures",
    "Building production full-stack platforms"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function type() {
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      typingEl.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 30;
    } else {
      typingEl.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 70;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      typingSpeed = 2000; // Pause at end of phrase
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 400; // Pause before new phrase
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* -------------------------------------------------------------------------
 * Skills Matrix Rendering & Filtering (No fake % bars; clean domain badges)
 * ------------------------------------------------------------------------- */
function initSkills() {
  const container = document.getElementById('skills-container');
  const tabs = document.querySelectorAll('.skill-filter-tab');
  if (!container) return;

  const activeClasses = ['bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-600/20', 'dark:bg-cyan-500', 'dark:text-slate-950', 'dark:shadow-cyan-500/25'];
  const inactiveClasses = ['bg-white', 'border', 'border-slate-200', 'text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-50', 'shadow-sm', 'dark:bg-slate-800/60', 'dark:border-transparent', 'dark:text-slate-400', 'dark:hover:text-white', 'dark:shadow-none'];

  function renderSkills(category = 'all') {
    container.innerHTML = '';
    let skillsToDisplay = [];

    if (category === 'all') {
      Object.keys(PORTFOLIO_DATA.skills).forEach(cat => {
        skillsToDisplay.push(...PORTFOLIO_DATA.skills[cat].map(s => ({ ...s, category: cat })));
      });
    } else if (PORTFOLIO_DATA.skills[category]) {
      skillsToDisplay = PORTFOLIO_DATA.skills[category].map(s => ({ ...s, category }));
    }

    skillsToDisplay.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'glass-panel interactive-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-cyan-500/40 transition-all shadow-sm dark:shadow-none flex flex-col justify-between';

      const categoryLabels = {
        backend: "Backend & Systems",
        databases: "Databases & Cache",
        devops: "DevOps & Cloud",
        frontend: "Frontend & Web"
      };

      const levelColors = {
        Production: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30",
        Proficient: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/30",
        Core: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/30",
        Experienced: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/30"
      };

      const badgeStyle = levelColors[skill.level] || levelColors.Proficient;

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-indigo-600 dark:text-cyan-400 shrink-0">
                <i data-lucide="layers" class="w-4 h-4"></i>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">${skill.name}</h4>
                <span class="text-[11px] text-slate-500 dark:text-slate-400 font-mono font-medium">${categoryLabels[skill.category] || skill.category}</span>
              </div>
            </div>
            <span class="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-md border ${badgeStyle}">${skill.level}</span>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2">${skill.desc}</p>
        </div>
      `;
      container.appendChild(card);
    });

    lucide.createIcons();
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove(...activeClasses);
        t.classList.add(...inactiveClasses);
      });
      tab.classList.remove(...inactiveClasses);
      tab.classList.add(...activeClasses);

      renderSkills(tab.getAttribute('data-category'));
    });
  });

  renderSkills('all');
}

/* -------------------------------------------------------------------------
 * Projects Rendering & Filtering
 * ------------------------------------------------------------------------- */
function initProjects() {
  const container = document.getElementById('projects-container');
  const tabs = document.querySelectorAll('.project-filter-tab');
  if (!container) return;

  const activeClasses = ['bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-600/20', 'dark:bg-cyan-500', 'dark:text-slate-950', 'dark:shadow-cyan-500/25'];
  const inactiveClasses = ['bg-white', 'border', 'border-slate-200', 'text-slate-700', 'hover:text-slate-900', 'hover:bg-slate-50', 'shadow-sm', 'dark:bg-slate-800/60', 'dark:border-transparent', 'dark:text-slate-400', 'dark:hover:text-white', 'dark:shadow-none'];

  function renderProjects(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all' 
      ? PORTFOLIO_DATA.projects 
      : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

    filtered.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'glass-panel interactive-card p-6 md:p-7 rounded-2xl border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between shadow-sm dark:shadow-none';
      
      const techTags = proj.technologies.map(t => 
        `<span class="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-medium">${t}</span>`
      ).join('');

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-indigo-50 dark:bg-cyan-500/10 border border-indigo-200 dark:border-cyan-500/30 text-indigo-700 dark:text-cyan-300 font-mono">
              ${proj.badge}
            </span>
            <div class="flex space-x-2">
              ${proj.liveUrl && proj.liveUrl !== proj.githubUrl ? `
                <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 transition-colors" title="Open Live Web Application">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                </a>
              ` : ''}
              <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/70 dark:hover:bg-cyan-500/20 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700/60 transition-colors shadow-sm dark:shadow-none" title="View Source on GitHub">
                <i data-lucide="github" class="w-4 h-4"></i>
              </a>
              <button onclick="openProjectModal('${proj.id}')" class="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/70 dark:hover:bg-indigo-500/20 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700/60 transition-colors shadow-sm dark:shadow-none" title="Inspect Architecture Details">
                <i data-lucide="external-link" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
          
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer" onclick="openProjectModal('${proj.id}')">
            ${proj.title}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
            ${proj.shortDesc}
          </p>

          <div class="space-y-2 mb-6">
            ${proj.highlights.slice(0, 2).map(h => `
              <div class="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                <i data-lucide="check" class="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400 mt-0.5 shrink-0"></i>
                <span>${h}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${techTags}
          </div>
          
          <button onclick="openProjectModal('${proj.id}')" class="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-indigo-600 hover:text-white text-indigo-700 font-semibold text-xs border border-indigo-200 dark:bg-slate-800/80 dark:hover:bg-cyan-500 dark:hover:text-slate-950 dark:text-cyan-400 dark:border-cyan-500/30 transition-all flex items-center justify-center space-x-2 shadow-sm dark:shadow-none">
            <span>View Architecture Breakdown</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      `;

      container.appendChild(card);
    });

    lucide.createIcons();
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove(...activeClasses);
        t.classList.add(...inactiveClasses);
      });
      tab.classList.remove(...inactiveClasses);
      tab.classList.add(...activeClasses);

      renderProjects(tab.getAttribute('data-filter'));
    });
  });

  renderProjects('all');
}

/* -------------------------------------------------------------------------
 * Project Modal Popup
 * ------------------------------------------------------------------------- */
window.openProjectModal = function(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalDesc = document.getElementById('modal-desc');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalTech = document.getElementById('modal-tech');
  const modalGithub = document.getElementById('modal-github');

  modalTitle.textContent = project.title;
  modalBadge.textContent = project.badge;
  modalDesc.textContent = project.longDesc;
  
  modalHighlights.innerHTML = project.highlights.map(h => `
    <li class="flex items-start space-x-2.5 text-sm text-slate-700 dark:text-slate-300">
      <i data-lucide="check-circle-2" class="w-4 h-4 text-indigo-600 dark:text-cyan-400 mt-1 shrink-0"></i>
      <span>${h}</span>
    </li>
  `).join('');

  modalTech.innerHTML = project.technologies.map(t => `
    <span class="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-cyan-300 border border-slate-200 dark:border-cyan-500/20 font-semibold">${t}</span>
  `).join('');

  modalGithub.href = project.githubUrl;

  const modalLive = document.getElementById('modal-live');
  if (modalLive) {
    if (project.liveUrl && project.liveUrl !== project.githubUrl) {
      modalLive.href = project.liveUrl;
      modalLive.classList.remove('hidden');
      modalLive.classList.add('flex');
    } else {
      modalLive.classList.add('hidden');
      modalLive.classList.remove('flex');
    }
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
};

/* -------------------------------------------------------------------------
 * Interactive CLI Terminal
 * ------------------------------------------------------------------------- */
function initTerminal() {
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  const chipButtons = document.querySelectorAll('.terminal-chip');
  if (!terminalBody || !terminalInput) return;

  // Print welcome message
  PORTFOLIO_DATA.terminal.welcomeMessage.forEach(line => {
    appendTerminalLine(line, 'text-slate-400');
  });

  function appendTerminalLine(text, styleClass = 'text-slate-300') {
    const p = document.createElement('div');
    p.className = `${styleClass} font-mono text-xs md:text-sm whitespace-pre-wrap leading-relaxed`;
    p.textContent = text;
    terminalBody.appendChild(p);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function executeCommand(cmd) {
    const rawCmd = cmd.trim();
    if (!rawCmd) return;

    // Display user command
    const promptLine = document.createElement('div');
    promptLine.className = 'font-mono text-xs md:text-sm flex items-center space-x-2 text-slate-200 mt-2';
    promptLine.innerHTML = `
      <span class="text-cyan-400">guest@digvijay:~$</span>
      <span class="text-white font-medium">${rawCmd}</span>
    `;
    terminalBody.appendChild(promptLine);

    const lowerCmd = rawCmd.toLowerCase();

    if (lowerCmd === 'clear') {
      terminalBody.innerHTML = '';
      return;
    }

    if (lowerCmd === 'resume') {
      appendTerminalLine(PORTFOLIO_DATA.terminal.commands.resume, 'text-cyan-300 font-semibold');
      setTimeout(() => {
        window.open(PORTFOLIO_DATA.personal.resumeUrl, '_blank', 'noopener,noreferrer');
      }, 500);
      return;
    }

    if (PORTFOLIO_DATA.terminal.commands[lowerCmd]) {
      const response = PORTFOLIO_DATA.terminal.commands[lowerCmd];
      const outputText = typeof response === 'function' ? response() : response;
      appendTerminalLine(outputText, lowerCmd === 'sudo hire' ? 'text-emerald-400 font-bold' : 'text-slate-300');
      
      if (lowerCmd === 'sudo hire') {
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 1200);
      }
    } else {
      appendTerminalLine(`command not found: "${rawCmd}". Type 'help' to see available commands.`, 'text-rose-400');
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.value;
      terminalInput.value = '';
      executeCommand(cmd);
    }
  });

  chipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });
}

/* -------------------------------------------------------------------------
 * Career Milestones & Experience
 * ------------------------------------------------------------------------- */
function initMilestones() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  PORTFOLIO_DATA.experience.forEach((exp, idx) => {
    const item = document.createElement('div');
    item.className = 'relative pl-8 md:pl-0 mb-12 last:mb-0';

    const isEven = idx % 2 === 0;

    item.innerHTML = `
      <div class="hidden md:block absolute top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${exp.badge === 'Google SWE Intern' ? 'bg-amber-500 shadow-amber-500/50' : 'bg-indigo-600 dark:bg-cyan-500 shadow-indigo-600/40 dark:shadow-cyan-500/50'} border-4 border-slate-100 dark:border-slate-900 shadow-md z-10"></div>
      <div class="md:hidden absolute top-1.5 left-0 w-4 h-4 rounded-full ${exp.badge === 'Google SWE Intern' ? 'bg-amber-500 shadow-amber-500/50' : 'bg-indigo-600 dark:bg-cyan-500 shadow-indigo-600/40 dark:shadow-cyan-500/50'} border-4 border-slate-100 dark:border-slate-900 shadow-md z-10"></div>

      <div class="md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8 md:text-left'}">
        <div class="glass-panel interactive-card p-6 rounded-2xl border ${exp.badge === 'Google SWE Intern' ? 'border-amber-400/80 bg-amber-50/40 dark:bg-slate-900/90 dark:border-amber-500/40' : 'border-slate-200 dark:border-slate-700/60'} shadow-sm dark:shadow-none">
          <div class="flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}">
            <span class="inline-block px-2.5 py-1 text-xs font-mono font-semibold rounded bg-indigo-50 dark:bg-cyan-500/10 text-indigo-700 dark:text-cyan-400 border border-indigo-200 dark:border-cyan-500/20">
              ${exp.period}
            </span>
            ${exp.badge ? `<span class="inline-block px-2.5 py-1 text-xs font-mono font-bold rounded ${exp.badge === 'Google SWE Intern' ? 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40' : 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'}">★ ${exp.badge}</span>` : ''}
          </div>
          <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}">
            <span>${exp.role}</span>
          </h4>
          <p class="text-sm font-semibold ${exp.company === 'Google' ? 'text-amber-900 dark:text-amber-300' : 'text-slate-700 dark:text-slate-300'} mb-3">${exp.company} • ${exp.location}</p>
          <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">${exp.description}</p>
          <div class="flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}">
            ${exp.skills.map(s => `<span class="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 font-medium">${s}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    container.appendChild(item);
  });
}

/* -------------------------------------------------------------------------
 * Contact Form & Toast Notifications
 * ------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <div class="w-4 h-4 border-2 border-white dark:border-slate-950 border-t-transparent rounded-full animate-spin"></div>
      <span>Sending Message...</span>
    `;

    // Simulate sending network latency
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <i data-lucide="send" class="w-4 h-4"></i>
        <span>Send Message</span>
      `;
      lucide.createIcons();

      form.reset();
      showToast(`Thanks ${name}! Your message has been prepared. I'll get back to you promptly.`, 'success');
    }, 1000);
  });
}

/* -------------------------------------------------------------------------
 * Copy to Clipboard
 * ------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email).then(() => {
      showToast('Email address copied to clipboard!', 'success');
    }).catch(() => {
      showToast('Email: digvijaydeshmukh5555@outlook.com', 'info');
    });
  });
}

/* -------------------------------------------------------------------------
 * Toast Notification System
 * ------------------------------------------------------------------------- */
window.showToast = function(message, type = 'info') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;

  let iconName = 'info';
  if (type === 'success') iconName = 'check-circle-2';
  if (type === 'error') iconName = 'alert-triangle';

  toastIcon.setAttribute('data-lucide', iconName);
  lucide.createIcons();

  toast.classList.remove('hidden');
  toast.classList.add('toast-slide-in');

  setTimeout(() => {
    toast.classList.remove('toast-slide-in');
    toast.classList.add('toast-slide-out');
    setTimeout(() => {
      toast.classList.add('hidden');
      toast.classList.remove('toast-slide-out');
    }, 250);
  }, 3500);
};

/* -------------------------------------------------------------------------
 * ScrollSpy & Navigation
 * ------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-indigo-600', 'dark:text-cyan-400', 'font-bold');
      link.classList.add('text-slate-600', 'dark:text-slate-300');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-indigo-600', 'dark:text-cyan-400', 'font-bold');
        link.classList.remove('text-slate-600', 'dark:text-slate-300');
      }
    });
  });
}

/* -------------------------------------------------------------------------
 * Mobile Menu
 * ------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}
