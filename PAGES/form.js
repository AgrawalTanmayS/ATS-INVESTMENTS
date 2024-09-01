// On page load, load stored data if available
window.onload = function () {
    loadStoredData();
    if (!checkFormSubmission()) {
        document.getElementById('submit-button').addEventListener('click', submitForm);
    }
};

// Function to handle form submission
function submitForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Check if the form has already been submitted this month
    if (checkFormSubmission()) {
        return; // Exit if form is already submitted
    }

    // Get form values
    const fullName = document.getElementById('full-name').value;
    const dob = document.getElementById('dob').value;
    const pan = document.getElementById('pan').value;
    const tin = document.getElementById('tin').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const citizenship = document.getElementById('citizenship').value;
    const employmentStatus = document.getElementById('employment-status').value;
    const income = document.getElementById('income').value;
    const objectives = document.getElementById('objectives').value;
    const risk = document.getElementById('risk').value;
    const horizon = document.getElementById('horizon').value;
    const experience = document.getElementById('experience').value;
    const knowledge = document.getElementById('knowledge').value;
    const accountType = document.getElementById('account-type').value;
    const communicationMethod = document.getElementById('communication-method').value;
    const communicationFrequency = document.getElementById('communication-frequency').value;

    // Validate inputs
    if (!fullName || !dob || !pan || !address || !phone || !email || !citizenship || !employmentStatus || !income || !objectives || !risk || !horizon || !experience || !knowledge || !accountType ) {
        alert("Please fill in all required fields and accept the terms and conditions.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!isValidPAN(pan)) {
        alert("Please enter a valid PAN.");
        return;
    }

    if (!isValidDOB(dob)) {
        alert("You must be at least 18 years old.");
        return;
    }

    // Gather form data
    const formData = {
        fullName: fullName,
        dob: dob,
        pan: pan,
        tin: tin,
        address: address,
        phone: phone,
        email: email,
        citizenship: citizenship,
        employmentStatus: employmentStatus,
        income: income,
        objectives: objectives,
        risk: risk,
        horizon: horizon,
        experience: experience,
        knowledge: knowledge,
        accountType: accountType,
        communicationMethod: communicationMethod,
        communicationFrequency: communicationFrequency
    };

    console.log(formData);

    // Confirm submission
    const userConfirmed = confirm("Are you sure you want to submit the form with the provided data?\n\n");

    if (userConfirmed) {
        // Send email
        sendEmail(formData);

        updateLastSubmissionDate();
        // Display success message
        alert('Your form has been submitted successfully.');

        // Clear form data
        clearFormData();
    } else {
        console.log("Form submission canceled by the user.");
    }
}

// Function to send email using EmailJS
function sendEmail(formData) {
    // Initialize EmailJS
    emailjs.init("PoJHYhFoWadyJZ-43"); // Replace with your EmailJS user ID
    
    const templateParams = {
        fullName: formData.fullName,
        dob: formData.dob,
        pan: formData.pan,
        tin: formData.tin,
        address: formData.address,
        phone: formData.phone,
        email: formData.email,
        citizenship: formData.citizenship,
        employmentStatus: formData.employmentStatus,
        income: formData.income,
        objectives: formData.objectives,
        risk: formData.risk,
        horizon: formData.horizon,
        experience: formData.experience,
        knowledge: formData.knowledge,
        accountType: formData.accountType,
        communicationMethod: formData.communicationMethod,
        communicationFrequency: formData.communicationFrequency
    };

    emailjs.send('service_0hdvexm', 'template_gdljo0f', templateParams) // Replace with your service ID and template ID
        .then(function (response) {
            console.log("Email sent successfully:", response);
        }, function (error) {
            console.error("Email send failed:", error);
        });
}

// Function to clear form data
function clearFormData() {
    document.getElementById('full-name').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('pan').value = '';
    document.getElementById('tin').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('citizenship').value = '';
    document.getElementById('employment-status').value = '';
    document.getElementById('income').value = '';
    document.getElementById('objectives').value = '';
    document.getElementById('risk').value = '';
    document.getElementById('horizon').value = '';
    document.getElementById('experience').value = '';
    document.getElementById('knowledge').value = '';
    document.getElementById('account-type').value = '';
    document.getElementById('communication-method').value = '';
    document.getElementById('communication-frequency').value = '';

    localStorage.removeItem('formData');
}

// Function to load stored data
function loadStoredData() {
    const storedData = localStorage.getItem('formData');

    if (storedData) {
        const formData = JSON.parse(storedData);

        document.getElementById('full-name').value = formData.fullName;
        document.getElementById('dob').value = formData.dob;
        document.getElementById('pan').value = formData.pan;
        document.getElementById('tin').value = formData.tin;
        document.getElementById('address').value = formData.address;
        document.getElementById('phone').value = formData.phone;
        document.getElementById('email').value = formData.email;
        document.getElementById('citizenship').value = formData.citizenship;
        document.getElementById('employment-status').value = formData.employmentStatus;
        document.getElementById('income').value = formData.income;
        document.getElementById('objectives').value = formData.objectives;
        document.getElementById('risk').value = formData.risk;
        document.getElementById('horizon').value = formData.horizon;
        document.getElementById('experience').value = formData.experience;
        document.getElementById('knowledge').value = formData.knowledge;
        document.getElementById('account-type').value = formData.accountType;
        document.getElementById('communication-method').value = formData.communicationMethod;
        document.getElementById('communication-frequency').value = formData.communicationFrequency;
    }
}

// Helper functions for validation

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}



function isValidPAN(pan) {
    const re = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // Adjust regex according to your format
    return re.test(pan);
}

function isValidDOB(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    return birthDate <= today && isValidAge(dob);
}

function isValidAge(dob) {
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    const month = new Date().getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && new Date().getDate() < birthDate.getDate())) {
        return age - 1 >= 18;
    }
    return age >= 18;
}


// Function to check if the form has already been submitted this month
function checkFormSubmission() {
    const currentDate = new Date();
    const lastSubmissionDate = localStorage.getItem('lastSubmissionDate');

    if (lastSubmissionDate) {
        const lastDate = new Date(lastSubmissionDate);

        // Check if the last submission was in the same month and year
        if (lastDate.getFullYear() === currentDate.getFullYear() &&
            lastDate.getMonth() === currentDate.getMonth()) {
            // Disable form if already submitted
            disableForm();
            return true; // Form has already been submitted this month
        }
    }
    return false; // Form has not been submitted yet
}

// Function to update the last submission date in localStorage
function updateLastSubmissionDate() {
    const currentDate = new Date();
    localStorage.setItem('lastSubmissionDate', currentDate.toISOString());
}

// Function to disable the form
function disableForm() {
    const formElements = document.querySelectorAll('input, select, textarea, button');
    formElements.forEach(element => {
        element.disabled = true;
    });
    const message = document.createElement('p');
    message.textContent = 'You have already submitted the form this month. Please contact our team if you need to make changes.';
    message.style.color = 'red';
    document.querySelector('form').appendChild(message);
}