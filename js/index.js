// Function to check if an element is partially in the viewport
function isInViewport(element) {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.bottom >= 0
    );
}

// Function to handle scroll event with smooth animation
function handleScroll() {
    const elements = document.querySelectorAll('.import');

    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
}

// Add scroll event listener with requestAnimationFrame for smooth animation
let isScrolling;
window.addEventListener('scroll', function() {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function() {
        handleScroll();
    }, 100);
}, false);
