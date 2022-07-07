

const getValue = (id) => document.getElementById(id).value.trim();
const showError = (key, mess) => document.getElementById(key + '_error').innerHTML = mess;
const noDis = (id) => document.getElementById(id).style.display = 'none';
const yesDis = (id) => document.getElementById(id).style.display = 'block';

function validate()
{
    let flag = true;
     
    // 0. email
    let email = getValue('email');
    if (email == ''){
        flag = false;
        showError('email', 'This field is required');
    }
     
    // 1. age
    let age = getValue('age');
    if (age == ''){
        flag = false;
        showError('age', 'This field is required');
    }

    // 2. gender
    let gender = getValue('gender');
    if (gender == ''){
        flag = false;
        showError('gender', 'This field is required');
    }

    // 3. Phone
    let phone = getValue('phone');
    if (phone == ''){
        flag = false;
        showError('phone', 'This field is required');
    }

    let married = document.getElementById("mari").checked;
    let unmarried = document.getElementById("un").checked;
    let other = document.getElementById("ot").checked;
    if ((married == false) && (unmarried == false) && (other == false))
    {
        flag = false;
        showError('maristt', 'This field is required');
    }

     
    let oth = getValue('other');
    if (oth == ''){
        flag = false;
        showError('other', 'This field is required');
    }

    let yes = document.getElementById("yes").checked;
    let no = document.getElementById("no").checked;
    if ((yes == false) && (no == false))
    {
        flag = false;
        showError('ret', 'This field is required');
    }


    let yes1 = document.getElementById("yes1").checked;
    let no1 = document.getElementById("no1").checked;
    if ((yes1 == false) && (no1 == false))
    {
        flag = false;
        showError('dis', 'This field is required');
    }
    return flag;
}

function getMarital()
{
    let other = document.getElementById('other').value;
    let checkbox = document.getElementsByName("language");
        for (let i = 0; i < checkbox.length; i++){
            if(checkbox[i].checked) {
                return checkbox[i].value != "other" ? checkbox[i].value : checkbox[i].value + "; " + other;
           }
        }
}

function getRetired()
{
    let date = document.getElementById('date').value;
    let checkbox = document.getElementsByName("status");
    for (let i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked) {
            return checkbox[i].value != "Yes" ? checkbox[i].value : checkbox[i].value + "; " + date;
        }
    }
}

function getDisability()
{
    let date = document.getElementById('date1').value;
    let checkbox = document.getElementsByName("status1");
    for (let i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked) {
            return checkbox[i].value != "Yes" ? checkbox[i].value : checkbox[i].value + "; " + date;  
        }
    }
}

function getAllergic()
{
    let all = document.getElementById('all').value;
    let checkbox = document.getElementsByName("st");
    for (let i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked) {
            return checkbox[i].value != "Yes" ? checkbox[i].value : checkbox[i].value + "; " + all;  
        }
    }
}

function getSmoking()
{
    let all = document.getElementById('howm').value;
    let checkbox = document.getElementsByName("smoke");
    for (let i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked) {
            return checkbox[i].value != "Yes" ? checkbox[i].value : checkbox[i].value + "; " + all;  
        }
    }
}

function getcheckEmail(){
    let email = document.getElementById("email").value;
    let aCong = email.indexOf("@");
    let dauCham = email.lastIndexOf(".");
    
    if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length)) {   
        document.getElementById("email_error").innerHTML="Email bạn điền không chính xác";
        return false;
    }
    else{
        // document.getElementById("email_error").innerHTML="Bạn đã nhập đúng định dạng";
        return email;
    }
}

function displayValue()
{
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let nickname = document.getElementById('nick').value;
    let gender = document.getElementById('gender').value;
    let phone = document.getElementById('phone').value;
    let spouce = document.getElementById('spouce').value;
    let live = document.getElementById('live').value;
    let occ = document.getElementById('occ').value;
    let who = document.getElementById('who').value;
    let where = document.getElementById('where').value;
    let pnumber = document.getElementById('pnumber').value;
    let iff = document.getElementById('if').value;
    let doo = document.getElementById('do').value;
    let tex = document.getElementById('textarea').value;

    console.log("First Name:"+fname);
    console.log("Last Name:"+lname );
    console.log("Your name Email:"+getcheckEmail());
    console.log("Patient Age:"+age);
    console.log("Prefered Name / Nickname:"+nickname);
    console.log("Gender:"+gender);
    console.log("Phone Number:"+ phone);
    console.log("Spouce Name:"+spouce);
    console.log("With whome do you live:"+live);
    console.log("Marital Status:"+getMarital());
    console.log("Occupation:"+occ);
    console.log("Retired:"+getRetired());
    console.log("Disability:"+getDisability());
    console.log("Who is your primary care doctor:"+who );
    console.log("Where is your primary care doctor located: "+where);
    console.log("Phone Number of primary care doctor:"+pnumber);
    console.log("Allergic to any medications:"+getAllergic());
    console.log("Do you smoke:"+getSmoking());
    console.log("If you quit, when did you stop:"+iff);
    console.log("Do you drink alcohol:"+doo);
    console.log("Personal opinion:"+tex);
  
}
