// sticky cursor in the whole window
let crsr = document.querySelector(".cursor");
var blury = document.querySelector(".cursor-blur");
// function circleMouseFollower() {
//     window.addEventListener('mousemove', function (details) {
//         // get the clientX and clientY, these values increase and decrease according to the movement of the mouse in the window
//         // Hence we need to set this values according to the movement of the mouse
//         //console.log(details.clientX, details.clientY);
//         crsr.style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
//         document.querySelector(".cursor-blur").style.transform = `translate(${details.clientX - 150}px, ${details.clientY - 150}px)`;
//     })
// }

document.addEventListener("mousemove", function (dets) {
    // get the clientX and clientY, these values increase and decrease according to the movement of the mouse in the window
    // Hence we need to set this values according to the movement of the mouse
    //console.log(details.clientX, details.clientY);
    crsr.style.left = dets.x + 30 + "px";
    crsr.style.top = dets.y + "px";
    blury.style.left = dets.x - 250 + "px";
    blury.style.top = dets.y - 250 + "px";
});

// hovering in the nav links makes the cursor a little broad, with background transparent and border white
let navh4 = document.querySelectorAll("a");
navh4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });

    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});


//After scrolling a bit, setting the background colour of the nax section to black and after returning back
// to the top it comes back to the normal state
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "135px",
    scrollTrigger: {
        trigger: "#nav",
        scrollers: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

// After scrolling a bit the body background colour should be black, and after returning back
// to the top it comes back to the normal state
gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scrollers: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})
// circleMouseFollower();

// Applying Scroll trigger on the About Us section
gsap.from(".about-us img, .about-us-andar", {
    y: 90,
    opacity: 0,
    duration: 3,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
    },
});
// Applying Scroll trigger on the Cards section

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 1,
    }
})

// Applying Scroll trigger on the Page 3 colons
gsap.from("#col1", {
    y: -70,
    x: -100,
    scrollTrigger: {
        trigger: "#col1",
        scroller: "body",
        start: "top 75%",
        end: "top 45%",
        scrub: 4,
    }
})

gsap.from("#col2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#col1",
        scroller: "body",
        start: "top 75%",
        end: "top 45%",
        scrub: 4,
    }
})

gsap.from(".heading", {
    y: 70,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".heading",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
    },
})

// responsive navbar menu 
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

let nav = document.querySelector("#nav")

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    // nav.style.backgroundColor = "black";
})

