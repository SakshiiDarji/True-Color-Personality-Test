 /*Using this java file in the login page to check functionalities*/

document.getElementById("d1").style.display = "none";
        document.getElementById("d2").style.display = "none";

     //created a function  to get username and password
        function login() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            //it will redirect to test page when the user enter the button "login here" 
            if (username.length === 0 || password.length === 0) {
                showDiv2();
            } else {
                window.location = "questionner.html";
                return;
            }
        }

        function generatePassword() {
            var passwordField = document.getElementById('password');
            var initialPassword = passwordField.value;
        
            var randomPassword = Math.random().toString(36).slice(2);
            passwordField.value = randomPassword;
        
            passwordField.removeAttribute('readonly');
        
            passwordField.addEventListener('input', function () {
                if (passwordField.value !== initialPassword) {
                    showWrongPasswordMessage();
                }
            });
        }
         
        function showWrongPasswordMessage() {
            alert("Changing the generated password is not allowed.");
            // You can also update the UI to display the error message in a specific way
        }

        //created a function to create random password
        //function generatePassword() {
          //  document.getElementById('password').value = Math.random().toString(36).slice(2);
        //}

        function showDiv2() {
            document.getElementById("d1").style.display = "block";
        }
