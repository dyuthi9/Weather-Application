document.querySelector('#myform').addEventListener('submit',(e)=>{
    e.preventDefault();

    let cityinfo=document.querySelector('#city').value;
    let api='0e9aa7458709a727e769fedad02a439f';

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityinfo}&appid=${api}&units=metric`)
    .then((info)=>{
        console.log(info.data);
        let data1=info.data.main.feels_like;
        let data2=info.data.main.humidity;
        let data3=info.data.main.pressure;
        let data4=info.data.main.temp;
        let data5=info.data.weather[0].main;
        let data6=info.data.weather[0].description;

        document.querySelector('#data1').innerHTML=data1;
        document.querySelector('#data2').innerHTML=data2;
        document.querySelector('#data3').innerHTML=data3;
        document.querySelector('#data4').innerHTML=data4;
        document.querySelector('#data5').innerHTML=data5;
        document.querySelector('#data6').innerHTML=data6;

    })
    .catch((error)=>{
        alert("Enter valid city name"+error)
    })
})