//function validateForm() {

  let fullNameInput = document.forms.myForm["full-name"];
  let emailInput = document.forms.myForm["email"];
  let businessNameInput = document.forms.myForm["business-name"];
  let userNameInput = document.forms.myForm["user-name"];
  let passwordInput = document.forms.myForm["password"];
  let verifyPasswordInput = document.forms.myForm["verify-password"];
  let submitButton = document.forms.myForm["submit-button"];

  fullNameInput.addEventListener('input', function() {

      if (fullNameInput.value.length > 3) {
        document.getElementById('result-message').innerHTML = "Name is ok!"
        fullNameInput.style.backgroundColor = "#99ff99"
      } else {
        document.getElementById('result-message').innerHTML = "Name isn't long enough!"
        fullNameInput.style.backgroundColor = "#ffff99"
      }

    })

    emailInput.addEventListener('input', function() {

        if (emailInput.value.includes("@") && emailInput.value.endsWith(".com")) {
          document.getElementById('result-message').innerHTML = "Email is ok!"
          emailInput.style.backgroundColor = "#99ff99"
        } else {
          document.getElementById('result-message').innerHTML = "Email doesn't appear valid!"
          emailInput.style.backgroundColor = "#ffff99"
        }

      })

      businessNameInput.addEventListener('input', function() {

          if (businessNameInput.value[0] === businessNameInput.value[0].toUpperCase()) {
            document.getElementById('result-message').innerHTML = "Biz name is ok!"
            businessNameInput.style.backgroundColor = "#99ff99"
          } else {
            document.getElementById('result-message').innerHTML = "Biz name must start with capital letter"
            businessNameInput.style.backgroundColor = "#ffff99"
          }

        })

        userNameInput.addEventListener('input', function() {

            if (userNameInput.value.length > 4 && userNameInput.value.match(/\d/)) {
              document.getElementById('result-message').innerHTML = "Username is ok!"
              userNameInput.style.backgroundColor = "#99ff99"
            } else {
              document.getElementById('result-message').innerHTML = "Username must be at least 5 characters in length and contain one number"
              userNameInput.style.backgroundColor = "#ffff99"
            }

          })

          passwordInput.addEventListener('input', function() {

              if (passwordInput.value.length > 5) {
                document.getElementById('result-message').innerHTML = "Password is ok!"
                passwordInput.style.backgroundColor = "#99ff99";
              } else {
                document.getElementById('result-message').innerHTML = "Password must be at least 6 characters in length"
                passwordInput.style.backgroundColor = "#ffff99"
              }

            })

          verifyPasswordInput.addEventListener('input', function() {

                if (verifyPasswordInput.value ===  passwordInput.value) {
                  document.getElementById('result-message').innerHTML = "Verify Password is ok!"
                  verifyPasswordInput.style.backgroundColor = "#99ff99";
                } else {
                  document.getElementById('result-message').innerHTML = "Passwords must match"
                  verifyPasswordInput.style.backgroundColor = "#ffff99"
                }

              })

          // submitButton.addEventListener('click', function() {
          //   if (fullNameInput.style.backgroundColor === "#8BC34A" && emailInput.style.backgroundColor === "#8BC34A" && businessNameInput.style.backgroundColor === "#8BC34A" && userNameInput.style.backgroundColor === "#8BC34A" && passwordInput.style.backgroundColor === "#8BC34A" && verifyPasswordInput.style.backgroundColor === "#8BC34A") {
          //     window.location.href="yay.html"
          //   }
          // })
