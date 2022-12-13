function loginByUserPassword() {

    // Fake sẵn 1 màng các tài khoản user
    let user = [
        { mail: 'Honghanh@gmail.com', password: '11111111' },
        { mail: 'doccocaubai@gmail.com', password: '22222222' },
        { mail: 'marukochan@gmail.com', password: '33333333' }

    ];

    var inputEmail = document.getElementById("email").value;
    var checkEmailFrom = document.getElementById("email").value.indexOf('@');
    var inputPassword = document.getElementById("password").value;

    // Lưu giá trị inputUser vào sesionStorage
    sessionStorage.setItem('mail', inputEmail);

    // validate email
        //1. Chưa nhập email
    if (inputEmail == null || inputEmail == '') {
        document.getElementById("email").style.border = '1px solid red';
        document.getElementById("messageErrorEmail").innerHTML = "Chưa nhập email";

        //2.Email không đúng định dạng
    } else if (checkEmailFrom == -1) {
        document.getElementById("email").style.border = '1px solid red';
        document.getElementById("messageErrorEmail").innerHTML = "Email không đúng định dạng";

    } else {
        document.getElementById("messageErrorEmail").style.display = "none";
        document.getElementById("email").style.border = '1px solid #ccc';
    }

    //validate password

        //3.Chưa nhập Password
    if (inputPassword == null || inputPassword == '') {
        document.getElementById("password").style.border = '1px solid red';
        document.getElementById("messageErrorPassword").innerHTML = "Chưa nhập Password";

        //4. Password không được nhập quá 20 ký tự
    } else if (inputPassword.length > 20) {
        document.getElementById("password").style.border = '1px solid red';
        document.getElementById("messageErrorPassword").innerHTML = "Password không được nhập quá 20 ký tự";

    } else {
        document.getElementById("messageErrorPassword").style.display = "none";
        document.getElementById("password").style.border = '1px solid #ccc';
    }


    //Check email password is correct?
    if ((document.getElementById("messageErrorEmail").style.display == "none") && (document.getElementById("messageErrorPassword").style.display == "none")) {
        for (i = 0; i < user.length; i++) {
                //email và password đúng
            if ((inputEmail == user[i].mail) && (inputPassword == user[i].password)) {
                document.getElementById("messageErrorEmailAndPassword").style.display = "none";
                console.log(document.getElementById("messageErrorEmailAndPassword").style.display);
                //sau 0.5s redirect sang trang home
                setTimeout(function () {
                    window.location = '../html/home.html';
                }, 500);

                //5. Thông tin Email hoặc Password chưa đúng
            } else {
                document.getElementById("messageErrorEmailAndPassword").innerHTML = "Thông tin Email hoặc Password chưa đúng";
            }
        }
    }
}