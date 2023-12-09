
// Function to validate Firstname and Lastname
function validateName() {
  const fullnameInput = document.getElementById("name");
  const names = fullnameInput.value.trim().split(" ");
  const errorElement = document.getElementById("fullnameError");

  if (names.length !== 2) {
    errorElement.textContent = "Please enter both your Firstname and Lastname.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

// Function to validate Student ID
function validateStudentID() {
  const studentIDInput = document.getElementById("stuid");
  const studentIDPattern = /^\d{10}$/;
  const errorElement = document.getElementById("studentIDError");

  if (!studentIDPattern.test(studentIDInput.value)) {
    errorElement.textContent = "Please enter a 10-digit Student ID.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

// Function to validate University Email
function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailPattern = /^.+@dome\.tu\.ac\.th$/;
  const errorElement = document.getElementById("emailError");

  if (!emailPattern.test(emailInput.value)) {
    errorElement.textContent =
      "Please provide a valid university email in the format 'xxx.yyy@dome.tu.ac.th'.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

// Function to validate activity title
function validateActivity() {
  const activityInput = document.getElementById("activity");
  const errorElement = document.getElementById("activityError");

  if (activityInput.value.trim() === "" || activityInput.value === null) {
    errorElement.textContent = "Please enter an activity title.";
    return false;
  } else {
    errorElement.textContent = "";
  }
  return true;
}

function validateType() {
  const typeInput = document.getElementById("type");
  const errorElement = document.getElementById("typeError");

  if (typeInput.value === "") {
    errorElement.textContent = "Please select a type of work/activity.";
    return false;
  } else {
    errorElement.textContent = "";
  }
  return true;
}

function validateAcademicYear() {
  const academicyearInput = document.getElementById("academicyear");
  const errorElement = document.getElementById("academicyearError");

  if (academicyearInput.value === "") {
    errorElement.textContent = "Please select an academic year.";
    return false;
  } else {
    errorElement.textContent = "";
  }
  return true;
}

function validateSemester() {
  const semesterInput = document.getElementById("semester");
  const errorElement = document.getElementById("semesterError");

  if (semesterInput.value === "") {
    errorElement.textContent = "Please select a semester.";
    return false;
  } else {
    errorElement.textContent = "";
  }
  return true;
}

function validateDates() {
  const startDateInput = document.getElementById("startdate");
  const endDateInput = document.getElementById("enddate");
  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);
  const startDateError = document.getElementById("startDateError");
  const endDateError = document.getElementById("endDateError");
  if(startDateInput.value === "" || endDateInput.value === "") {
    startDateError.textContent = "Please enter a start date.";
    endDateError.textContent = "Please enter an end date.";
    return false;
  }
  // Check if the end date is later than the start date
  if (endDate <= startDate) {
    startDateError.textContent = "Start date must be earlier than the end date.";
    endDateError.textContent = "End date must be later than the start date.";
    return false;
  } else {
    startDateError.textContent = "";
    endDateError.textContent = "";
  }
  return true;
}

// Function to validate location
function validateLocation() {
  const locationInput = document.getElementById("location");
  const errorElement = document.getElementById("locationError");

  if (locationInput.value === "") {
    errorElement.textContent = "Please enter the location.";
    return false;
  } else {
    errorElement.textContent = "";
  }
  return true;
}

// Function to validate description
function validateDescription() {
  const descriptionInput = document.getElementById("description");
  const errorElement = document.getElementById("descriptionError");

  const minLength = 5; // Set your minimum length requirement
  const maxLength = 1000; // Set your maximum length requirement

  if (descriptionInput.value === "") {
    errorElement.textContent = "Please enter a description.";
    return false;
  } else if (descriptionInput.value.length < minLength || descriptionInput.value.length > maxLength) {
    errorElement.textContent = `Description must be between ${minLength} and ${maxLength} characters.`;
    return false;
  } else {
    errorElement.textContent = "";
  }
  return true;
}

// Add event listeners for input events on required fields
const nameInput = document.getElementById("name");
nameInput.addEventListener("input", validateName);

const studentIDInput = document.getElementById("stuid");
studentIDInput.addEventListener("input", validateStudentID);

const emailInput = document.getElementById("email");
emailInput.addEventListener("input", validateEmail);

const activityInput = document.getElementById("activity");
activityInput.addEventListener("input", validateActivity);

const typeInput = document.getElementById("type");
typeInput.addEventListener("change", validateType);

const academicyearInput = document.getElementById("academicyear");
academicyearInput.addEventListener("change", validateAcademicYear);

const semesterInput = document.getElementById("semester");
semesterInput.addEventListener("change", validateSemester);

const startDateInput = document.getElementById("startdate");
startDateInput.addEventListener("input", validateDates);

const endDateInput = document.getElementById("enddate");
endDateInput.addEventListener("input", validateDates);

const locationInput = document.getElementById("location");
locationInput.addEventListener("input", validateLocation);

const descriptionInput = document.getElementById("description");
descriptionInput.addEventListener("input", validateDescription);

const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();

// Function to clear the form
function clearForm() {
  // Clear input values
  document.getElementById("name").value = "";
  document.getElementById("stuid").value = "";
  document.getElementById("email").value = "";
  document.getElementById("activity").value = "";
  document.getElementById("type").value = "";
  document.getElementById("academicyear").value = "";
  document.getElementById("semester").value = "";
  document.getElementById("startdate").value = "";
  document.getElementById("enddate").value = "";
  document.getElementById("location").value = "";
  document.getElementById("description").value = "";

  // Clear error messages
  document.getElementById("fullnameError").textContent = "";
  document.getElementById("studentIDError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("activityError").textContent = "";
  document.getElementById("typeError").textContent = "";
  document.getElementById("academicyearError").textContent = "";
  document.getElementById("semesterError").textContent = "";
  document.getElementById("startDateError").textContent = "";
  document.getElementById("endDateError").textContent = "";
  document.getElementById("locationError").textContent = "";
  document.getElementById("descriptionError").textContent = "";
}

function submitForm() {
  // Check if all required fields are filled
  if (!validateName() || 
  !validateStudentID() || 
  !validateEmail() || 
  !validateActivity() || 
  !validateType() || 
  !validateAcademicYear() || 
  !validateSemester() || 
  !validateDates() ||
  !validateLocation() ||
  !validateDescription()
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  // Extract form values
  const name = document.getElementById("name").value;
  const stuid = document.getElementById("stuid").value;
  const email = document.getElementById("email").value;
  const activity = document.getElementById("activity").value;
  const type = document.getElementById("type").value;
  const academicyear = document.getElementById("academicyear").value;
  const semester = document.getElementById("semester").value;
  const startdate = document.getElementById("startdate").value.replace("T", " ");
  const enddate = document.getElementById("enddate").value.replace("T", " ");
  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;
  // Generate alert message
  const alertMessage = `
    Firstname and Lastname: ${name}
    Student ID: ${stuid}
    University Email: ${email}
    Work/Activity Title: ${activity}
    Type of Work/Activity: ${type}
    Academic Year: ${academicyear}
    Semester: ${semester}
    Start Date/Time: ${startdate}
    End Date/Time: ${enddate}
    Location: ${location}
    Description: ${description}
  `;

  // Display alert message
  alert(alertMessage);

  // Generate output HTML 
const outputHtml = `
<div class="outputdecoration" class="form-group">
  <hr><br>
  <h1><b>Activityname:</b> ${activity}</h1>
  <h3><b>Activity Details:</b></h3>
  <br>
  <p><b>Activity type:</b> ${type}</p>
  <p><b>Description:</b> ${description}</p>
  <p><b>Place:</b> ${location}</p>
  <p><b>Academic year:</b> ${academicyear} <b>semester:</b> ${semester}</p>
  <p><b>Acticity Duration:</b> from ${startdate}  to  ${enddate}</p>
  <p><b>Name:</b> ${name}</p>
  <p><b>StudentID:</b> ${stuid}</p>
  <p><b>StudentEmail:</b> ${email}</p><br>
  Form submitted on: ${formattedDate}
  <hr>
</div>
`;

  // Display output in the output div
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += outputHtml;

  // Clear the form after submission
  clearForm();
}
//Add change theme function (dark mode and light mode)
const body = document.querySelector('body');
const toggle = document.getElementById("toggle");
const topic = document.querySelector(".Member-topic");
const Bar = document.querySelector(".bar");
toggle.onclick = function changeTheme(){
  toggle.classList.toggle('active');//element.classList.add/remove/toggle
  body.classList.toggle('active');
  topic.classList.toggle('active');
  Bar.classList.toggle('active');
}

function changeLanguage(language) {
  // Get all form labels
  const labels = document.querySelectorAll("form label");

  // Get the submit button
  const submitButton = document.querySelector("button[type='button']");

  // Change form labels based on the selected language
  for (const label of labels) {
    const labelText = label.textContent;

    if (language === "thai") {
      if (labelText === "Name:") {
        label.textContent = "ชื่อ-นามสกุล";
      } else if (labelText === "Student ID:") {
        label.textContent = "รหัสประจำตัวนักศึกษา";
      } else if (labelText === "University Email:") {
        label.textContent = "อีเมลมหาวิทยาลัย";
      } else if (labelText === "Work/Activity Title:") {
        label.textContent = "ชื่อกิจกรรม";
      } else if (labelText === "Type of Work/Activity:") {
        label.textContent = "ประเภทกิจกรรม";
      } else if (labelText === "Academic Year:") {
        label.textContent = "ปีการศึกษา";
      } else if (labelText === "Semester:") {
        label.textContent = "ภาคการศึกษา";
      } else if (labelText === "Start Date/Time:") {
        label.textContent = "วันที่และเวลาเริ่มต้นกิจกรรม";
      } else if (labelText === "End Date/Time:") {
        label.textContent = "วันที่และเวลาสิ้นสุดกิจกรรม";
      } else if (labelText === "Location:") {
        label.textContent = "สถานที่จัดกิจกรรม";
      } else if (labelText === "Description:") {
        label.textContent = "รายละเอียดกิจกรรม";
      }
    } else if (language === "english") {
      if (labelText === "ชื่อ-นามสกุล") {
        label.textContent = "Name:";
      } else if (labelText === "รหัสประจำตัวนักศึกษา") {
        label.textContent = "Student ID:";
      } else if (labelText === "อีเมลมหาวิทยาลัย") {
        label.textContent = "University Email:";
      } else if (labelText === "ชื่อกิจกรรม") {
        label.textContent = "Work/Activity Title:";
      } else if (labelText === "ประเภทกิจกรรม") {
        label.textContent = "Type of Work/Activity:";
      } else if (labelText === "ปีการศึกษา") {
        label.textContent = "Academic Year:";
      } else if (labelText === "ภาคการศึกษา") {
        label.textContent = "Semester:";
      } else if (labelText === "วันที่และเวลาเริ่มต้นกิจกรรม") {
        label.textContent = "Start Date/Time:";
      } else if (labelText === "วันที่และเวลาสิ้นสุดกิจกรรม") {
        label.textContent = "End Date/Time:";
      } else if (labelText === "สถานที่จัดกิจกรรม") {
        label.textContent = "Location:";
      } else if (labelText === "รายละเอียดกิจกรรม") {
        label.textContent = "Description:";
      }
    }
  }
  // Change submit button text based on the selected language
  if (language === "thai") {
    submitButton.textContent = "บันทึกข้อมูล";
  } else if (language === "english") {
    submitButton.textContent = "Submit";
  }
}