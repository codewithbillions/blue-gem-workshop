const nam = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordRegEx = new RegExp(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);

const phoneNumber = document.getElementById("phoneNumber");
const phoneRegEx = new RegExp(/^[0-9]{11}$/);

nam.addEventListener("change", function() {
    if(nam.value.length < 5) {
        alert("the name must be atleast 5 characters");
        nam.setAttribute("class", "form-control is-invalid");
        nam.focus();
    }
})

email.addEventListener("change", function () {
    if(!email.value.includes("@")) {
        alert("this field should be a valid email");
        email.setAttribute("class", "form-control is-invalid");
        email.focus();
    }
})

password.addEventListener("change", function () {
    if (!passwordRegEx.test(password.value)) {
        alert("password should contain atleast one special character");
        password.setAttribute("class", "form-control is-invalid");
        password.focus();
    }

    if(password.value.length < 8) {
        alert("password must be altleast 8 characters");
        password.setAttribute("class", "form-control is-invalid");
        password.focus();
    }
})

phoneNumber.addEventListener("change", function (){
    if (phoneNumber.value.length != 11) {
        alert("the number should contain 11 digits")
        phoneNumber.setAttribute("class", "form-control is-invalid");
        phoneNumber.focus();
    }

    if(!phoneRegEx.test(phoneNumber.value)) {
        alert("the phone number should contain only digits");
        phoneNumber.setAttribute("class", "form-control is-invalid");
        phoneNumber.focus();
    }
})