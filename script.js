var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //profile picture
    var profilePictureInput = document.getElementById('name');
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //** 
    var usernameElement = document.getElementById("username");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        //** 
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var education = educationElement.value;
        var phone = phoneElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //** 
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //picture url
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ?
            URL.createObjectURL(profilePictureFile) : "";
        //creat resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " alt=\"Profile Picture\" class=\"ProfilePicture\">") : '', "\n    <p><strong>name</strong> <span id=\"edit-name\"class=\"editable\"> ").concat(name_1, " </span> </p>\n    <p><strong>email</strong> <span id=\"edit-email\"class=\"editable\"> ").concat(email, " </span>  </p>\n    <p><strong>phone</strong> <span id=\"edit-phone\"class=\"editable\"> ").concat(phone, "</span>  </p>\n    <h3>Education</h3>\n    <p id=\"edit-education\"class=\"editable\">").concat(education, "</p>\n\n    <h3>Experienc</h3>\n    <p id=\"edit-experienc\"class=\"editable\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p id=\"edit-skills\"class=\"editable\">").concat(skills, "</p>\n    ");
        //** */
        var downloadLink = document.createElement("a");
        downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download your 2024 resume';
        //Disply the resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error('the resume output element are missing');
        }
    }
    else {
        console.error('one or more output element are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || '';
            //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'span') {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add('editing.input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'input';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
