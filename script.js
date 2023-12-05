/* 
MILESTONE 0:
Creare l’array di stringhe contenente i nomi dei membri del team.
*/

const teamMember = ['Andrea', 'Luca', 'Filippo'];

/* 
MILESTONE 1:
Stampare le informazioni su DOM come card.
*/

const containerEl = document.querySelector('.container');

generateCardMember();

/* 
MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
*/

addClassMember();

/* 
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.
*/

document.getElementById('add').addEventListener('click', function () {
    const newMember = document.getElementById('newmember').value;
    if (newMember === "") {
        alert('Inserisci un nome valido')
    } else {
        teamMember.push(newMember);
        containerEl.innerHTML = "";
        generateCardMember();
        addClassMember();
        document.getElementById('newmember').value = "";
    }

})

document.getElementById('evidenzia').addEventListener('click', function(){
    for (let i = 0; i < teamMember.length; i++) {
        const element = document.getElementById(`card${i}`);
        console.log(element);
        element.classList.add('bg-danger');
    }
    document.getElementById('deseleziona').classList.remove('d-none');
})

document.getElementById('deseleziona').addEventListener('click', function(){
    for (let i = 0; i < teamMember.length; i++) {
        const element = document.getElementById(`card${i}`);
        console.log(element);
        element.classList.remove('bg-danger');
    }
    document.getElementById('deseleziona').classList.add('d-none');
})

// creo la funzione per generare le card di ogni membro del team
function generateCardMember() {

    for (let i = 0; i < teamMember.length; i++) {
        const element = teamMember[i];
        const cardEl = `<div id= "card${i}" class='card bg-primary p-3 my-2 text-center text-light'> ${element} </div>`;
        containerEl.insertAdjacentHTML('beforeend', cardEl);
    }

}

// creo la funzione che aggiunge la classe quando si clicca sulla card
function addClassMember() {
    for (let i = 0; i < teamMember.length; i++) {
        const element = document.getElementById(`card${i}`);
        console.log(element);
        element.addEventListener('click', function () {
            if (!element.classList.contains('bg-danger')) {
                element.classList.add('bg-danger')
            } else {
                element.classList.remove('bg-danger')
            }

        })
    }
}