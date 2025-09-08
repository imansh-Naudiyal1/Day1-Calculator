let showBtn = document.getElementById('showBtn');

showBtn.addEventListener('click', function showInfo() {
    
    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let address = document.getElementById('address').value.trim();
    
     if (!name || name.length < 2) {
        alert('Please enter a valid name (at least 2 characters)!');
        return;
    }else if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert('Name should contain only letters and spaces!');
        return;
    }
    
    if (!age || isNaN(age) || age < 1 || age > 120) {
        alert('Please enter a valid age (number between 1-120)!');
        return;
    }else if (!Number.isInteger(Number(age))) {
        alert('Age should be an integer!');
        return;
    }
    

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        alert('Please enter a valid email address (example: abc@gmail.com)!');
        return;
    }
    
    if (phone && (isNaN(phone) || phone.length < 10)) {
        alert('Phone number should be at least 10 digits!');
        return;
    }

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Submitted Information:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
    `;
    
});