// Select the element with the ID "cursor" and store it in the variable 'crsr'
var crsr = document.querySelector("#cursor");

// Add an event listener for the 'mousemove' event on the document
document.addEventListener("mousemove", function(dets){
    // Update the position of the 'crsr' element to follow the mouse cursor
    crsr.style.left =  dets.x + "px"; // Set the left position based on the mouse's x-coordinate
    crsr.style.top = dets.y + "px";   // Set the top position based on the mouse's y-coordinate
});

// Select the element with the ID "cursorblur" and store it in the variable 'blur'
var blur = document.querySelector("#cursorblur");

// Add another event listener for the 'mousemove' event on the document
document.addEventListener("mousemove", function(dets){
    // Update the position of the 'blur' element to follow the mouse cursor, offset by -150 pixels
    blur.style.left =  dets.x - 150 + "px"; // Set the left position, offsetting the x-coordinate by -150 pixels
    blur.style.top = dets.y - 150 + "px";   // Set the top position, offsetting the y-coordinate by -150 pixels
});





// Animate the navigation bar (#nav) when scrolling
gsap.to("#nav", {
  backgroundColor: "#1B1B1B", // Change the background color to a dark shade
  height: "100px",             // Set the height of the navigation bar to 100 pixels
  duration: 0.5,               // Animation duration of 0.5 seconds
  scrollTrigger: {
     trigger: "#nav",          // The element that triggers the animation
     scroller: "body",        // The element that acts as the scrolling container
     // markers: true,         // Uncomment to show markers for debugging (start and end points)
     start: "top -10%",        // Start the animation when the top of #nav is at 10% from the top of the viewport
     end: "top -11%",          // End the animation when the top of #nav is at 11% from the top of the viewport
     scrub: 3,                 // Smoothly scrubs the animation based on the scroll position (3 seconds)
  },
});

// Animate the main section (#main) background color when scrolling
gsap.to("#main", {
    backgroundColor: "#000",    // Change the background color to black
    scrollTrigger: {
       trigger: "#main",        // The element that triggers the animation
       scroller: "body",       // The element that acts as the scrolling container
       // markers: true,        // Uncomment to show markers for debugging (start and end points)
       start: "top -25%",       // Start the animation when the top of #main is at 25% from the top of the viewport
       end: "top -70%",         // End the animation when the top of #main is at 70% from the top of the viewport
       scrub: 4,                // Smoothly scrubs the animation based on the scroll position (4 seconds)
    },
});

// Animate the elements inside the #about-us section when scrolling
gsap.from("#about-us img, #about-us-in", {
 y: 90,                        // Start the elements 90 pixels down from their original position
 opacity: 0,                  // Start with an opacity of 0 (invisible)
 duration: 10,                 // Animation duration of 1 second
 scrollTrigger: {
   trigger: "#about-us",      // The element that triggers the animation
   scroller: "body",          // The element that acts as the scrolling container
   // markers: true,           // Uncomment to show markers for debugging (start and end points)
   start: "top 70%",          // Start the animation when the top of #about-us is at 70% from the top of the viewport
   end: "top 65%",            // End the animation when the top of #about-us is at 65% from the top of the viewport
   scrub: 1,                  // Smoothly scrubs the animation based on the scroll position (1 second)
 },
});

// Initialize a variable to keep track of the last scroll position
let lastScrollTop = 0;

// Get the footer element by its ID so we can manipulate its style later
const footer = document.getElementById('footer');

// Add an event listener for the 'scroll' event on the window object
window.addEventListener('scroll', function() {
    // Get the current vertical scroll position
    // 'window.pageYOffset' returns the number of pixels the document has been scrolled vertically
    // 'document.documentElement.scrollTop' is a fallback for older browsers
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the current scroll position is greater than the last recorded scroll position
    if (scrollTop > lastScrollTop) {
        // If scrolling down, hide the footer by moving it below the visible area
        footer.style.bottom = '-100px'; // Set the bottom property to -100px to hide it
    } else {
        // If scrolling up, show the footer by resetting its bottom position to 0
        footer.style.bottom = '0'; // Set the bottom property to 0 to bring it into view
    }

    // Update the lastScrollTop variable to the current scroll position
    // Ensure that lastScrollTop does not go below 0 (for mobile or negative scrolling)
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});