	
const hotelP = ["../img/hotel1.jpg","../img/hotel2.jpg","../img/hotel3.jpg","../img/hotel4.jpg","../img/hotel5.jpg",
"../img/hotel6.jpg","../img/hotel7.jpg","../img/hotel8.jpg","../img/hotel9.jpg","../img/hotel10.jpg",
"../img/hotel11.jpg","../img/hotel12.jpg","../img/hotel13.jpg","../img/hotel14.jpg","../img/hotel15.jpg"	
]
const star = ["★★★★★","★★★★★","★★★","★★★★","★★★★",
"★★★★","★★★★★","★★★★","★★★★★","★★★",
"★★★★★","★★★★","★★★★★","★★★★★","★★★★"]

const hotelFo = ["../img/hotelFo1.png","../img/hotelFo2.png","../img/hotelFo3.png","../img/hotelFo4.png","../img/hotelFo5.png",
"../img/hotelFo6.jpg","../img/hotelFo7.jpg","../img/hotelFo8.jpg","../img/hotelFo9.png","../img/hotelFo10.png",
"../img/hotelFo11.jpg","../img/hotelFo12.jpg","../img/hotelFo13.jpg","../img/hotelFo14.jpg","../img/hotelFo15.jpg"	
]

const starFo = ["★★★★","★★★★","★★★★★","★★★★★","★★★",
"★★★★","★★★","★★★★★","★★★","★★★★",
"★★★★★","★★★★","★★★","★★★","★★★★"]

function mInit(){
    for(let idx = 1; idx < 6 ; idx++){
        document.images[idx].src = hotelP[idx-1];
        document.getElementsByTagName("h3")[idx-1].innerHTML = star[idx-1];
    }
    for(let idx =6 ; idx<11; idx++){
        document.images[idx].src = hotelFo[idx-6];
        document.getElementsByTagName("h3")[idx-1].innerHTML = starFo[idx-6];
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

let numFo = 0;
function nextFo(){

    if(numFo>9){
    alert("마지막 페이지입니다");
    }
    else{	
        numFo+=5;	
        for(let idx = 5; idx < 10 ; idx++){
            document.images[idx+1].src = hotelFo[numFo+(idx-5)];
            document.getElementsByTagName("h3")[idx-1].innerHTML = starFo[numFo+(idx-5)];
        }
    }
    
    }
    
    function beforeFo(){
    
    if(numFo<4){
    alert("첫 페이지입니다");
    }
    else{	
        numFo -= 5;
        for(let idx = 5 ; idx < 10 ; idx++){
            document.images[idx+1].src = hotelFo[numFo+(idx-5)];
            document.getElementsByTagName("h3")[idx-1].innerHTML = starFo[numFo+(idx-5)];
        }
    }
    
    }
    