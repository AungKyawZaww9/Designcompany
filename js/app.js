// START NAVBAR SECTION 
const navbuttons = document.querySelector('.navbuttons');

navbuttons.addEventListener('click',()=>{
    navbuttons.classList.toggle('changes');
});


// Start Banner Section 
const bannerimgs = document.querySelector('.bannerimgs');
// console.log(bannerimgs);

let improveimgs = [
    {
        photo:'assets/img/etc/cover1.jpg'
    },

    {
        photo:'assets/img/etc/cover2.jpg'
    },

    {
        photo:'assets/img/etc/cover3.jpg'
    }
]

// console.log(improveimgs[1]);

let idx = 0;

function keepgoing(){
    // let {photo} = improveimgs[idx];
    let images = improveimgs[idx].photo;

    bannerimgs.src = images;

    idx ++;

    if(idx === improveimgs.length){
        idx = 0;
    }

    // console.log(idx);

    
}
setInterval(keepgoing,3000);




// End Banner Section 

// END NAVBAR SECTION 




// START ABOUTUS SECTION
const cardlefts = document.querySelector('.cardlefts');
const cardtops = document.querySelector('.cardtops');
const cardrights = document.querySelector('.cardrights');
const textlefts = document.querySelector('.textlefts');

window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly >= 197){
        cardlefts.classList.add('fromlefts');
        cardtops.classList.add('fromtops');
        cardrights.classList.add('fromrights');
        
    }else{
        cardlefts.classList.remove('fromlefts');
        cardtops.classList.remove('fromtops');
        cardrights.classList.remove('fromrights');
        

    }
});
// END ABOUTUS SECTION 


// START SERVICES SECTION 
const services = document.querySelector('.services');
const textservices = document.querySelector('.textservices');

function checkboxs(){

    const innerheights = window.innerHeight;

    const boxtop = services.getBoundingClientRect().top;
    
    if(boxtop < innerheights){
        services.classList.add('servicestops');
        textservices.classList.add('servicestops');
    }else{
        services.classList.remove('servicestops');
        textservices.classList.remove('servicestops');
    }

}

checkboxs();
window.addEventListener('scroll',checkboxs);
// END SERVICES SECTION 



// START TESTMONIAL SECTION 
const testmonialel = document.querySelector('.testmonial');
const userimageel = document.querySelector('.user-image');
const usernameel = document.querySelector('.username');
const roleel = document.querySelector('.role');

// console.log(testmonialel,userimageel,usernameel,roleel);


const testmonials = [
    {
        name:"Ms.June",
        role:"Marketing",
        photo:"https://randomuser.me/api/portraits/women/50.jpg",
        text:"Ms.June Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },


    {
        name:"Mr.Dege",
        role:"Manager",
        photo:"https://randomuser.me/api/portraits/men/50.jpg",
        text:"Mr.Dege Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },



    {
        name:"Ms.Rose",
        role:"Accountant",
        photo:"https://randomuser.me/api/portraits/women/51.jpg",
        text:"Ms.Rose Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },



    {
        name:"Mr.Kaung",
        role:"Sales",
        photo:"https://randomuser.me/api/portraits/men/51.jpg",
        text:"Mr.Kaung Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },



    {
        name:"Ms.Royal",
        role:"Warehouse Manager",
        photo:"https://randomuser.me/api/portraits/women/52.jpg",
        text:"Ms.Royal Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }



]

// console.log(testmonials[0].text);

let increasenumber = 0;

function updatetestmonial(){

    const {name,role,photo,text} = testmonials[increasenumber];

    testmonialel.textContent = text;
    userimageel.src = photo;
    usernameel.innerText = name;
    roleel.innerText = role;

    increasenumber++;
    if(increasenumber > testmonials.length - 1){
        increasenumber = 0;
    }
}
updatetestmonial();
setInterval(updatetestmonial,10000);
// END TESTMONIAL SECTION 






// START JOIN SECTION 
const lables = document.querySelectorAll('label');
// console.log(lables);

lables.forEach((label)=>{
    // console.log(label.textContent);
    // console.log(label.textContent.split(''));

    label.innerHTML = label.textContent.split('').map((letter,index)=>`<span style="transition-delay: ${index*50}ms">${letter}</span>`).join('');
});


const jointextboxs = document.querySelector('.jointextboxs');
// console.log(jointextboxs);

window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;

    if(getscrolly >= 1850){
        jointextboxs.classList.add('fromrights');
    }else{
        jointextboxs.classList.remove('fromrights');
    }
});
// END JOIN SECTION 


// START FOOTER SECTION 
const showyear = document.getElementById('showyear');
const getyear = new Date().getUTCFullYear();
showyear.textContent = getyear;

// END FOOTER SECTION 


// START ICON SECTION 
const btnprimary = document.getElementById('btnprimary');
const btns = document.querySelector('.iconbtns');



btnprimary.addEventListener('click',function(){
    btns.classList.toggle('show');
});
// END ICON SECTION 