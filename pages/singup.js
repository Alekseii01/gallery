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
        if (element.matches('.username')) {
          element.style.transition = "width 1s";
          element.style.width = "0";
          setTimeout(() => {
            element.style.width = "130px";
          }, 100); 
        } else {
          element.style.transition = "width 1s";
          element.style.width = "100px";
          setTimeout(() => {
            element.style.width = "170px";
          }, 100);
        }
      });
  
    const socials = document.querySelectorAll(".socials");
    socials.forEach((element) => {
      element.style.transition = "gap 1s";
      element.style.gap = "0px";
      setTimeout(() => {
        element.style.gap = "20px";
      }, 100);
  
    });
    }
  })



  document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password'); 
    const confirmPasswordInput = document.getElementById('confirmPassword');
  
    document.body.addEventListener('click', (event) => {
      if (event.target.matches('.submit')) {
        event.preventDefault(); 
        if (passwordInput.value === confirmPasswordInput.value) {
         window.location.href = '../index.html';
        } else {
          alert('Passwords do not match');
        }
      }
    });
  });