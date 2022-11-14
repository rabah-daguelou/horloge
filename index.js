mySpans=document.querySelectorAll('.mySpan')

container=document.getElementById('container');
hours=document.getElementById('hours');
minutes=document.getElementById('minutes');
secondes=document.getElementById('secondes');

angle=30;

function numberPosition(mySpan, angle) {
    mySpan.style.top=100+(85*Math.sin(angle))+'px';
    mySpan.style.left=100+(85*Math.cos(angle))+'px';
}

for (let i = 0; i < mySpans.length; i++) {
    let angle=(Math.PI*2)/mySpans.length*i
    numberPosition(mySpans[i], angle);
}

/* Récupération des éléments html*/
const day=document.getElementById('day');
const dateNumber=document.getElementById('dayDate');
const month=document.getElementById('month');
const year=document.getElementById('year');
const h=document.getElementById('h');
const m=document.getElementById('m');
const s=document.getElementById('s');

const frenchDays=["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
const frenchMonths =["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]

/* Création de la nouvelle date chaque seconde */

setInterval(() => {
    
    let dateToday=new Date();

    let sc= dateToday.getSeconds();
    if(sc<10){
        sc='0'+ sc
    }
    
    let mn= dateToday.getMinutes();
    if(mn<10){
        mn='0'+ mn
    }
    let hr= dateToday.getHours(); 
    if(hr<10){
        hr='0'+ hr
    }
    
    s.textContent= sc;
    m.textContent= mn;
    h.textContent= hr;
    
    let dayName= dateToday.getDay();
    let dayDate= dateToday.getDate();
    let monthDay= dateToday.getMonth();
    let yearDay= dateToday.getFullYear();
    let dayToday=frenchDays[dayName];
    let monthToday=frenchMonths[monthDay];
    
    if(dayDate<10){
        dayDate='0'+dayDate;
    }

    day.textContent=dayToday;
    dateNumber.textContent=dayDate;
    month.textContent=monthToday;
    year.textContent=yearDay;

    if (hr>11) {
    hr=hr-12
    }

    hours.style.transform=`rotate(${hr*30-90+mn/60}deg)`;
    minutes.style.transform=`rotate(${mn*6-90}deg)`;
    secondes.style.transform=`rotate(${sc*6-90}deg)`;
}, 1000);













// Placer les aiguilles selon l'heure exacte

