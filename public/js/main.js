const cityName=document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');
const getInfo=async(event)=>{
    event.preventDefault();
    // alert("hi");
    let cityVal=cityName.value;    
    if(cityVal===""){
        city_name.innerText='please write the name before search';
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=835e37369868a70aab623d85af06abb4`;
            const response= await fetch(url);
            const data=await response.json();
            const arrData=[data];
            city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;
            // temp_status.innerText=arrData[0].weather[0].main;
            const tempMood=arrData[0].weather[0].main;
            if(tempMood==="Clear"){
                temp.status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }
            else if(tempMood==="Clouds"){
                temp.status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(tempMood==="Rain"){
                temp.status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'></i>";
            }
            else{
                temp.status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
        
        }catch{
            city_name.innerText='please enter the city name properly';
            
        }
        
    }
}

submitBtn.addEventListener('click',getInfo);