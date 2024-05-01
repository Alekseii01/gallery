document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector(".backgroundblur");
    if (element) {
      element.style.transition = "padding 1s";
      element.style.padding = "10px";
      setTimeout(() => {
        element.style.padding = "30px";
      }, 100); // 1000ms = 1s
  
    const elements = document.querySelectorAll(".form-element input");
    elements.forEach((element) => {
      element.style.transition = "width 1s";
      element.style.width = "100px";
      setTimeout(() => {
        element.style.width = "200px";
      }, 100); // 1000ms = 1s
  
    const elements = document.querySelectorAll(".socials");
    elements.forEach((element) => {
      element.style.transition = "gap 1s";
      element.style.gap = "0px";
      setTimeout(() => {
        element.style.gap = "20px";
      }, 100); // 1000ms = 1s
  
    });
    });
    }
  })