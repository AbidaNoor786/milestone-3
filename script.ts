// Get references to the form and disply area
const Form = document.getElementById("resume-form") as HTMLFormElement;
const ResumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handile form submission

Form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); 
    // prevent page reload

    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value

    const email = (document.getElementById('email') as HTMLInputElement).value

    const phone = (document.getElementById('phone') as HTMLInputElement).value

    const education = (document.getElementById('education') as HTMLInputElement).value

    const experience = (document.getElementById('experience') as HTMLInputElement).value

    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate the resume content dynamically

    const resumehtml = `
    <h2><b>Resume</b></h2>
    <h3><b>personal Information</b></h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experiance</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
    `;
    // Display the generated resume
    if(ResumeDisplayElement){
        ResumeDisplayElement.innerHTML = resumehtml;  
    }else{
        console.error('The resume display element is missing.');
    }
} );
