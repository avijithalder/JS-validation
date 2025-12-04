function fun() {

    const uname = document.getElementById("uname");
    const pass = document.getElementById("pass");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const cpass = document.getElementById("cpss");
    // const number = document.getElementById("number");
    // const gen = document.getElementById("gen");
    // const genderOptions = document.getElementsByName("gender");





    const citySelect = document.getElementById("selectcity");
    const errorSpan = document.getElementById("ecity");

}

// name validation
document.getElementById("fname").addEventListener('input', () => {

    let firstname = fname.value;
    let flag = 0;

    for (let i = 0; i < firstname.length; i++) {
        if (firstname.length === 0) {
            continue;
        }
        else if (firstname[0] >= 'A' && firstname[0] <= 'Z') {

            continue;
        } else {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        document.getElementById("efname").innerHTML = "Start with Capital letter";
        document.getElementById("efname").style.color = 'red';
    } else {
        document.getElementById("efname").innerHTML = " ";
    }

    // if (firstname.length === 0) {

    //     document.getElementById("efname").innerHTML = " ";

    // } else if (firstname[0] >= 'A' && firstname[0] <= 'Z') {

    //     document.getElementById("efname").innerHTML = " ";

    // } else {

    //     document.getElementById("efname").innerHTML = "Start with Capital letter";
    //     document.getElementById("efname").style.color = 'red';
    // }
});

//last name validation
document.getElementById("lname").addEventListener('input', () => {

    let lastname = lname.value;

    if (lastname.length === 0) {

        document.getElementById("elname").innerHTML = " ";

    } else if (lastname[0] >= "A" && lastname[0] <= "Z") {

        document.getElementById("elname").innerHTML = " ";

    } else {

        document.getElementById("elname").innerHTML = "Start with Capital letter";
        document.getElementById("elname").style.color = 'red';
    }


});




// usename Validtion 
document.getElementById("uname").addEventListener('input', () => {

    let username = uname.value;
    let flag = 0;

    for (let i = 0; i < username.length; i++) {

        if (username[i] >= 'A' && username[i] <= 'Z') {
            continue;
        } else if (username[i] >= 'a' && username[i] <= 'z') {
            continue;
        } else if (username[i] >= '0' && username[i] <= '9') {
            continue;
        } else {
            flag = 1;
            break;
        }

    }

    if (flag == 1) {

        document.getElementById("euname").innerHTML = "Usename don't contain any Special Character";
        document.getElementById("euname").style.color = 'red';
        event.preventDefault();

    } else if (username.length === 0) {
        document.getElementById("euname").innerHTML = "Usename Required";
        document.getElementById("euname").style.color = 'red';
    }
    else {
        document.getElementById("euname").innerHTML = " ";
    }

});
// Username Required 
document.getElementById("myForm").addEventListener('submit', () => {
    if (document.getElementById("uname").value === "") {
        document.getElementById("euname").innerHTML = "Username Required";
        document.getElementById("euname").style.color = 'red';
        event.preventDefault(); // form submit রোধ করে
    }
})




// Email varification
document.getElementById("email").addEventListener('input', () => {

    let emailv = email.value;
    let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailv.length === 0) {
        document.getElementById("eemail").innerHTML = " ";
    } else if (emailregex.test(emailv)) {
        document.getElementById("eemail").innerHTML = " ";

    } else {
        document.getElementById("eemail").innerHTML = "Wrong Email address";
        document.getElementById("eemail").style.color = 'red';
    }

});
//Email Rrequired
document.getElementById("myForm").addEventListener('submit', () => {
    if (document.getElementById("email").value === "") {

        document.getElementById("eemail").innerHTML = "Email Required";
        document.getElementById("eemail").style.color = 'red';
        event.preventDefault(); // form submit রোধ করে
    }
});




// Phone number validaiotn
const number = document.getElementById("number");

document.getElementById("number").addEventListener('input', () => {


    let num = number.value;

    const numPattern = /^\d{11}$/;

    if (num.length === 0) {
        document.getElementById("enumber").innerHTML = " ";
    } else if (numPattern.test(num) && num.startsWith("01")) {

        document.getElementById("enumber").innerHTML = "Done";
        document.getElementById("enumber").style.color = "green";
    } else {
        document.getElementById("enumber").innerHTML = "Invalid Phone number!"
        document.getElementById("enumber").style.color = 'red';
        event.preventDefault();
    }
});
//Phone number required
document.getElementById("myForm").addEventListener('submit', () => {

    if (document.getElementById("number").value === "") {
        document.getElementById("enumber").innerHTML = "Phone number is required";
        document.getElementById("enumber").style.color = 'red';
        event.preventDefault(); // form submit রোধ করে
    } else {
        document.getElementById("enumber").innerHTML = " ";
    }
});




// password validation 
document.getElementById("pass").addEventListener('input', () => {

    password = pass.value;

    let uppercase = false;
    let lowercase = false;
    let number = false;
    let special = false;

    for (let i = 0; i < password.length; i++) {

        if (password[i] >= 'A' && password[i] <= 'Z') {
            uppercase = true;
        } else if (password[i] >= 'a' && password[i] <= 'z') {
            lowercase = true;
        } else if (password[i] >= '0' && password[i] <= '9') {
            number = true;
        } else {
            special = true;
        }
    }
    if (password.length === 0) {
        document.getElementById("epass").innerHTML = " ";
    } else if (!uppercase) {
        document.getElementById("epass").innerHTML = "At least one upper case letter";
        document.getElementById("epass").style.color = 'red';
        event.preventDefault();
    } else if (!lowercase) {
        document.getElementById("epass").innerHTML = "At least one Lower case letter";
        document.getElementById("epass").style.color = 'red';
    } else if (!number) {
        document.getElementById("epass").innerHTML = "At least one number";
        document.getElementById("epass").style.color = 'red';
    } else if (!special) {
        document.getElementById("epass").innerHTML = "At least one Special Character";
        document.getElementById("epass").style.color = 'red';
    } else if (password.length < 6) {
        document.getElementById("epass").innerHTML = "Password Length must be 6 length";
        document.getElementById("epass").style.color = 'red';
    }
    else {
        document.getElementById("epass").innerHTML = "Done";
        document.getElementById("epass").style.color = "green";
    }
});

// password match check!
document.getElementById("cpss").addEventListener('input', () => {

    const pass = document.getElementById("pass");
    const cpass = document.getElementById("cpss");

    let confirmpass = cpass.value;
    let password = pass.value;

    if (confirmpass.length === 0) {

        document.getElementById("ecpass").innerHTML = " ";

    } else if (password === confirmpass) {

        document.getElementById("ecpass").innerHTML = "Password match";
        document.getElementById("ecpass").style.color = 'green';

    } else {

        document.getElementById("ecpass").innerHTML = "Password didn't match!";
        document.getElementById("ecpass").style.color = 'red';
    }
});



// Gender Requirled
const genderOptions = document.getElementsByName("gender");

document.getElementById("myForm").addEventListener("submit", (event) => {

    let flag = 0;

    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) { // 🔹 checked ব্যবহার করতে হবে
            flag = 1;
            break;
        }
    }

    if (flag == 0) {
        document.getElementById("egender").innerHTML = "Gender is required";
        document.getElementById("egender").style.color = "red";
        event.preventDefault(); // form submit থামিয়ে দেয়
    } else {
        document.getElementById("egender").innerHTML = "";
    }
});

// 🔹 যদি কেউ date সিলেক্ট করে, error মুছে দাও ✅

for (let i = 0; i < genderOptions.length; i++) {

    genderOptions[i].addEventListener("change", () => {

        document.getElementById("egender").innerHTML = "";
    });
}





// option validaiotn
document.getElementById("selectcity").addEventListener('input', () => {
    if (document.getElementById("selectcity").value === "") {
        document.getElementById("ecity").innerText = "Please select your city";
    } else {
        document.getElementById("ecity").innerText = "";
    }
});
//Select Option Required
// form submit validation (assuming your form has id="myForm")
document.getElementById("myForm").addEventListener("submit", () => {

    if (document.getElementById("selectcity").value === "") {

        document.getElementById("ecity").innerText = "Please select your city";
        document.getElementById("ecity").style.color = 'red';
        event.preventDefault(); // form submit রোধ করে

    }
});




// Birth date Validion
const dobInput = document.getElementById("dob");

// 🔹 আজকের তারিখ পর্যন্তই সিলেক্ট করা যাবে
const today = new Date().toISOString().split("T")[0];

dobInput.setAttribute("max", today);

// 🔹 সাবমিট করার সময় ভ্যালিডেশন
document.getElementById("myForm").addEventListener("submit", (event) => {
    const dobValue = dobInput.value;

    // যদি কিছু না সিলেক্ট করে
    if (dobValue === "") {
        document.getElementById("edob").innerHTML = "Please select your date of birth.";
        document.getElementById("edob").style.color = "red";
        event.preventDefault();
        return;
    }

    // সব ঠিক থাকলে
    document.getElementById("edob").innerHTML = "";
});

// 🔹 যদি কেউ date সিলেক্ট করে, error মুছে দাও ✅

dobInput.addEventListener('input',()=>{
    if(dobInput.value !== ""){
        document.getElementById("edob").innerHTML = " ";
    }
});











// const dobInput = document.getElementById("dob");
// const errorMsg = document.getElementById("edob");
// const form = document.getElementById("myForm");

// // 🔹 ভবিষ্যতের তারিখ বন্ধ করতে max সেট করা
// const today = new Date();
// dobInput.setAttribute("max", today.toISOString().split('T')[0]);

// // 🔹 ইনপুটে চেক করা (টাইপ করার সময়)
// dobInput.addEventListener("input", () => {
//     validateDOB();
// });

// // 🔹 সাবমিট করার সময়ও চেক করা
// form.addEventListener("submit", (event) => {
//     if (!validateDOB()) {
//         event.preventDefault(); // ভুল থাকলে সাবমিট বন্ধ করবে
//     }
// });

// function validateDOB() {
//     const dobValue = dobInput.value.trim();
//     const currentDate = new Date();

//     if (dobValue === "") {
//         errorMsg.innerHTML = "Date of birth is required.";
//         errorMsg.style.color = "red";
//         return false;
//     }

//     const birthDate = new Date(dobValue);
//     if (birthDate > currentDate) {
//         errorMsg.innerHTML = "Future date not allowed.";
//         errorMsg.style.color = "red";
//         return false;
//     }

//     // ✅ সব ঠিক থাকলে
//     errorMsg.innerHTML = "";
//     return true;
// }

// Age calculation
// let age = currentDate.getFullYear() - birthDate.getFullYear();
// let monthDiff = currentDate.getMonth() - birthDate.getMonth();
// if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
//     age--;
// }

// if (age < 18) {
//     document.getElementById("edob").innerHTML = "You must be at least 18 years old.";
//     document.getElementById("edob").style.color = 'red';
// } else {
//     document.getElementById("edob").innerHTML = "";
// }
// });

