//listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();
//profile picture
const profilePictureInput = document.getElementById('name') as HTMLInputElement;
    //type assertion

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    //** 
    const usernameElement = document.getElementById(
        "username"
     ) as HTMLInputElement;

    

if (profilePictureInput && 
    nameElement &&
     emailElement &&
      phoneElement &&
       educationElement &&
        experienceElement &&
         skillsElement &&
   //** 
   usernameElement 
){

    const name = nameElement.value;
    const email = emailElement.value;
    const education = educationElement.value;
    const phone = phoneElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

//** 
const username = usernameElement.value;
const uniquePath = `resumes/${username.replace(/\s+/g,'_')}_cv.html`

//picture url
const profilePictureFile = profilePictureInput.files?.[0];
const profilePictureURL =  profilePictureFile ?
URL.createObjectURL(profilePictureFile) : "";


    //creat resume output
    const resumeOutput =`
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class="ProfilePicture">` : ''}
    <p><strong>name</strong> <span id="edit-name"class="editable"> ${name} </span> </p>
    <p><strong>email</strong> <span id="edit-email"class="editable"> ${email} </span>  </p>
    <p><strong>phone</strong> <span id="edit-phone"class="editable"> ${phone}</span>  </p>
    <h3>Education</h3>
    <p id="edit-education"class="editable">${education}</p>

    <h3>Experienc</h3>
    <p id="edit-experienc"class="editable">${experience}</p>

    <h3>Skills</h3>
    <p id="edit-skills"class="editable">${skills}</p>
    `;
//** */
const downloadLink = document.createElement("a")
downloadLink.href="data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent = 'Download your 2024 resume'

    //Disply the resume output
    const resumeOutputElement = document.getElementById('resumeOutput')
if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
makeEditable();
} else {
    console.error('the resume output element are missing')
}
} else {
    console.error('one or more output element are missing')
} 

})
function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
editableElements.forEach(element => {
element.addEventListener('click', function() { 
const currentElement = element as HTMLElement;
const currentValue = currentElement.textContent || '';
//replace content
if(currentElement.tagName === "p"|| currentElement.tagName === 'span') {
    const input = document.createElement("input")
    input.type = "text"
    input.value = currentValue
    input.classList.add('editing.input') 

    input.addEventListener('blur', function (){
        currentElement.textContent = input.value;
        currentElement.style.display = 'input'
        input.remove()
    })

    currentElement.style.display = 'none'
    currentElement.parentNode?.insertBefore(input, currentElement)
    input.focus()
}
})
}) 
}















