gsap.to("#nav", {
  backgroundColor : "#1B1B1B",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
   trigger: "#nav",
   scroller: "body",
   // markers: true,
   start:"top -10%",
   end:"top -11%",
   scrub:3,
  },
});


gsap.to("#main", {
    backgroundColor: "#000 ",
    scrollTrigger: {
     trigger: "#main",
     scroller: "body",
     // markers: true,
     start: "top -25%",
     end: " top -70%",
     scrub: 4,
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
