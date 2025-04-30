function getTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || !storedTheme) {
        return 'light-theme';
    } else {
        return 'dark-theme';
    }
}

export default getTheme
