// document.ready(
//     window.addEventListener('scroll', function () {
//         const scrollTop = window.scrollY;
//         const windowHeight = window.innerHeight;
//         const bodyHeight = document.body.offsetHeight;
//         const scrollPercentage = (scrollTop / (bodyHeight - windowHeight)) * 100;

//         let color1 = '#ff0000'; // Starting color
//         let color2 = '#00ff00'; // Middle color
//         let color3 = '#0000ff'; // Ending color

//         if (scrollPercentage < 50) {
//             // If scroll is less than 50%, linear gradient between color1 and color2
//             document.body.style.background = `linear-gradient(to bottom, ${color1} 0%, ${color2} ${scrollPercentage}%, ${color3} ${scrollPercentage}%, ${color3} 100%)`;
//         } else {
//             // If scroll is 50% or more, linear gradient between color2 and color3
//             document.body.style.background = `linear-gradient(to bottom, ${color1} 0%, ${color2} 50%, ${color3} ${scrollPercentage}%, ${color3} 100%)`;
//         }
//     })      
// )
