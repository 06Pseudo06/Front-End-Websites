gsap.from("#colon1", {
  y: -70, // Move from 70 pixels above its starting position
  x: -70, // Move from 70 pixels to the left of its starting position
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body", // Use the body as the scroll container
    start: "top 55%", // Start the animation when the top of #colon1 reaches 55% of the viewport height
    end: "top 45%",   // End the animation when the top of #colon1 reaches 45% of the viewport height
    scrub: 4,         // Smoothly link the animation to the scroll position over 4 seconds
  },
});


//Animation for #colon2:
gsap.from("#colon2", {
  y: 70, // Move from 70 pixels below its starting position
  x: 70, // Move from 70 pixels to the right of its starting position
  scrollTrigger: {
    trigger: "#colon1", // Trigger animation based on #colon1
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

//Animation for #page4 h1:
gsap.from("#page4 h1", {
  y: 170, // Move from 170 pixels below its starting position
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%", // Start when the top of h1 reaches 75% of the viewport height
    end: "top 50%",   // End when the top of h1 reaches 50% of the viewport height
    scrub: 3,
  },
});

//Animation for #nav Background Color and Height:
gsap.to("#nav", {
  backgroundColor: "#1B1B1B", // Change background color to dark gray
  height: "100px", // Change height to 100px
  duration: 0.5, // Duration of the transition
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -30%", // Start when the top of #nav is at -30% of the viewport
    end: "top -11%",    // End when the top of #nav is at -11% of the viewport
    scrub: 3,
  },
});

//Animation for #main Background Color:
gsap.to("#main", {
  backgroundColor: "#000", // Change background color to black
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -15%", // Start when the top of #main is at -15% of the viewport
    end: "top -80%",    // End when the top of #main is at -80% of the viewport
    scrub: 4,
  },
});

//Cursor Interaction with Navigation Links
var h4all = document.querySelectorAll("#nav h4"); // Select all h4 elements within #nav
h4all.forEach(function (elem) {
   elem.addEventListener("mouseenter", function () {
     crsr.style.scale = 3; // Scale up the cursor
     crsr.style.border = "1px solid #fff"; // Change cursor border to white
     crsr.style.backgroundColor = "transparent"; // Make cursor background transparent
   });
   elem.addEventListener("mouseleave", function () {
     crsr.style.scale = 1; // Reset cursor scale
     crsr.style.border = "0px solid #95C11E"; // Reset cursor border
     crsr.style.backgroundColor = "#95C11E"; // Change cursor background to green
   });
});

