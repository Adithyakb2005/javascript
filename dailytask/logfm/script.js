function valid() {
    
    document.getElementById("phno_error").innerHTML = "";
    document.getElementById("email_error").innerHTML = "";
    document.getElementById("pincode_error").innerHTML = "";

    
    const name = document.getElementById("name").value;
    const phno = document.getElementById("phno").value;
    const email = document.getElementById("email").value;
    const pincode = document.getElementById("pincode").value; 
    let isValid = true;

    
    if (!name) {
        alert('Please enter your name.');
        isValid = false;
    }

    
    const phonePattern = /^[6-9][0-9]{9}$/;
    if (!phonePattern.test(phno)) {
        document.getElementById('phno_error').textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email_error').textContent = 'Please enter a valid Email ID.';
        isValid = false;
    }

    
    const pincodePattern = /^[0-9]{6}$/;
    if (!pincodePattern.test(pincode)) {
        document.getElementById('pincode_error').textContent = 'Please enter a six-digit pincode.';
        isValid = false;
    }

    
    if (isValid) {
        alert('Form submitted successfully!');
        
    }
}
