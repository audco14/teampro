let log02, create02;
let idChk = localStorage.getItem("idChk");
function logChk(){/*index.html에 적용*/
    if(idChk == "true"){
        log02 = document.getElementById("log");
        create02 = document.getElementById("crea");
        log02.href="./html/my.html";
        log02.innerHTML= "마이페이지";
        create02.style.display='block';
    }
}
function logChk02(){/*html폴더에 하위 htnl파일에 적용*/
    if(idChk == "true"){
        log02 = document.getElementById("log");
        create02 = document.getElementById("crea");
        log02.href="./my.html";
        log02.innerHTML= "마이페이지";
        create02.style.display='block';
    }
}
function logChk03(){/*reco폴더에 하위 html파일에 적용*/
    if(idChk == "true"){
        log02 = document.getElementById("log");
        create02 = document.getElementById("crea");
        log02.href="./../my.html";
        log02.innerHTML= "마이페이지";
        create02.style.display='block';
    }
}
function outChk(){/*index.html에 적용*/
    let cancel =  confirm("로그아웃 하시겠습니까?");
    if(cancel){
        rollback();
        log02.href="./html/log.html";
        alert("로그아웃 되었습니다.");
    } 
}
function outChk02(){/*html폴더에 하위 htnl파일에 적용*/
    let cancel =  confirm("로그아웃 하시겠습니까?");
    if(cancel){
        rollback();
        log02.href="./log.html";
        alert("로그아웃 되었습니다.");
    } 
}
function outChk03(){/*reco폴더에 하위 html파일에 적용*/
    let cancel =  confirm("로그아웃 하시겠습니까?");
    if(cancel){
        rollback();
        log02.href="./../log.html";
        alert("로그아웃 되었습니다.");
    } 
}
function rollback(){/*css 변경 로직*/
    idChk =localStorage.setItem("idChk",false);
    log02 = document.getElementById("log");
    create02 = document.getElementById("crea");
    log02.innerHTML= "로그인";
    create02.style.display='none';
    create02.style.cursor='pointer';
}
