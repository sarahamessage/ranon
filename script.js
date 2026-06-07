const messageText = `

في حاجة كنت عاوز أقولها...

يمكن تكون رسالة غريبة شوية.

لكن من أول مرة شوفتك فيها...

لفتي  انتباهي بشكل مختلف.

ومعرفتش أنام من كتر التفكير فيكي .

بس حسيت إنك حد مميز.

ومع الوقت فضلت محتفظ بالإعجاب ده جوايا.

يمكن عمري ما عرفت أقول الكلام ده بشكل مباشر.

لكن حبيت أكون صريح ولو لمرة واحدة.

مش مستني أي حاجة.

ومش بضغط عليكي بأي شكل.

أنا بس حبيت إنك تعرفي...اللي جوايا 

— A

`;

const btn = document.getElementById("openBtn");
const box = document.getElementById("message");


btn.onclick = () => {

btn.style.display = "none";

let i = 0;

const timer = setInterval(() => {

box.textContent += messageText[i] || "";
box.scrollTop = box.scrollHeight;

i++;

if(i >= messageText.length){
clearInterval(timer);
whatsapp.style.display = "inline-block";
}

}, 90);

};

function createHeart(){

const heart = document.createElement("div");

heart.className = "floating-heart";
heart.innerHTML = "❤️";

heart.style.left = Math.random()*100 + "vw";
heart.style.fontSize = (15 + Math.random()*20) + "px";
heart.style.animationDuration = (6 + Math.random()*5) + "s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},11000);

}

setInterval(createHeart,800);
