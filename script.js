let bg = document.querySelector(".bg");
let message = document.querySelector(".message");
let opt1 = document.querySelector(".opt1");
let opt2 = document.querySelector(".opt2");
let opt3 = document.querySelector(".opt3");
let opt4 = document.querySelector(".opt4");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");


opt1.addEventListener("click", ()=>{
    bg.style.backgroundImage = "url('opt1.jpg')";
    p.innerText = "You're braver than you believe, and stronger than you seem, and smarter than you think"
});

opt2.addEventListener("click", ()=>{
    bg.style.backgroundImage = "url('opt2.avif')";
    p.innerText = "Just one small positive thought in the morning can change your whole day";
});

opt3.addEventListener("click", ()=>{
    bg.style.backgroundImage = "url('opt3.avif')";
    p.innerText = "Failure will never overtake me if my determination to succeed is strong enough";
});

opt4.addEventListener("click", ()=>{
    bg.style.backgroundImage = "url('opt4.jpg')";
    p.innerText = "All our dreams can come true; if we have the courage to pursue them";
});