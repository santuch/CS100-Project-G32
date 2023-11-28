function submitForm() {
  // รับค่าจากฟอร์ม
  var name = document.getElementById("name").value;
  var stuid = document.getElementById("stuid").value;
  var email = document.getElementById("email").value;
  var activity = document.getElementById("activity").value;
  var type = document.getElementById("type").value;
  var academicyear = document.getElementById("academicyear").value;
  var semester = document.getElementById("semester").value;
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  var location = document.getElementById("location").value;
  var description = document.getElementById("description").value;

  // ตรวจสอบว่าทั้งชื่อและอีเมลถูกกรอกหรือไม่
  if (name && stuid && email && activity && type && academicyear && semester && startdate && enddate && location && description) {
    // สร้าง HTML สำหรับแสดงผล
    var outputHtml = "<div class=\"outputdecoration\"><h1>" + activity +"</h1>";
    outputHtml += "<h3>" + type +"</h3>";
    outputHtml += "<p>" + description +"</p>";
    outputHtml += "<p>" + location + " " + startdate + " " + enddate +"</p>";
    outputHtml += "<p>" + email +"</p>"+"</div>";
    alert("Firstname and Lastname : " + name +"\nStudent ID : " + stuid +"\nUniversity Email : " + email +"\nWork/Activity Title : " 
    + activity +"\nType of Work/Activity : " + type +"\nAcademic Year : " + academicyear +"\nSemester : " + semester + "\n Start Date/Time : " 
    + startdate +"\nEnd Date/Time : " + enddate +"\nLocation : " + location +"\nDescription : " + description);
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML += outputHtml;

    // เคลียร์ค่าในฟอร์ม
    document.getElementById("myForm").reset();

    // นำ div ลงมาด้านล่าง
    outputDiv.scrollTop = outputDiv.scrollHeight;
    } else {
      // ถ้าไม่ได้กรอกทั้งชื่อและอีเมล
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
}