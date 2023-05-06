var product = [
    {
        id: "SP1",
        name: "Chó Alatka",
        img: "c1.jpg",
        price:122000,
    },
    {
        id: "SP2",
        name: "Chó bẹc-gi ",
        img: "c2.jpg",
        price:122000,
    },
    {
        id: "SP3",
        name: "Chó Phú Quốc ",
        img: "c3.jpg",
        price:122000,
    },
    {
        id: "SP4",
        name: "Chó Anh Lông Dài ",
        img: "c4.jpg",
        price:122000,
    },
    {
        id: "SP5",
        name: "Chó Anh Lông Ngắn ",
        img: "c5.jpg",
        price:122000,
    },
    {
        id: "SP6",
        name: "Chó Ngao ",
        img: "c6.jpg",
        price:122000,
    },
    {
        id: "SP7",
        name: "Chó Pháp ",
        img: "c7.jpg",
        price:122000,
    },
    {
        id: "SP8",
        name: "Chó Ngao Tây Tạn ",
        img: "c8.jpg",
        price:122000,
    },
    {
        id: "SP9",
        name: "Chó Mỹ Lông Ngắn ",
        img: "c9.jpg",
        price:122000,
    },
    {
        id: "SP10",
        name: "Chó Nhật ",
        img: "c10.jpg",
        price:122000,
    },
    {
        id: "SP11",
        name: "Chó Big Bug ",
        img: "c11.jpg",
        price:122000,
    },
    {
        id: "SP12",
        name: "Golden ",
        img: "c12.jpg",
        price:122000,
    },
];
// lưu mãng pr và local
function Save(){
    localStorage.setItem('cuahangproduct',JSON.stringify(product));
}
//lấy sản phảm ra từ local
function load(){
    product = JSON.parse(localStorage.getItem('cuahangproduct'));
}

if(localStorage.getItem('cuahangproduct') != null){
    load();
}
//xuất dữ liệu ra của hàng
var listLocal = function(){
    var listproduct = "";
    for (var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]))
        var listproduct = '<div class="info_product" id="san_pham">'
        listproduct += '<img class="card-img-top" src="image/cuncon/' + data.img + '" alt="...">';
        listproduct += '<div class="card-title product-title text-center h5">' + data.name + '</div>';
        listproduct += '<div class="price text-center h6">' + data.price + ' VNĐ</div>';
        listproduct += '<div class="col60">'
        listproduct +=   '<i class="fas fa-star star1"></i>'
        listproduct +=   '<i class="fas fa-star star2"></i>'
        listproduct +=   '<i class="fas fa-star star3 "></i>'
        listproduct +=   '<i class="fas fa-star star4"> </i>'
        listproduct +=   '<i class="fas fa-star star5"></i>'
        listproduct += '</div>'
        listproduct += '<div class="choose">'
        listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" onclick="checkLogin()">';
        listproduct += '<a href="#" class="dathang">' +  "Mua Hàng" + '</a>'
        listproduct += '</span>'
        listproduct += '<a href="../chitiet.html" class="chitiet">' + "Chi Tiết" + '</a></div>'
        listproduct += '</div>'
        listproduct += '<div>'
        listproduct += '<div>'
        
        document.getElementById('cuahang').innerHTML += listproduct;
     }
     Save();
    }
     
listLocal();

