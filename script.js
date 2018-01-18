
let fullNameInput = document.forms.myForm["full-name"];
let emailInput = document.forms.myForm["email"];
let businessNameInput = document.forms.myForm["business-name"];
let userNameInput = document.forms.myForm["user-name"];
let passwordInput = document.forms.myForm["password"];
let verifyPasswordInput = document.forms.myForm["verify-password"];


fullNameInput.addEventListener('input', function() {

    if (fullNameInput.value.length > 3) {
      document.getElementById('result-message').innerHTML = "Name is ok!"
    }

  })

  emailInput.addEventListener('input', function() {

      if (emailInput.value.length > 3) {
        document.getElementById('result-message').innerHTML = "Email is ok!"
      }

    })

    businessNameInput.addEventListener('input', function() {

        if (businessNameInput.value.length > 3) {
          document.getElementById('result-message').innerHTML = "Biz Name is ok!"
        }

      })

      userNameInput.addEventListener('input', function() {

          if (userNameInput.value.length > 3) {
            document.getElementById('result-message').innerHTML = "Username is ok!"
          }

        })

        passwordInput.addEventListener('input', function() {

            if (passwordInput.value.length > 3) {
              document.getElementById('result-message').innerHTML = "Password is ok!"
            }

          })

        verifyPasswordInput.addEventListener('input', function() {

              if (verifyPasswordInput.value.length > 3) {
                document.getElementById('result-message').innerHTML = "Verify Password is ok!"
              }

            })
