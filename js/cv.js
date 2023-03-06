document.getElementById('boton').addEventListener('click', function(){
    console.log("Mi primer Proyecto de Desarrollo Web Front-End");
    document.getElementById("autor").innerHTML = "Maxi Segovia"
});

document.getElementById('boton_hora').addEventListener('click',function displayDate(){
    document.getElementById("hora").innerHTML = Date();
});

document.getElementById('boton_fb').addEventListener('click', function newTab(){
    window.open("https://www.facebook.com/j.maxi.segovia","_blank");
});