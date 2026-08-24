const menuBtn = document.querySelector("#menuBtn");
const fixedMenu = document.querySelector(".fixed-menu");

menuBtn.addEventListener("click", () => {
  const isOpen = fixedMenu.style.top === "0%";
  fixedMenu.style.top = isOpen ? "-110%" : "0%";
});

const box = document.querySelector(".cursor-box");
const pointer = document.querySelector(".pointer");

document.querySelector(".hero").addEventListener("mousemove", (e) => {
  box.style.left = e.clientX + "px";
  box.style.top = e.clientY + "px";
  box.style.transition = "linear 0.3s";
  box.style.visibility = "visible";
  pointer.style.visibility = "hidden";
});

document.querySelector(".hero").addEventListener("mouseleave", (e) => {
  pointer.style.visibility = "visible";
});

document.querySelector(".hero").addEventListener("mouseleave", (e) => {
  box.style.visibility = "hidden";
  // pointer.style.visibility = "visible"
  // pointer.style.left = e.clientX + "px"
  // pointer.style.top = e.clientY + "px"
});

window.addEventListener("mousemove", (e) => {
  pointer.style.left = e.clientX + "px";
  pointer.style.top = e.clientY + "px";
  pointer.style.transition = "linear 0.2s";
  // pointer.style.transform = "traslate(-50%,-50%)"
});

document.querySelector(".videoshell").addEventListener("mousemove", () => {
  pointer.style.visibility = "hidden";
});

document.querySelector(".videoshell").addEventListener("mouseleave", () => {
  pointer.style.visibility = "visible";
});

const matera = document.querySelector(".box1");
const chance = document.querySelector(".box2");

// matera.addEventListener("mousemove",()=>{
//   pointer.textContent = "MATERA"
//   pointer.style.width = "150px"
//   pointer.style.height = "20px"
//   pointer.style.padding = "20px"
//   pointer.style.color = "white"
//   pointer.style.fontFamily = "sans-serif"
//   pointer.style.fontWeight = "700"
//   pointer.style.fontSize = "25px"
//   pointer.style.textAlign = ""
//   pointer.style.borderRadius = "8px"
// })

// matera.addEventListener("mouseleave",()=>{
//   // pointer.textContent = ""
//   pointer.style.borderRadius = "50%"
//   pointer.style.width = "20px"
//   pointer.style.height = "20px"
//   pointer.style.textContent = " "
// })

matera.addEventListener("mousemove", () => {
  pointer.textContent = "MATERA";

  pointer.style.width = "150px";
  pointer.style.height = "20px";
  pointer.style.padding = "20px";
  pointer.style.color = "white";
  pointer.style.fontFamily = "sans-serif";
  pointer.style.fontWeight = "700";
  pointer.style.fontSize = "25px";
  pointer.style.textAlign = "center";
  pointer.style.borderRadius = "8px";
});

matera.addEventListener("mouseleave", () => {
  pointer.textContent = "";
  pointer.style.borderRadius = "50%";
  pointer.style.width = "20px";
  pointer.style.height = "20px";
  pointer.style.padding = "0";
});

// const trigger = document.querySelectorAll(".hover-trigger")
// // const cards = document.querySelectorAll(".stack-card")

//   const rotation = [-7,7,-9,9]

// trigger.addEventListener("mouseenter",()=>{
//   cards.forEach((card)=>{
//     card.classList.add("show")

// cards.forEach((card,idx)=>{
//   card.style.transform = `rotate(${rotation[idx]}deg)`
// })
//   })
// })

// trigger.addEventListener("mouseleave",()=>{
//     cards.forEach((card)=>{
//     card.classList.remove("show")
//   })
// })

const triggers = document.querySelectorAll(".hover-trigger");
// console.log(trigger)
const rotation = [-7, 7, -9, 9];

triggers.forEach((trigger) => {
  const cards = trigger.querySelectorAll(".stack-card");

  let idx = 0;
  let zIdx = 10;
  trigger.addEventListener("mouseenter", () => {
    // setInterval(()=>{
    //   cards.forEach((card,idx)=>{
    //   card.classList.add("show")
    //   card.style.transform = `rotate(${rotation[idx]}deg)`
    //   // card.style.transition = ""
    // })
    // },300)

    setInterval(() => {
      const card = cards[idx];
      zIdx++;
      card.style.zIndex = zIdx;
      card.style.opacity = "1";
      card.style.transform = `rotate(${rotation[idx]}deg)`;
      idx++;

      if (idx === cards.length) {
        idx = 0;
      }
    }, 300);
  });

  trigger.addEventListener("mouseleave", () => {
    cards.forEach((card, idx) => {
      card.classList.remove("show");
      // card.style.transform = `rotate(${rotation[idx]}deg)`
      // card.style.transition = ""
    });
  });
});

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  const description = item.querySelector(".description");
  const descText = item.dataset.desc;

  if (description) {
    description.textContent = descText;
  }
});
