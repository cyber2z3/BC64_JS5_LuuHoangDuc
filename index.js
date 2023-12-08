// Bài tập Quản lý tuyển sinh --------------------------------------------
document.getElementById('btn1').onclick = function(){
    var diemChuan = document.getElementById('diemChuan').value*1;

    var kv = document.querySelector("#kv").value*1;
    var dt = document.querySelector('#dt').value*1;

    var mon1 = document.getElementById('diemMon1').value*1;
    var mon2 = document.getElementById('diemMon2').value*1;
    var mon3 = document.getElementById('diemMon3').value*1;

    var khuVuc = tinhDiemKhuVuc(kv);
    var doiTuong = tinhDiemDoiTuong(dt);
    var tongDiem = tinhTongDiem(mon1, mon2, mon3, khuVuc, doiTuong);
    
    if (tongDiem>diemChuan){
        document.getElementById('kq1').innerHTML = 
        "Bạn đã đậu. Tổng điểm là: "+tongDiem;
    }else 
        document.getElementById('kq1').innerHTML =
        "Bạn đã rớt. Tổng điểm là: "+tongDiem;
}

function tinhTongDiem(m1, m2, m3, kv, dt){
    return m1+m2+m3+kv+dt;
}

function tinhDiemKhuVuc(kv){
    switch (kv){
        case 1:
            return 2; 
        case 2:
            return 1;
        case 3:
            return 0.5;
        default:
            return 0;
    }   
}

function tinhDiemDoiTuong(dt){
    switch(dt){
        case 1: 
            return 2.5
        case 2: 
            return 1.5
        case 3: 
            return 1
        default: 
            return 0
    }
}

// Bài tập Tính tiền điện --------------------------------------------
document.getElementById('btn2').onclick = function(){
    var name = document.getElementById('hoTen').value;
    var soKw = document.getElementById('soKw').value*1;

    var tongTien = tinhTienDien(soKw).toLocaleString(
        'it-IT', 
        {
            style : 'currency', 
            currency : 'VND'
        }
    )
    document.getElementById('kq2').innerHTML = 
        "Họ tên: "+name+" ; Tiền điện: "+tongTien;

}

function tinhTienDien(s){
    if (s<=50){
        return s*500;
    }else if(s>50 && s<=100){
        return 50*500 + (s-50)*650;
    }else if (s>100 && s<= 200){
        return 50*500 + 50*650 + (s-100)*850;
    }else if (s>200 && s<=350){
        return 50*500 + 50*650 + 100*850 + (s-200)*1100;
    }else {
        return 50*500 + 50*650 + 100*850 + 150*1100 + (s-350)*1300;
    }
}

// Tính tiền thuế thu nhập cá nhân --------------------------------------------
document.getElementById('btn3').onclick = function(){
    var name = document.getElementById('hoTen2').value; 
    var thuNhap = document.getElementById('thuNhap').value*1; 
    var soNguoi = document.getElementById('soNguoi').value*1; 

    var thueSuat = checkThuNhap(thuNhap);

    var thue = (thuNhap - 4000000 - soNguoi*1600000)*(thueSuat/100);
    if (thue>0){
        document.getElementById('kq3').innerHTML = 
            "Họ tên: "+name+"; Tiền thuế: "+thue.toLocaleString(
                'it-IT', 
                {
                    style : 'currency', 
                    currency : 'VND'
                }
            )
    }else 
        document.getElementById('kq3').innerHTML = alert("Số tiền thu nhập không hợp lệ");
        document.getElementById('kq3').innerHTML = 
            "Họ tên: "+name+"; Tiền thuế: 0"
}

function checkThuNhap(tn){
    if (tn<=60000000){
        return 5;
    }else if (tn>60000000 && tn<=120000000){
        return 10; 
    }else if (tn>120000000 && tn<=210000000){
        return 15;
    }else if (tn>210000000 && tn<=384000000){
        return 20; 
    }else if (tn>384000000 && tn<=624000000){
        return 25;
    }else if (tn>form-group624000000 && tn<=960000000){
        return 30;
    }else {
        return 35;
    }
}

document.getElementById('soKetNoi').style.display = "none"

// Bài tập tính tiền cáp 
 
document.getElementById('btn4').onclick = function(){
    var loaiKhach = document.querySelector('#khachHang').value*1; 
    var maKhach = document.getElementById('maKhach').value;
    var soKenhCao = document.getElementById('soKenh').value*1; 
    var soKetNoi = document.getElementById('soKetNoi').value*1; 

    var tienCap = tongPhi(loaiKhach, soKenhCao, soKetNoi);

    if (loaiKhach==0){
        document.getElementById('kq4').innerHTML = alert("Hãy chọn loại khách hàng")
        document.getElementById('kq4').innerHTML = 
            "Mã khách hàng: "+maKhach+"; Tiền cáp: 0"
    }else
        document.getElementById('kq4').innerHTML = 
            "Mã khách hàng: "+maKhach+"; Tiền cáp: $"+tienCap;
    
}
function tongPhi(loaiKhach, soKenhCao, soKetNoi){
    // Phí xử lý hóa đơn + phí dịch vụ cơ bản + (phí kết nối thêm -nếu có)
    var tienKetNoiThem = checkSoKetNoi(soKetNoi);
    var phiHoaDon; // Phí xử lý hóa đơn + phí dịch vụ cơ bản
    var tienKenhCao; 

    switch (loaiKhach){
        case 1:
            phiHoaDon = 25;
            tienKenhCao = 7.5*soKenhCao;
            break
        case 2: 
            phiHoaDon = 90+tienKetNoiThem;
            tienKenhCao = 50*soKenhCao;
    }

    var tienCap = phiHoaDon + tienKenhCao;
    
    return tienCap
}

function checkSoKetNoi(s){
    if (s<=10){
        return 0;
    }else 
        return (s-10)*5;
}