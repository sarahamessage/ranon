const messageText = `

يمكن يكون غريب إنك تشوفي الرسالة دي...

بس في حاجة نفسي أقولها من زمان.

أنا أعرفك من حوالي 9 سنين.

ومع إننا تقريبًا ما اتكلمناش قبل كده ولا مرة...

إلا إنك فضلتي شخص مميز بالنسبة لي طوال السنين دي.

كل مرة كنت بشوفك فيها...

كنت بحس إن يومي بقى أحسن.

وكل مرة كانت الأيام بتعدي...

كنت بلاقي نفسي مبسوط لمجرد إني شوفتك.

عمري ما عرفت أقول الكلام ده.

ويمكن ما كانش عندي الجرأة إني أقوله.

لكن حبيت أكون صريح ولو لمرة واحدة.

مش مستني أي حاجة.

ومش بضغط عليكي بأي شكل.

أنا بس حبيت إنك تعرفي إن في شخص...

كان سعيد كل مرة يشوفك فيها.

وأتمنى لكِ كل الخير والسعادة ❤️

— A

`;

const btn = document.getElementById("openBtn");
const box = document.getElementById("message");
const whatsapp = document.getElementById("whatsappLink");

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