// Your code goes here







const noRefresh = document.querySelectorAll('.nav-link');
noRefresh.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
});