user = JSON.parse(localStorage.getItem('listUser'));
//sửa user
var updateUser = function (i) {
    var k = user[i];
    // document.getElementById("idd").value = k.id;
    document.getElementById("usernamed").value = k.username;
    document.getElementById("named").value = k.name;
    document.getElementById("emaild").value = k.email;
    document.getElementById("addressd").value = k.address;
    document.getElementById("sdtd").value = k.sdt;
    // document.getElementById("roled").value = k.role;
    document.getElementById("idd").setAttribute("disabled", "disabled");
    document.getElementById("submitUpdated").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="sua(' + i + ')">Đồng ý</button>'
}
var sua = function (i) {
    var k = user[i];
    // k.id = document.getElementById("idd").value;
    k.username = document.getElementById("usernamed").value;
    k.name = document.getElementById("named").value;
    k.email = document.getElementById("emaild").value;
    k.address = document.getElementById("addressd").value;
    k.sdt = document.getElementById("sdtd").value;
    // k.role = document.getElementById("roled").value;

    localStorage.setItem('listUser', JSON.stringify(user));
    alert("Sửa Tài Khoản Thành Công");
    window.location.reload();
}
userAdmin();
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