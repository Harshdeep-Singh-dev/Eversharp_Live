// The purpose ofthe javascript is to change background Color of products section when specific product is hovered upon
// Initialize Lenis
console.log(window.innerWidth)
console.log(window.innerHeight)
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // LENIS INSTALLED
  lenis.on('scroll', (e) => {
    console.log(e);
  });

let products = document.querySelector("#products");
let boxes = document.querySelectorAll(".box figure");


// SETTING PASTEL COLORS
const setBackgroundColor = (i) => {
  var style = window.getComputedStyle(boxes[i]);
  var backGroundColor = style.backgroundColor;
  products.style.backgroundColor = backGroundColor;
};

// CHANGING PASTEL COLORS

const resetBackgroundColor = () => {
  products.style.backgroundColor = "#fff";
};

for (let i = 0; i < Math.min(8, boxes.length); i++) {
  boxes[i].addEventListener("mouseenter", () => setBackgroundColor(i));
  boxes[i].addEventListener("mouseleave", resetBackgroundColor);
}

// HAMBURG SCRIPT
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  // TOGGLING
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent bubbling to document
    navMenu.classList.toggle("active");
  });

  // STOP CLICKS INSIDE TO PREVENT COLLAPSE
  navMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // COLLAPSE ON ANYWHERE ELSE CLICKED
  document.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });


