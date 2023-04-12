// Lấy value đã lưu từ sessionStorage rồi hiển thị ra màn hình Home
let data = sessionStorage.getItem("mail");
console.log(data);
document.write("Hello "+ data);
