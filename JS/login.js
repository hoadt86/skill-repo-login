function loginByUserPassword() {

    // Fake sẵn 1 màng các tài khoản user
    let user = [
        { mail: 'Honghanh@gmail.com', password: '11111111' },
        { mail: 'doccocaubai@gmail.com', password: '22222222' },
        { mail: 'marukochan@gmail.com', password: '33333333' }

    ];
    
    let inputEmail = document.getElementById("email").value;
    const emailRegex = /\S+@\S+\.\S+/;
    let inputPassword = document.getElementById("password").value;

    // Lưu giá trị inputUser vào sesionStorage
    sessionStorage.setItem('mail', inputEmail);

    // validate email
        //1. Chưa nhập email
    if (inputEmail == null || inputEmail == '') {
        addErrorClass("email", "error");
        showErrorMessageByElementId("messageErrorEmail", "Chưa nhập email");

        //2.Email không đúng định dạng
    } else if (!inputEmail.match(emailRegex)) {
        addErrorClass("email", "error")
        showErrorMessageByElementId("messageErrorEmail", "Email không đúng định dạng");

    } else {
        document.getElementById("messageErrorEmail").style.display = "none";
        document.getElementById("email").style.border = '1px solid #ccc';
    }

    //validate password

        //3.Chưa nhập Password
    if (inputPassword == null || inputPassword == '') {
        addErrorClass("password", "error")
        showErrorMessageByElementId("messageErrorPassword", "Chưa nhập Password");

        //4. Password không được nhập quá 20 ký tự
    } else if (inputPassword.length > 20) {
        addErrorClass("password", "error");
        showErrorMessageByElementId("messageErrorPassword", "Password không được nhập quá 20 ký tự");

    } else {
        document.getElementById("messageErrorPassword").style.display = "none";
        addErrorClass("password", "normal");
    }


    //Check email password is correct?
    if ((document.getElementById("messageErrorEmail").style.display == "none") && (document.getElementById("messageErrorPassword").style.display == "none")) {
        for (i = 0; i < user.length; i++) {
                //email và password đúng
            if ((inputEmail == user[i].mail) && (inputPassword == user[i].password)) {
                document.getElementById("messageErrorEmailAndPassword").style.display = "none";
                //sau 0.5s redirect sang trang home
                setTimeout(function () {
                    window.location = '../html/home.html';
                }, 500);

                //5. Thông tin Email hoặc Password chưa đúng
            } else {
                showErrorMessageByElementId("messageErrorEmailAndPassword", "Thông tin Email hoặc Password chưa đúng");
            }
        }
    }
}

function showErrorMessageByElementId(elementId, message) {
    document.getElementById(elementId).innerHTML = message;
    }

function addErrorClass(elementID, className){
document.getElementById(elementID).classList.add(className);
}