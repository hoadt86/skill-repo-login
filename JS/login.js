function loginByUserPassword() {
    // validate email
    var inputEmail = document.getElementById("email").value;
    var checkEmailFrom = document.getElementById("email").value.indexOf('@');
    console.log(inputEmail);

    if (inputEmail == null || inputEmail == '') {
        document.getElementById("email").style.border = '1px solid red';
        document.getElementById("messageErrorEmail").innerHTML = "Chưa nhập email";

    } else if (checkEmailFrom == -1) {
        document.getElementById("email").style.border = '1px solid red';
        document.getElementById("messageErrorEmail").innerHTML = "Email không đúng định dạng";

    } else {
        document.getElementById("messageErrorEmail").style.display = "none";
        document.getElementById("email").style.border = '1px solid #ccc';
    }

    //validate password
    var inputPassword = document.getElementById("password").value;
    console.log(inputPassword);
    console.log(inputPassword.length);

    if (inputPassword == null || inputPassword == '') {
        document.getElementById("password").style.border = '1px solid red';
        document.getElementById("messageErrorPassword").innerHTML = "Chưa nhập Password";

    } else if (inputPassword.length > 20) {
        document.getElementById("password").style.border = '1px solid red';
        document.getElementById("messageErrorPassword").innerHTML = "Password không được nhập quá 20 ký tự";

    } else {
        document.getElementById("messageErrorPassword").style.display = "none";
        document.getElementById("password").style.border = '1px solid #ccc';
    }


    //Check email pa
    let user = [
        { mail: 'Honghanh@gmail.com', password: '11111111' },
        { mail: 'doccocaubai@gmail.com', password: '22222222' },
        { mail: 'marukochan@gmail.com', password: '33333333' }

    ];


    var inputEmail = document.getElementById("email").value;
    var inputPassword = document.getElementById("password").value;
    for (i = 0; i < user.length; i++) {
        if ((inputEmail == user[i].mail) && (inputPassword == user[i].password)) {
            console.log("oooooooooooooo")
            document.getElementById("messageErrorEmailAndPassword").style.display = "none";
            alert("Bạn đã đăng nhập thành công")
        } else {
            console.log("aaaaaaaaaaaaaa");
            document.getElementById("messageErrorEmailAndPassword").style.display = "block";
            document.getElementById("messageErrorEmailAndPassword").innerHTML = "Thông tin Email hoặc Password chưa đúng";
        }
    }
}
