user = JSON.parse(localStorage.getItem('listUser'));
//in ra màn hình các thành phần
var userAdmin = function () {
    var listproduct2 = "";
    for (var i in user) {
        var data = JSON.parse(JSON.stringify(user[i]))
        var listproduct2 = '<tr class="thead-light text-cencer">';
        listproduct2 += '<td>' + data.id + '</td>';
        listproduct2 += '<td>' + data.username + '</td>';
        listproduct2 += '<td>' + data.name + '</td>';
        listproduct2 += '<td>' + data.email + '</td>';
        listproduct2 += '<td>' + data.address + '</td>';
        listproduct2 += '<td>' + data.sdt + '</td>';
        listproduct2 += '<td>' + data.role + '</td>';
        listproduct2 += '<td><button onclick="updateUser('
            + i + ')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateUser"><i class="fas fa-cogs"></i></button>';
        listproduct2 += '<button onclick="deleteUser('
            + i + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listproduct2 += '</tr>';

        document.getElementById("user-admin").innerHTML += listproduct2;
    }

}
//thêm tài khoản
var addUser = function () {
    var User = {
        id: "USER" + parseInt(user.length + 1),
        username: document.getElementById('username').value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        sdt: document.getElementById("sdt").value,
        role: document.getElementById("role").value,
    }
    user.push(User);
    localStorage.setItem('listUser', JSON.stringify(user));
    //Save();
    alert('Thêm thành công')
    window.location.reload();
}
//xóa tài khoản
var deleteUser = function (i) {
    let hoi = confirm('Bạn có muốn xóa không!');
    if (hoi == true) {
        user.splice(i, 1);
    } else {
        alert('Tài khoản này vẫn chưa xóa ')
    }
    localStorage.setItem('listUser', JSON.stringify(user));
    window.location.reload();
}
//sửa user
var updateUser = function (i) {
    var k = user[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("usernamed").value = k.username;
    document.getElementById("named").value = k.name;
    document.getElementById("emaild").value = k.email;
    document.getElementById("addressd").value = k.address;
    document.getElementById("sdtd").value = k.sdt;
    document.getElementById("roled").value = k.role;
    document.getElementById("idd").setAttribute("disabled", "disabled");
    document.getElementById("submitUpdated").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="sua(' + i + ')">Đồng ý</button>'
}
var sua = function (i) {
    var k = user[i];
    k.id = document.getElementById("idd").value;
    k.username = document.getElementById("usernamed").value;
    k.name = document.getElementById("named").value;
    k.email = document.getElementById("emaild").value;
    k.address = document.getElementById("addressd").value;
    k.sdt = document.getElementById("sdtd").value;
    k.role = document.getElementById("roled").value;

    localStorage.setItem('listUser', JSON.stringify(user));
    alert("Sửa Sản Phẩm Thành Công");
    window.location.reload();
}
userAdmin();

