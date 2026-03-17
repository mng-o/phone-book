const nameInput = document.querySelector(".imie");
const number = document.querySelector(".numer");
const add = document.querySelector(".dodaj");
const list = document.querySelector(".list");
let kontakty = JSON.parse(localStorage.getItem("kontakty")) || [];

value = 0;

number.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        add.click();
    }
});

add.addEventListener("click", function(){
    const imie = nameInput.value
    const numer = number.value

    const phoneBook = {
        imie: imie,
        numer: numer
    }

    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.textContent = `${phoneBook.imie} - ${phoneBook.numer}`;
    list.appendChild(li);
    btn.textContent = " usuń ";
    li.appendChild(btn);

    btn.addEventListener("click", function(){
        li.remove();
    })
    kontakty.push(phoneBook);
    localStorage.setItem("kontakty", JSON.stringify(kontakty));
})

const zapisane = JSON.parse(localStorage.getItem("kontakty"));

zapisane.forEach(function(kontakt, index) {
    const li = document.createElement("li");
    li.textContent = `${kontakt.imie} - ${kontakt.numer}`;
    list.appendChild(li);
    const btn = document.createElement("button");
    btn.textContent = "usuń";
    li.appendChild(btn);

    btn.addEventListener("click", function(){
        kontakty.splice(index, 1);
        localStorage.setItem("kontakty", JSON.stringify(kontakty));
        li.remove();
    })
});