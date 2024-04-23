/*회원가입*/
let cancel;
let sId, sPwd,cPwd, sName, sPhone, sEmail,sMail,fEmail;

function signUpCancel(){
    cancel = confirm("회원가입을 취소하고 메인화면으로 돌아가시겠습니까?");
    if(cancel){
        window.location.href = "./../index.html";
    }
}
function signUp(){
sId = document.getElementById("ids").value;
sPwd = document.getElementById("pw").value;
cPwd = document.getElementById("chkPwd").value;
sName = document.getElementById("name").value;
sPhone = document.getElementById("phone").value;
sEmail = document.getElementById("email").value;
sMail = document.getElementById("mail_Select").value;
fEmail=sEmail+"@"+sMail;
    if(sPwd == cPwd){
        localStorage.setItem("vId",sId);
        localStorage.setItem("vPwd",sPwd);
        localStorage.setItem("vName",sName);
        localStorage.setItem("vPhone",sPhone);
        localStorage.setItem("vEmail",fEmail);
        localStorage.setItem("idChk", false);
        cancel = confirm("회원가입하시겠습니까?");
        if(cancel){
            window.location.href = "./log.html";
            alert("회원가입이 완료되었습니다.");
        }
    }else{
        alert("비밀번호가 일치하지 않습니다.");
    }
}
/*로그인*/

let objId, objPwd,objIdChk;
let chk=false;
let log,create, vId, vPwd;
function mInit(){
    objId = document.getElementById("id");
    objPwd = document.getElementById("pwd");
    vId = localStorage.getItem("vId");
    vPwd = localStorage.getItem("vPwd");
    objId.focus();
}
function loginChk(){
    if(objId.value == vId && objPwd.value == vPwd){		
        window.location.href="./../index.html";
        localStorage.setItem("idChk", true);
        alert("로그인 확인");
    } else{	
        if(objId.value != vId){
            alert("일치하는 ID가 없습니다");
            objId.select();
        }
        else if(objPwd.value != vPwd){
            alert("일치하는 pwd가 없습니다");
            objPwd.select();
        }
        else{
            alert("일치하는 ID, Pwd가 없습니다");
            objId.select();
        }
    }
}