let myId,myPwd,myName,myPhone,myEmail;
let vId,vPwd,vName,vPhone,vEmail,chkMsg;

function naeJungbo(){
    myId = document.getElementById("myId");
    vId = localStorage.getItem("vId");

    myPwd = document.getElementById("myPwd");
    vPwd = localStorage.getItem("vPwd");

    myName = document.getElementById("myName");
    vName = localStorage.getItem("vName");

    myPhone = document.getElementById("myPhone");
    vPhone = localStorage.getItem("vPhone");
    
    myEmail = document.getElementById("myEmail");
    vEmail = localStorage.getItem("vEmail");
    myId.innerHTML= vId
    myName.innerHTML= vName
    myPhone.innerHTML= vPhone
    myEmail.innerHTML= vEmail
}

function nameChange(){
    myName = document.getElementById("chName").value;
    chkMsg=confirm("이름을 바꾸시겠습니까?");
    if(chkMsg){
        localStorage.setItem("vName", myName);
        location.href="./my.html"
        alert("이름이 변경되었습니다.");
    }
}
function phoneChange(){
    myPhone = document.getElementById("chPhone").value;
    chkMsg=confirm("전화번호를 바꾸시겠습니까?");
    if(chkMsg){
        localStorage.setItem("vPhone", myPhone);
        location.href="./my.html"
        alert("전화번호가 변경되었습니다.");
    }
}
function emailChange(){
    myEmail = document.getElementById("chEmail").value;
    let emailChk=document.getElementById("mail_Select").value
    let finalEmail= myEmail+"@"+emailChk;
    chkMsg=confirm("이메일을 바꾸시겠습니까?");
    if(chkMsg){
        localStorage.setItem("vEmail", finalEmail);
        location.href="./my.html"
        alert("이메일이 변경되었습니다.");
    }
}
let past, future, again,txt;

function pwdChange(){
    vPwd = localStorage.getItem("vPwd");
    past = document.getElementById("pwdPast").value;
    future = document.getElementById("pwdFuture").value;
    again = document.getElementById("pwdAgain").value;
    if(vPwd==past){
        txt=" 현재 비밀번호가 변경할 비밀번호를 입력하세요"
        document.getElementById("past").innerText=txt;
    }else if(future == again ){
        txt="비밀번호가 일치합니다"
        document.getElementById("futures").innerText=txt;
    }else{
        txt="비밀번호를 확인해주세요"
        document.getElementById("futures").innerText=txt;
    }
}
