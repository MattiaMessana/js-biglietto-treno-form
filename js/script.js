// TEST
// alert("ciao");

//1. Trovo il  bottone nella pagina 
const sendBtnElem = document.getElementById("send-btn"); //object | null
console.log(sendBtnElem, typeof sendBtnElem); 

//2. aggiungo even listener al clik del bottone 
sendBtnElem.addEventListener("click", function() {
    //test
    //console.log("CLICK");

    // RACCOLTA DATI 

        //NOME UTENTE
        const userInputElem = document.getElementById("username"); // object | null
        console.log(userInputElem);

        const nameValue = userInputElem.value; //string
        console.log(nameValue, typeof nameValue);

        //ETA' UTENTE 
        const ageInputElem = document.getElementById("userage"); // object | null
        console.log(ageInputElem);

        const ageValue = parseInt(ageInputElem.value); // number
        console.log(ageValue, typeof ageValue);

        //KM PERCORSI 
        const kmInputElem = document.getElementById("userkm"); // object | null
        console.log(kmInputElem);

        const kmValue = parseInt(kmInputElem.value); // number
        console.log(kmValue, typeof kmValue);

    //ESECUZIO DEL PROGRAMMA 

        //procediamo al calcolo se :
        if (isNaN(kmValue) === false && isNaN(ageValue) === false && kmValue > 0 && ageValue > 0) {
        
        //escezione logica 
        const basePrice = kmValue * 0.21;
        console.log(basePrice);

        let discount = 0;

        if (ageValue < 18) {
            discount = 20;
          } else if (ageValue > 65) {
            discount = 40;
          }

          console.log("discount in %", discount);

          const totalDiscount = (basePrice * discount) / 100; // number
          console.log("discount in euro", totalDiscount);
        
          const finalPrice = basePrice - totalDiscount; // number
          console.log("prezzo finale", finalPrice);

          //OUTPUT
          document.getElementById("passenger").innerHTML = nameValue;
          document.getElementById("price").innerHTML = basePrice.toFixed(2);
          document.getElementById("d").innerHTML = discount;
          document.getElementById("finalprice").innerHTML = finalPrice.toFixed(2);
          
}
        else {
            // Se i dati sono sbagliati
            alert("Dati non ammessi");
        }});

