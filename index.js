

   const char1 = ["A", "B", "C", "D", "E", "F", "G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
   const char2 = ["a", "b", "c", "d", "e", "f", "g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
   const char3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
   const char4 = ["!","@","#","$","%","^","&","*"]
  //  let cap = false
  //  function caps(){
  //     cap = !cap
  //     console.log(cap)
  //     return cap
  //  }
   const a = true
   const b = true
   const c = true
   const d = true

   function ranpass() {
  const combi = [
    ];
    if(a === true){
        combi.push(char1)
    }

    if(b === true){
        combi.push(char2)
    }

    if(c === true){
        combi.push(char3)
    }

    if(d === true){
        combi.push(char4)
    }

    else{
        document.querySelector("h1").textContent= "Please Seslect any one option"
    }

  const generate = combi[Math.floor(Math.random() * combi.length)];
  let generate2 = generate[Math.floor(Math.random() * generate.length)];
  return generate2;
}

ranpass();

function s_line(){
let k = "";
for (i = 0; i < 12; i++) {
  k = k + ranpass();
}
document.querySelector(".h1").textContent = k;
}

s_line()