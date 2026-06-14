const messageText = `

Meine liebe Valentina,💜

heute ist ein ganz besonderer Tag, denn es ist dein Geburtstag. 🎉✨

Du bist die erste Freundin in meinem Leben, und ich bin wirklich glücklich, dass wir uns kennengelernt haben.

Unsere Freundschaft hat mir viel Freude und viele schöne Momente geschenkt.

Ich war immer glücklich, wenn wir miteinander gesprochen haben, und ich habe jedes Gespräch mit dir genossen. 💜

Manchmal wünsche ich mir, ich könnte heute in Deutschland sein, um diesen besonderen Tag mit dir zu feiern und gemeinsam schöne Erinnerungen zu schaffen. 🎂✨

Du bist ein wunderbarer Mensch, und ich hoffe, dass dein Tag voller Freude, Lachen und Liebe sein wird.

Möge dieses neue Lebensjahr dir Gesundheit, Glück, Erfolg und viele wunderschöne Momente bringen.

Bleib immer so freundlich, lieb und besonders, wie du bist. 💜

Ich hoffe, dass all deine Wünsche in Erfüllung gehen und dass dieses Jahr eines der schönsten Jahre deines Lebens wird. ✨

Vergiss niemals, wie besonders du bist.

Alles Gute zum Geburtstag, meine Lieblingsfreundin! 🎉💜

Dein Freund Anas ❤️

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
}

},80);

};

function createEmoji(){

const item = document.createElement("div");

item.className = "floating";

const emojis = ["💜","✨","🎉","🎂","🎈","❤️"];

item.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

item.style.left = Math.random()*100 + "vw";

item.style.fontSize = (15 + Math.random()*20) + "px";

item.style.animationDuration = (6 + Math.random()*5) + "s";

document.body.appendChild(item);

setTimeout(()=>{
item.remove();
},11000);

}

setInterval(createEmoji,700);