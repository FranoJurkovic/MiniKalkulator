document.addEventListener("DOMContentLoaded", function(){
    const prvi = document.getElementById("prvi");
    const drugi = document.getElementById("drugi");
    const tipke = document.querySelectorAll("button");
    const rezultatP = document.querySelector(".rezultat");

    function zbroj(a, b){
        return a + b;
    }

    function oduzimanje(a, b){
        return a - b;
    }

    function množenje(a, b){
        return a * b;
    }

    function dijeljenje(a, b){
        if(b === 0){
            return "Nije moguće dijeliti s nulom!";
        } else {
            return a / b;
        }
    }
    function promijeniBojuRezultata(rezultat) {
        if (rezultat > 100) {
            rezultatP.style.color = "red"; // Promijeni boju u crvenu ako je rezultat veći od 10
        }
        else if(rezultat>50){
            rezultatP.style.color= "orange";
        }
        else {
            rezultatP.style.color = "black"; // Inače vrati boju na crnu
        }
    }

    function računanje(event){
        const operacija = event.target.textContent;
        const broj1 = parseFloat(prvi.value);
        const broj2 = parseFloat(drugi.value);

        // Provjera da li su oba unosa validni brojevi
        if (isNaN(broj1) || isNaN(broj2)) {
            rezultatP.textContent = "Molimo unesite ispravne brojeve.";
            alert("Molimo unesite ispravne brojeve.");
            return; // Prekini izvršavanje funkcije ako nisu uneseni validni brojevi
        }

        let rezultat;
        switch (operacija) {
            case '+':
                rezultat = zbroj(broj1, broj2);
                break;
            case '-':
                rezultat = oduzimanje(broj1, broj2);
                break;
            case '*':
                rezultat = množenje(broj1, broj2);
                break;
            case '/':
                rezultat = dijeljenje(broj1, broj2);
                break;
            default:
                rezultat = "Nepoznata operacija";
        }
        rezultatP.textContent = `Rezultat: ${rezultat}`;
        promijeniBojuRezultata(rezultat);
    }

    tipke.forEach(function(tipka) {
        tipka.addEventListener("click", računanje);
    });
});
