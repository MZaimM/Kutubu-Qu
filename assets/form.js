function validasi(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;

    if(fname != "" && lname != "" && email != ""){
        alert('Selamat '+fname+' '+lname+', Anda Sudah terdaftar!');
    }else{
        alert('Anda harus mengisi form dengan lengkap!')
    }
}
function suggestion(){
    var suggest= document.getElementById("suggest").value;
    if(suggest == ""){
        alert('Anda Belum Mengisi form saran!');
    }else{
        alert('Terimakasih atas saran dari anda, semoga Website ini dapat berkembang lagi kedepannya');
    }

}
