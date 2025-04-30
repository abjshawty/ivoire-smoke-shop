function defaultTheme() {
    const storedTheme = localStorage.getItem('theme');
    document.documentElement.className = storedTheme || 'light-theme';
}

export default defaultTheme
