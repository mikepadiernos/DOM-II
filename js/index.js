// Your code goes here

const fullScreen = document.querySelector('.nav-container');
window.addEventListener('resize', () => {
     fullScreen.style.maxWidth = '90%';
});




const destination = document.querySelector('.content-destination');
destination.addEventListener('click', () => {
    destination.style.width = '100%';
});
destination.addEventListener('dblclick', () => {
    destination.style.width = '75%';
});

const destImage = document.querySelector('.content-destination img');
destImage.addEventListener('mouseenter', () => {
    destImage.style.width = '100%';
    // destImage.style.borderRadius = '4px';
    destImage.style.transform = 'scale(1.2)';
    destImage.style.transition = 'all 0.3s';
});
destImage.addEventListener('mouseleave', () => {
    destImage.style.transform = 'scale(1)';
});

const btnHover = document.querySelector('.btn');
btnHover.addEventListener('wheel', () => {
        btnHover.style.borderRadius = '3px';
    });
console.log(btnHover);

const reset = document.querySelector('.footer p');
reset.addEventListener('contextmenu', () => {
    reset.style.fontSize = '1.8rem';
});

const noRefresh = document.querySelectorAll('.nav-link');
noRefresh.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
});