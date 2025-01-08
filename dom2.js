
let email = document.getElementById('exampleInputEmail1');
let Password = document.getElementById('exampleInputPassword1');
let confirm = document.getElementById('exampleInputPassword12');
 let erem = document.getElementById("emailError");
 let erpas = document.getElementById("passError");
 let ercon = document.getElementById("conError");

 function form () {
    let isvalid = true;

if (!email.value.trim()) {
    erem.textContent = 'required';
    isvalid = false;
}
else {
    erem.textContent = '';
}

if (!Password.value.trim()){
    erpas.textContent = 'required';
    isvalid=false;
}
else {
    erpas.textContent= ' ';
}

if (!confirm.value.trim()){
    ercon.textContent = 'required';
    isvalid =false;
}
else {
    ercon.textContent = '';
}


}