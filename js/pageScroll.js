
const hotelP = ["./img/hotel1.jpg","./img/hotel2.jpg","./img/hotel3.jpg","./img/hotel4.jpg","./img/hotel5.jpg",
"./img/hotel6.jpg","./img/hotel7.jpg","./img/hotel8.jpg","./img/hotel9.jpg","./img/hotel10.jpg",
"./img/hotel11.jpg","./img/hotel12.jpg","./img/hotel13.jpg","./img/hotel14.jpg","./img/hotel15.jpg"	
]


const star = ["★★★★★","★★★★★","★★★","★★★★","★★★★",
"★★★★","★★★★★","★★★★","★★★★★","★★★",
"★★★★★","★★★★","★★★★★","★★★★★","★★★★"]



function mInit(){
    for(let idx = 1; idx < 6 ; idx++){
        document.images[idx].src = hotelP[idx-1];
        document.getElementsByTagName("h3")[idx-1].innerHTML = star[idx-1];
    }
}

let num=0;

function next(){

if(num>9){
alert("마지막 페이지입니다");
}
else{	
    num+=5;	
    for(let idx = 0; idx < 5 ; idx++){
        document.images[idx+1].src = hotelP[num+idx];
        document.getElementsByTagName("h3")[idx].innerHTML = star[num+idx];
    }
}

}

function before(){

if(num<4){
alert("첫 페이지입니다");
}
else{	
    num -= 5;
    for(let idx = 0 ; idx < 5 ; idx++){
        document.images[idx+1].src = hotelP[num+idx];
        document.getElementsByTagName("h3")[idx].innerHTML = star[num+idx];
    }
}

}
