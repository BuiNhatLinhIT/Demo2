

// function checkSDT(){
//     var dienThoai = document.getElementById("sdt").value;
//     var kiemTraDT = isNaN(dienThoai);
//     if (dienThoai == "") {
//         document.getElementById("loidt").innerHTML="Điện thoại không được để trống";
//     return false;
//     }
//     if (kiemTraDT == true) {
//         document.getElementById("loidt").innerHTML="Điện thoại phải để ở định dạng số";
//     return false;
//     }
//     else{
//         document.getElementById("loidt").innerHTML="Bạn đã nhập đúng định dạng";
//     }
// }


// function checkDate(){
//     var ngay = document.getElementById("day").value;
//     if (ngay == "") {
//         alert("Ngày, tháng, năm không được để trống");
//         return false;
//     }
//     else{
//         alert("Bạn đã nhập đúng định dạng")
//     }
// }



// Lấy giá trị của một input
function getValue(id){
    return document.getElementById(id).value.trim();
}
 
// Hiển thị lỗi
function showError(key, mess){
    document.getElementById(key + '_error').innerHTML = mess;
}

function validate()
{
    var flag = true;
     
    // 1. age
    var age = getValue('age');
    if (age == ''){
        flag = false;
        showError('age', 'This field is required');
    }
     
    // 2. gender
    var gender = getValue('gender');
    if (gender == ''){
        flag = false;
        showError('gender', 'This field is required');
    }

    // 3. Phone
    var phone = getValue('phone');
    if (phone == ''){
        flag = false;
        showError('phone', 'This field is required');
    }

    var married = document.getElementById("mari").checked;
    var unmarried = document.getElementById("un").checked;
    var other = document.getElementById("ot").checked;
    if ((married == false) && (unmarried == false) && (other == false))
    {
        flag = false;
        showError('maristt', 'This field is required');
    }

     
    var oth = getValue('other');
    if (oth == ''){
        flag = false;
        showError('other', 'This field is required');
    }

    var yes = document.getElementById("yes").checked;
    var no = document.getElementById("no").checked;
    if ((yes == false) && (no == false))
    {
        flag = false;
        showError('ret', 'This field is required');
    }


    var yes1 = document.getElementById("yes1").checked;
    var no1 = document.getElementById("no1").checked;
    if ((yes1 == false) && (no1 == false))
    {
        flag = false;
        showError('dis', 'This field is required');
    }
    return flag;
}

function onClick()
{
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var age = document.getElementById('age').value;
    var nickname = document.getElementById('nick').value;
    var gender = document.getElementById('gender').value;
    var phone = document.getElementById('phone').value;
    var spouce = document.getElementById('spouce').value;
    var live = document.getElementById('live').value;
    var occ = document.getElementById('occ').value;
    var who = document.getElementById('who').value;
    var where = document.getElementById('where').value;
    var pnumber = document.getElementById('pnumber').value;
    var iff = document.getElementById('if').value;
    var doo = document.getElementById('do').value;
    var tex = document.getElementById('textarea').value;
    var result = document.getElementById('result');

    function getMarital()
    {
        var other = document.getElementById('other').value;
        var checkbox = document.getElementsByName("language");
                for (var i = 0; i < checkbox.length; i++){
                    if (checkbox[i].checked === true){
                        if (checkbox[i].value != 'other')
                        {
                            return checkbox[i].value;
                        }
                        else
                        {
                            return checkbox[i].value + "; " + other;
                        }   
                    }
                }
    }

    function getRetired()
    {
        var date = document.getElementById('date').value;
        var checkbox = document.getElementsByName("status");
        for (var i = 0; i < checkbox.length; i++){
            if (checkbox[i].checked === true){
                if (checkbox[i].value != 'Yes')
                {
                    return checkbox[i].value;
                }
                else
                {
                    return checkbox[i].value + "; " + date;
                }   
            }
        }
    }

    function getDisability()
    {
        var date = document.getElementById('date1').value;
        var checkbox = document.getElementsByName("status1");
        for (var i = 0; i < checkbox.length; i++){
            if (checkbox[i].checked === true){
                if (checkbox[i].value != 'Yes')
                {
                    return checkbox[i].value;
                }
                else
                {
                    return checkbox[i].value + '; ' + date;
                }   
            }
        }
    }

    function getAllergic()
    {
        var all = document.getElementById('all').value;
        var checkbox = document.getElementsByName("st");
        for (var i = 0; i < checkbox.length; i++){
            if (checkbox[i].checked === true){
                if (checkbox[i].value != 'Yes')
                {
                    return checkbox[i].value;
                }
                else
                {
                    return checkbox[i].value + '; ' + all;
                }   
            }
        }
    }

    function getSmoking()
    {
        var all = document.getElementById('howm').value;
        var checkbox = document.getElementsByName("smoke");
        for (var i = 0; i < checkbox.length; i++){
            if (checkbox[i].checked === true){
                if (checkbox[i].value != 'Yes')
                {
                    return checkbox[i].value;
                }
                else
                {
                    return  checkbox[i].value + '; ' + all;
                }   
            }
        }
    }
    

    result.innerHTML = '<p>RESULTS TAKEN FROM FORM</p>'+ '<p>First Name: ' + fname + '</p>'
                        + '<p>Last Name: ' + lname + '</p>' + '<p>Patient Age: ' + age + '<p>Prefered Name / Nickname: '+ nickname + '</p>'
                        + '<p>Gender: ' + gender + '</p>' + '<p>Phone Number: ' + phone + '</p>'+ '<p>Spouce Name: ' + spouce + '</p>'
                        + '<p>With whome do you live: ' + live + '</p>' + '<p>Marital Status: ' + getMarital() + '</p>'
                        + '<p>Occupation: ' + occ + '</p>' + '<p>Retired: ' + getRetired() + '</p>' + '<p>Disability: ' + getDisability() + '</p>'
                        + '<p>Who is your primary care doctor: ' + who + '</p>'
                        + '<p>Where is your primary care doctor located: ' + where + '</p>'
                        + '<p>Phone Number of primary care doctor: ' + pnumber+ '</p>'
                        + '<p>Allergic to any medications: '+getAllergic()+'</p>'
                        + '<p>Do you smoke: '+getSmoking()+'</p>'
                        + '<p>If you quit, when did you stop: '+iff+'</p>'
                        + '<p>Do you drink alcohol: '+doo+'</p>'
                        + '<p>Personal opinion: '+tex+'</p>';
}

