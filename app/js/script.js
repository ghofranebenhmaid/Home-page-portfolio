let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');
let pressed = true;
let startx;
let x;

slider.addEventListener('mousedown', (e) =>
{
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing';
});
slider.addEventListener('mouseenter', () =>
{
    slider.style.cursor = 'grab';
});
slider.addEventListener('mouseup', () =>
{
    slider.style.cursor = 'grab';
});
window.addEventListener('mouseup', () =>
{
    pressed = false;
});

slider.addEventListener('mousemove', (e) =>
{
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    innerSlider.style.left = `${ x - startx }px`;
    
    checkboundary();
});

function checkboundary ()
{
    let inner  = slider.getBoundingClientRect();
    let  outer = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px';
    } else if (inner.right > outer.right) {
        innerSlider.style.left = `${ inner.width - outer.width }px`
    }
}

// function myFunction() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
// }
function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        }

        // function to toggle between light and dark theme
        function toggleTheme() {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-light');
            } else {
                setTheme('theme-dark');
            }
        }

        // Immediately invoked function to set the theme on initial load
        (function () {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-dark');
            } else {
                setTheme('theme-light');
            }
        })();