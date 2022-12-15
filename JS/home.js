// Lấy value đã lưu từ sessionStorage rồi hiển thị 
let data = sessionStorage.getItem("mail");
console.log(data);
document.write("Hello "+ data);