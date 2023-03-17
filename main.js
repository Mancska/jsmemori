const LISTA = [
  "kepek/sarkany.png",
  "kepek/sarkany2.png",
  "kepek/szita.png",
  "kepek/sarkany.png",
  "kepek/sarkany2.png",
  "kepek/szita.png",
  
];
const HATTER=["kepek/ace.png"];
let db = 0;
const KIVALASZTOTTKEPEK=[];
$(function () {
  

  const FELSO_ELEMEK = $("#felso");
  let tartalom = osszeAllit();
  FELSO_ELEMEK.append(tartalom);
  const FELSO_KEPEK = $("#felso img ");
  FELSO_KEPEK.on("click", kepreKattintas);
});
function osszeAllit() {
  let txt = "";
  for (let index = 0; index < LISTA.length; index++) {
    txt += `<div><img src="kepek/ace.png" alt="" id="${index}"></div>`;
  }
  console.log(txt);
  return txt;
}
function kepreKattintas() {
  const aktKep = event.target;
  console.log(aktKep.id);
  console.log($(aktKep).attr("id"));
  aktKep.src = LISTA[aktKep.id];
  KIVALASZTOTTKEPEK.push($(aktKep).attr("id"))
  db++;
  if (db == 2) {
    db = 0;
    visszafordit();
    
  }
}

function visszafordit() {

console.log(KIVALASZTOTTKEPEK )

setTimeout(function(){
    const FELSOKEP=$("#felso img");
    let aktKep=FELSOKEP.eq(KIVALASZTOTTKEPEK[0]);
    $(aktKep).attr("src","kepek/ace.png")
    console.log(aktKep)
   
    aktKep=FELSOKEP.eq(KIVALASZTOTTKEPEK[1])
    $(aktKep).attr("src","kepek/ace.png")
    KIVALASZTOTTKEPEK.pop
    KIVALASZTOTTKEPEK.pop

},1000)
}
