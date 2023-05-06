
var user = [
    {
        id: 'USER1',
        username: 'admin',
        name: 'Trần Hữu Hiếu',
        password: 'admin123',
        email: 'hieudeptrai123@gmail.com',
        address: 'Phong Điền - Huế',
        sdt: "0768757110",
        role: 'admin'
    }, {
        id: 'USER2',
        username: 'hiep',
        name: 'Phạm Sông Hiệp',
        password: 'chixin10diem',
        email: 'phamsonghiepb3k46@gmail.com',
        address: 'Liên Chiều - Đà Nẵng',
        sdt: '0123456789',
        role: 'user'
    },
];
//Đẩy vào local
var saveUser = function () {
    localStorage.setItem('listUser', JSON.stringify(user));
}
var loadUser = function () {
    user = JSON.parse(localStorage.getItem('listUser'))
}
if (localStorage.getItem('listUser') != null) {
    loadUser();
}
saveUser();
//CHỨC NĂNG ĐĂNG KÝ TÀI KHOẢNG
var signIn = function () {
    var User = {
        id: "USER" + parseInt(user.length + 1),
        username: document.getElementById('usernamed').value,
        name: document.getElementById('named').value,
        sdt: document.getElementById('sdtd').value,
        password: document.getElementById('passwordd').value,
        email: document.getElementById('emaild').value,
        add: "",
        role: 'user',
    }
    if( document.getElementById('usernamed').value == '' || document.getElementById('named').value == ''
    || document.getElementById('sdtd').value == ""
    || document.getElementById('passwordd').value == ''
    || document.getElementById('emaild').value == ''){
        alert('Đăng ký không thành công!')
    }else {
        alert('Đăng ký thành công!');
        user.push(User);
        localStorage.setItem('listUser', JSON.stringify(user));
    }
    window.location.reload();
}
// chức năng cập nhật thông tin người dùng

var signupArr = [];
var saveLogin = function () {
    localStorage.setItem('signup', JSON.stringify(signupArr))
}
var loadLogin = function () {
    signupArr = JSON.parse(localStorage.getItem('signup'))
}
if (localStorage.getItem('signup') != null) {
    loadLogin();
}
saveLogin();

var signUp = function () {
    var k = -1;
    for (var i in user) {
        var data = JSON.parse(JSON.stringify(user[i]))

        if (
            ((document.getElementById('username').value == data.username) && (document.getElementById('password').value == data.password)
                && (data.role == 'admin')
            )
        ) {
            k = i;
            alert('Đăng nhập thành công!');

            window.location.href = '../admin/index.html';
        }
        if (
            ((document.getElementById('username').value == data.username) &&
                (document.getElementById('password').value == data.password) &&
                (data.role == 'user'))
        ) {
            alert('Đăng nhập thành công');
            k = i;
            window.location.href = '../user/index_user.html'

            var userLogin = {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            }
            signupArr.push(userLogin);
            localStorage.setItem('signup', JSON.stringify(signupArr));

            saveLogin();
        }
    }
    if (k == -1) {
        alert('Đăng nhập không thành công!')
    }
}

function getName() {
    for (var i in user) {
        if (String(user[i].username) == String(signupArr[0].username)) {
            document.getElementById("matkhau").innerHTML = '<button class="btn btn-outline-danger" onclick="changePassword(' + i + ')">Đổi</buttoon>';
            document.getElementById("thanh2").innerHTML = user[i].name;
            document.getElementById("username").value = user[i].username;
            document.getElementById("hoten").value = user[i].name;
            document.getElementById("sdt").value = user[i].sdt;
            document.getElementById("email").value = user[i].email;
            document.getElementById("diachi").value = user[i].address;
            document.getElementById("submitupdata").innerHTML = '<button type="submit" class="mt-3 btn btn-outline-danger" onclick="updateInfo(' + i + ')">Cập nhật thông tin</button>';
            // document.getElementById("update").innerHTML = '<button type="submit" class="mt-3 btn btn-outline-danger" onclick="updateInfo(' + i + ')">Cập nhật thông tin</button>';

        }
    }
    document.getElementById("submitupdata").innerHTML = '<button type="submit" class="mt-3 btn btn-outline-danger" onclick="updateInfo(' + i + ')">Cập nhật thông tin</button>';

    document.getElementById("doimk").innerHTML = '<button class="mt-2 btn btn-outline-danger"  type="button" data-toggle="modal" data-target="#changePassword">Đổi password</button>';

    document.getElementById("username").setAttribute("disabled", "disabled");

}
getName();
// cập nhật thông tin địa chỉ
function updateInfo(i) {
    alert("Cập nhật thành công");
    var h = user[i];

    h.name = document.getElementById("hoten").value,
        h.sdt = document.getElementById("sdt").value,

        h.email = document.getElementById("email").value,
        h.address = document.getElementById("diachi").value,

        localStorage.setItem('listUser', JSON.stringify(user));
    window.location.reload();

}

function changePassword(i) {
    var k = user[i];
    
    if (document.getElementById("oldpass").value != k.password) {
        alert("mật khẩu cũ không đúng");
    }
    if (
        (document.getElementById("oldpass").value == k.password) && (document.getElementById("newpass").value == document.getElementById("changepass").value)
    ) {


        alert("đổi mật khẩu thành công");

        k.password = document.getElementById("newpass").value,

        localStorage.setItem('listUser', JSON.stringify(user));
        window.location.reload();
    }   

    if (document.getElementById("newpass").value != document.getElementById("changepass").value) {
        alert("nhập lại mật khẩu không đúng");
    }

}

function checkLogin() {
    var check = signupArr;
    if (check == '') {
        alert('Bạn chưa đăng nhập')
        window.location.href = '../index.html'
    }else if(check != ''){
        alert('Đã Thêm Vào Giỏ Hàng !')
    }
}
function logOut() {
    signupArr = [];
    localStorage.setItem('signup', JSON.stringify(signupArr));
    saveLogin();

}


