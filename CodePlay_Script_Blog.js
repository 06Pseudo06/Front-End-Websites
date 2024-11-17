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




// Function to open the modal and display the selected video
function openModal(videoId) {
  // Get the modal element by its ID
  const modal = document.getElementById('modal');
  // Get the video element that will play the video in the modal
  const modalVideo = document.getElementById('modalVideo');
  // Get the source element for the modal video
  const modalSource = document.getElementById('modalSource');

  // Set the source of the modal video to the source of the clicked video
  modalSource.src = document.getElementById(videoId).querySelector('source').src;
  // Load the new video source into the modal video element
  modalVideo.load(); 

  // Show the modal by changing its display style to 'flex'
  modal.style.display = 'flex';
  
  // Optional: Automatically play the video when the modal opens
  modalVideo.play();
}

// Function to close the modal and stop the video playback
function closeModal() {
  // Get the modal element and the modal video element
  const modal = document.getElementById('modal');
  const modalVideo = document.getElementById('modalVideo');

  // Pause the video playback
  modalVideo.pause();
  // Clear the video source to reset the modal video
  modalVideo.src = ""; 

  // Hide the modal by changing its display style to 'none'
  modal.style.display = 'none';
}

// Event listener to close the modal when clicking outside of the video
window.onclick = function(event) {
  // Get the modal element
  const modal = document.getElementById('modal');
  // Check if the click target is the modal itself (not the video)
  if (event.target === modal) {
      // If so, call the closeModal function to hide the modal
      closeModal();
  }
}

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