const messageText = `

في حاجة كنت عاوز أقولها من فترة...

ومش عارف إذا كان المفروض أقولها ولا لا.

بس في النهاية قررت أكتبها.

يمكن إحنا ما اتكلمناش قبل كده...

لكن في كل مرة كنت بشوفك فيها...

كنت بحس إن يومي بقى أحسن شوية.

ومع الوقت...

بقيت أشوف فيكي شخص مميز فعلًا.

مش بكتب الرسالة دي عشان أضغط عليكي...

ومش مستني أي حاجة في المقابل.

أنا بس حبيت أكون صريح مرة واحدة.

وأقول إن وجودك كان دايمًا بيسيب أثر جميل في يومي.
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
