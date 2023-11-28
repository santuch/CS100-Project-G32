function submitForm() {
  // รับค่าจากฟอร์ม
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // ตรวจสอบว่าทั้งชื่อและอีเมลถูกกรอกหรือไม่
  if (name && email) {
    // สร้าง HTML สำหรับแสดงผล
    var outputHtml = "<p>ชื่อ: " + name + "</p>";
    outputHtml += "<p>อีเมล: " + email + "</p>";
    alert("ชื่อ : " + name +"\nemail : " + email);
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML += outputHtml;

    // เคลียร์ค่าในฟอร์ม
    document.getElementById("myForm").reset();

    // นำ div ลงมาด้านล่าง
    outputDiv.scrollTop = outputDiv.scrollHeight;
    } else {
      // ถ้าไม่ได้กรอกทั้งชื่อและอีเมล
      alert("กรุณากรอกทั้งชื่อและอีเมล");
    }
}