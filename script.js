// Theme toggle functionality
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.body = document.body;
    this.icon = this.themeToggle.querySelector('.theme-icon');
    this.currentTheme = localStorage.getItem('theme') || 'dark';

    this.init();
  }

  init() {
    // Apply saved theme on load
    this.applyTheme(this.currentTheme);

    // Add click event listener
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.currentTheme);
    this.saveTheme();
  }

  applyTheme(theme) {
    if (theme === 'light') {
      this.body.classList.add('light-mode');
      this.icon.textContent = '☀️';
      this.themeToggle.setAttribute('aria-label', 'Alternar para tema escuro');
    } else {
      this.body.classList.remove('light-mode');
      this.icon.textContent = '🌙';
      this.themeToggle.setAttribute('aria-label', 'Alternar para tema claro');
    }
  }

  saveTheme() {
    localStorage.setItem('theme', this.currentTheme);
  }
}

// Initialize theme manager + profile persistence when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();

  document.querySelectorAll('.profile[data-profile-name]').forEach(profileLink => {
    profileLink.addEventListener('click', () => {
      const profileName = profileLink.dataset.profileName;
      localStorage.setItem('activeProfileName', profileName);
    });
  });
});