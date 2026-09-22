document.querySelector('#myform').addEventListener('submit',(e)=>{
    e.preventDefault();

    let cityinfo=document.querySelector('#city').value;
    let api='0e9aa7458709a727e769fedad02a439f';

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityinfo}&appid=${api}&units=metric`)
    .then((info)=>{
        console.log(info.data);
        let data1=info.data.name;
        let data2=info.data.main.temp;
        let data3=info.data.main.feels_like;
        let data4=info.data.main.humidity;
        let data5=info.data.main.pressure;
        let data6=info.data.weather[0].main;
        let data7=info.data.weather[0].description;
        let data8=info.data.wind.speed;
        let data9=info.data.main.sea_level;
        
        document.querySelector('#result1').innerHTML=
        `
        <section id="result">
        <div id="heading">
                <p class="para" > Location :</p>
                <p class="para" > Temparature :</p>
                <p class="para" > Feels_like :</p>
                <p class="para" > Humidity :</p>
                <p class="para" > Pressure :</p>
                <p class="para">Weather :</p>
                <p class="para">Description :</p>
                <p class="para">Wind Speed :</p>
                <p class="para">Sea level :</p>
                
            </div>
            <div id="values">
                <p class="para" id="data1">${data1}</p>
                <p class="para" id="data2">${data2}</p>
                <p class="para" id="data3">${data3}</p>
                <p class="para" id="data4">${data4}</p>
                <p class="para" id="data5">${data5}</p>
                <p class="para" id="data6">${data6}</p>
                <p class="para" id="data7">${data7}</p>
                <p class="para" id="data8">${data8}</p>
                <p class="para" id="data9">${data9}</p>
            </div>
            </section>`;
            if(data6==="Clouds"){
            document.querySelector('body').style.backgroundImage="url('https://t3.ftcdn.net/jpg/07/94/66/96/360_F_794669630_EqED5xzraTaXKgADnKyti75HZgRPy7Ar.jpg')";
        }else if(data6==="Rain"){
            document.querySelector('body').style.backgroundImage="url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEwL3Jhd3BpeGVsb2ZmaWNlNl9waG90b19vZl9hX2RhcmtfZ3JleV9yYWluX2Nsb3VkX3BuZ19pc29sYXRlZF9vbl8zZGI1YWIyNS1lMGI1LTQzNDYtYTk2YS02M2JjMGNlM2FhNjFfMS5qcGc.jpg')";
        }else if(data6==="Clear"){
            document.querySelector('body').style.backgroundImage="url('https://plus.unsplash.com/premium_photo-1733317236155-b0e1a2930f37?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        }else if(data6==="Thunderstorm"){
            document.querySelector('body').style.backgroundImage="url('https://t3.ftcdn.net/jpg/09/18/26/26/360_F_918262612_lyCQDrox2pZm0rPyxUK7PYPWHPjPSS72.jpg')";
        }

    })
    .catch((error)=>{
        alert("Enter valid city name"+error)
    })
})