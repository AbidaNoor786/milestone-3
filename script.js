// Get references to the form and disply area
var Form = document.getElementById("resume-form");
var ResumeDisplayElement = document.getElementById('resume-display');
// Handile form submission
Form.addEventListener('submit', function (event) {
    event.preventDefault();
    // prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumehtml = "\n    <h2><b>Resume</b></h2>\n    <h3><b>personal Information</b></h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experiance</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (ResumeDisplayElement) {
        ResumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
