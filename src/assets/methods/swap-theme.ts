function swapTheme() {
    const newTheme = document.documentElement.className === 'light-theme' ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
   }

export default swapTheme
