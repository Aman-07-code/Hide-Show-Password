let eyeicons = document.getElementById('eye-icons');
let password = document.getElementById('password');

eyeicons.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicons.src = "./eye-icons/eye-open.png"
    }else{
        password.type = "password";
        eyeicons.src = "./eye-icons/eye-close.png"
    }
}