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

  if (activityInput.value === "") {
    errorElement.textContent = "Please enter an activity title.";
    return false;
  } else {
    errorElement.textContent = "";
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

  if (descriptionInput.value === "") {
    errorElement.textContent = "Please enter a description.";
    return false;
  } else {
    errorElement.textContent = "";
  }
  return true;
}

function submitForm() {
  // Check if all required fields are filled
  if (
    !validateName() ||
    !validateStudentID() ||
    !validateEmail() ||
    !validateActivity() ||
    !validateLocation() ||
    !validateDescription()
  ) {
    alert("Please fill in all required fields.");
    return;
  }
}

// Add event listeners for input events on required fields
const nameInput = document.getElementById("name");
nameInput.addEventListener("input", validateName);

const studentIDInput = document.getElementById("stuid");
studentIDInput.addEventListener("input", validateStudentID);

const emailInput = document.getElementById("email");
emailInput.addEventListener("input", validateEmail);

function submitForm() {
  // Check if all required fields are filled
  if (!validateName() || !validateStudentID() || !validateEmail()) {
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
  const startdate = document.getElementById("startdate").value;
  const enddate = document.getElementById("enddate").value;
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
      <h1>ชื่อกิจกรรม: ${activity}</h1>
      <h3>รายละเอียดกิจกรรม :</h3>
      <p>ประเภทกิจกรรม: ${type}</p>
      <p>คำอธิบายกิจกรรม: ${description}</p>
      <p>สถานที่: ${location}</p>
      <p>ปีการศึกษา: ${academicyear} ภาคการศึกษา: ${semester}</p>
      <p>ระยะเวลาการทำกิจกรรม: ${startdate}  ถึง  ${enddate}</p>
      <p>ชื่อนักศึกษา: ${name}</p>
      <p>รหัสนักศึกษา: ${stuid}</p>
      <p>อีเมลนักศึกษา: ${email}</p>
    </div>
  `;

  // Display output in the output div
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += outputHtml;
}