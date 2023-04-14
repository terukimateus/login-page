function password() {
    var x = document.getElementById("senha");
    var icon = document.querySelector('#eye')

    if (x.type === "password") {
      x.type = "text";
      icon.classList.remove('fa-eye')
      icon.classList.add('fa-eye-slash')

    } else {
      x.type = "password";
      icon.classList.remove('fa-eye-slash')
      icon.classList.add('fa-eye')
    }
  }

  function login() {
    var login = document.querySelector('.box-login')
    var textos = document.querySelector('.box-content')
    var email = document.querySelector('#email')
    var senha = document.querySelector('#senha')

    login.style.display = "none"
  }