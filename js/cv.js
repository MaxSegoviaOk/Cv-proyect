document.getElementById('autor').addEventListener('click', function(){
    console.log("Mi primer Proyecto de Desarrollo Web Front-End");
    document.getElementById("autor").innerHTML = "Maxi Segovia"
});

document.getElementById('boton_hora').addEventListener('click',function displayDate(){
    document.getElementById("hora").innerHTML = Date();
});

document.getElementById('facebook').addEventListener('click', function newTab(){
    window.open("https://www.facebook.com","_blank");
});

document.getElementById('instagram').addEventListener('click', function newTab(){
    window.open("https://www.instagram.com","_blank");
});

document.getElementById('twitter').addEventListener('click', function newTab(){
    window.open("https://www.twitter.com","_blank");
});

document.getElementById('linkedin').addEventListener('click', function newTab(){
    window.open("https://ar.linkedin.com/","_blank");
});

document.getElementById('whatsapp').addEventListener('click', function newTab(){
    window.open("https://web.whatsapp.com/","_blank");
});