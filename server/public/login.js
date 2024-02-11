document.addEventListener('DOMContentLoaded', function () {
  let captchaText = document.querySelector('#myCanvas');
  var ctx = captchaText.getContext("2d");
  ctx.font = "45px Roboto";
  ctx.fillStyle = "#000";

  let userText = document.querySelector('#Captcha');
  let Aadhar = document.querySelector('#Aadhar');
  let refreshButton = document.querySelector('#refresh');
  let form = document.getElementById('login-form');
   
 // Generate CAPTCHA
    function generateCaptcha() {
      let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].split('');
      let captcha = [];
      for (let i = 1; i <= 7; i++) {
        captcha.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
      }
      return captcha.join('');
    }

    function drawCaptcha() {
      const captcha = generateCaptcha();
      ctx.clearRect(0, 0, captchaText.width, captchaText.height);
      ctx.fillText(captcha, captchaText.width / 4, captchaText.height / 2);
      captchaText.setAttribute('data-captcha', captcha);
    }

  drawCaptcha(); // Initial CAPTCHA draw

  refreshButton.addEventListener('click', function() {
      drawCaptcha();
  });

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Validate CAPTCHA
      if (userText.value !== captchaText.getAttribute('data-captcha')) {
          alert('Incorrect CAPTCHA. Please try again.');
          drawCaptcha();
          return;
      }
      
      // Perform additional client-side validation if necessary

      // Mock submission logic
      // Here you would typically send data to your server
      // For demonstration, we'll log the Aadhar value and simulate a successful operation
      console.log('Aadhar Number:', Aadhar.value);

      // Assuming the server responds with a success message (you'll need to replace this with actual server communication logic)
      fetch('http://localhost:3000/data', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ aadhar: Aadhar.value, captcha: userText.value }),
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          if (data.success) {
              window.location.href = "Dashboard.html";
          } else {
              alert('Submission failed. Please try again.');
          }
      })
      .catch(error => {
          console.error('Error during fetch:', error);
          alert('An error occurred. Please try again.');
      });
  });
});
