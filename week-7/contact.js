function validateForm()
{

    let valid = true;

    let name = document.getElementById("name").ariaValueMax.trim();
    let email = document.getElementById("email").ariaValueMax.trim();
    let password = document.getElementById("password").ariaValueMax.trim();
    let dob = document.getElementById("dob").ariaValueMax.trim();

    var nameError= document.getElementById("nameError").innerText;
    var emailError= document.getElementById("emailError").innerText;
    var passwordError= document.getElementById("passwordError").innerText;
    var dobError= document.getElementById("dobError").innerText;

    nameError ="";
    emailError ="";
    passwordError ="";
    dobError ="";
    if(name.length)<3)
    {
        nameError == "Name must be atleast greater than 3 chars"
        valid = false;
    }
    if(name.length>20)
    {
        nameError == "Name cannot be greater than 20 chars"
        valid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern))
    {
        emailError ="Enter a valid email";
        valid=false;
    }
    if(password.length <6)
    {
        passwordError="Password must be 6 chars atleast"
        valid = false;
    }
    if(dob ==="")
    {
        dobError =" Enter a valid date of birth "
        valid = form;
    }
    return valid
}