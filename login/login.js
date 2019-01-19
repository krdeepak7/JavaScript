
function btnEvent(){ 
    var uname = document.login.uname.value;
    var psw = document.login.psw.value; 
    //Check Empty Fields
    if (uname == '' || psw == ''){
    alert('Both fields should not be blank');
    return;
    }
    //Check size of passwords
    if (psw.length<6 || psw.length>12){
        alert('Password must be 6 to 12 characters');
        return;
    }
    //Username should not start with _, @ and Number
    let str=uname.slice(0,1);
    if(uname.slice(0,1)== '_' || uname.slice(0,1)=='@' || str.match(/[0-9]/g)!=null){
        alert('username should not start with _, @ and number');
        return;
    }
}