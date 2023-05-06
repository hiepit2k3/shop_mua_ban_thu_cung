/* tạo nút back to top*/
$(document).ready(function() {
    $('#backtop').hide(); // ẩn nút go-to-top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { //thực hiện lệnh điều kiện Khi lăn chuột xuống dưới hơn 100px
            $('#backtop').slideDown(300); //Xuất hiện nút
        } else {
            $('#backtop').fadeOut(300); //Ngược lại thì ẩn nút
        }
    });
    $('#backtop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 900); //Animation giúp hoạt ảnh scroll ngược lên đầu trang sẽ mượt hơn
    });
});



/*tạo hieu ung menu*/
$(document).ready(function() {
    var chieucao;
    var t = document.getElementsByTagName("header").value;
    if (t == undefined) { // kiem tra xem trang co ton tai the header hay khong
        chieucao = parseFloat($("#nav_menu").height()); // khong co ->trang con ->lay chieu cao the nav de xu lí
    } else {
        chieucao = parseFloat($("header").height()); // co -> trang chu ->lay chieu vao the header xu li
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() >= chieucao + 1) {
            $('#nav_menu').addClass("permanent"); // add class
        } else {
            $('#nav_menu').removeClass("permanent"); // remove class
        }
    })
})


$(window).ready(function() {
    $('.form-support').hide();
    $('#hotro').click(function() {
        $('.form-support').slideDown(500);
    })
    $('#knot').click(function() {
        $('.form-support').hide();
    })
})

$(window).ready(function() {
    $('.form-dangnhap').hide();
    $('#dangnhap').click(function() {
        $('.form-dangnhap').slideDown(500);
    })
    $('#back').click(function() {
        $('.form-dangnhap').hide();
    })
})
$(window).ready(function() {
    $('.form-dangky').hide();
    $('#dangky').click(function() {
        $('.form-dangky').slideDown(500);
    })
    $('#thoat').click(function() {
        $('.form-dangky').hide();
    })
})
// bảng 1
$(window).ready(function() {
    $('.form-chitietsanpham').hide();
    $('#chitietsanpham').click(function() {
        $('.form-chitietsanpham').slideDown(500);
    })
    $('#out').click(function() {
        $('.form-chitietsanpham').hide();
    })
})
//
$(window).ready(function() {
    $('.form-chitietsanpham2').hide();
    $('#chitietsanpham2').click(function() {
        $('.form-chitietsanpham2').slideDown(500);
    })
    $('#out1').click(function() {
        $('.form-chitietsanpham2').hide();
    })
})
//
$(window).ready(function() {
    $('.form-chitietsanpham3').hide();
    $('#chitietsanpham3').click(function() {
        $('.form-chitietsanpham3').slideDown(500);
    })
    $('#out2').click(function() {
        $('.form-chitietsanpham3').hide();
    })
})