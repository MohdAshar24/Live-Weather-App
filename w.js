let inpt=document.querySelector(".inputbox");
let btn=document.querySelector("#searchbutton");
let temp=document.querySelector('.temperature');
let disc=document.querySelector('.discription');
let humidity=document.querySelector('#humidity');
let windspeed=document.querySelector('#windspeed');
let img=document.querySelector('.weatherimg');
let ntfnd=document.querySelector(".ashar");
let bd=document.querySelector(".weatherbody");

async function check(city){

    let key="1c27356ac0d0182921fa4eaaf7027c9f";
    let url= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    let result=await url.json();

if(result.cod =='404'){
ntfnd.style.display="block";
bd.style.display="none";
}
else{
bd.style.display="flex";
ntfnd.style.display="none";}

   temp.innerHTML=`${Math.round(result.main.temp-273.15)}°C`;
   console.log(result);
//    console.log(result.weather[0].main);
// console.log(result.main.humidity);
disc.innerHTML=`${result.weather[0].description}`;
humidity.innerHTML=`${result.main.humidity}%`;
windspeed.innerHTML=`${result.wind.speed} km/h`;
if(result.weather[0].main=="Clouds"){
img.src="cloud.png";
}
if(result.weather[0].main=="Clear"){
    img.src="clear.png";
    }
    if(result.weather[0].main=="Mist"){
        img.src="mist.png";
        }
        if(result.weather[0].main=="Rain"){
            img.src="rain.png";
            }
            if(result.weather[0].main=="Snow"){
                img.src="snow.png";
                }
}


btn.addEventListener('click',()=>{
    check(inpt.value);
})


