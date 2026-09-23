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
        let data = [data1, data2, data3, data4, data5, data6, data7, data8, data9];
        let heading = ["Location", "Temperature", "Feels Like", "Humidity", "Pressure", "Weather", "Description", "Wind Speed", "Sea Level"];
        let output = "";
        for (let i = 0; i < 9; i++) {
            output += `
            <div class="row">
                <div class="col-2" id="heading">
                    <p class="para">${heading[i]}</p>
                </div>
                <div class="col-2" id="values">
                    <p class="para">${data[i]}</p>
                </div>
            </div>`;
            }
        document.querySelector('#result1').innerHTML = `<section id="container">${output}</section>`;
        if(data6==="Clouds"){
            document.querySelector('body').style.backgroundImage="url('https://t3.ftcdn.net/jpg/07/94/66/96/360_F_794669630_EqED5xzraTaXKgADnKyti75HZgRPy7Ar.jpg')";
        }else if(data6==="Rain"){
            document.querySelector('body').style.backgroundImage="url('https://static.vecteezy.com/system/resources/thumbnails/042/195/728/small/ai-generated-rainy-sky-background-free-photo.jpg')";
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