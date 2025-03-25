document.addEventListener("DOMContentLoaded", function () {
    const subscribeBtn = document.getElementById("subscribe-btn");
    const emailInput = document.getElementById("newsletter-email");
  
    if (subscribeBtn && emailInput) {
      subscribeBtn.addEventListener("click", function () {
        const email = emailInput.value.trim();
  
        if (email === "") {
          alert("Please enter your email.");
        } else if (!email.includes("@") || !email.includes(".")) {
          alert("Please enter a valid email.");
        } else {
          alert(`Thank you for subscribing: ${email}`);
          emailInput.value = "";
        }
      });
    }
  });
  