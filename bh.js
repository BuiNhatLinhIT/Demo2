

function checkSDT(){
    var dienThoai = document.getElementById("sdt").value;
    var kiemTraDT = isNaN(dienThoai);
    if (dienThoai == "") {
        document.getElementById("loidt").innerHTML="Điện thoại không được để trống";
    return false;
    }
    if (kiemTraDT == true) {
        document.getElementById("loidt").innerHTML="Điện thoại phải để ở định dạng số";
    return false;
    }
    else{
        document.getElementById("loidt").innerHTML="Bạn đã nhập đúng định dạng";
    }
}


function checkDate(){
    var ngay = document.getElementById("day").value;
    if (ngay == "") {
        alert("Ngày, tháng, năm không được để trống");
        return false;
    }
    else{
        alert("Bạn đã nhập đúng định dạng")
    }
}