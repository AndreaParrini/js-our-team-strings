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

for (let i = 0; i < teamMember.length; i++) {
    const element = teamMember[i];
    generateCardMember(element);
    
}

/* 
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.
*/

document.getElementById('formmember').addEventListener('submit', function (e) {
    e.preventDefault();
    const newMember = document.getElementById('newmember').value;
    addNewMember(newMember);
})


// creo la funzione per generare le card di ogni membro del team
function generateCardMember(element) { 

    const cardEl = document.createElement('div');
    cardEl.classList.add('card' , 'col-4' , 'bg-primary' , 'p-3' , 'border-light', 'text-center');
    cardEl.innerHTML = element;
    containerEl.appendChild(cardEl);
    cardEl.addEventListener('click', function(){
        cardEl.classList.toggle('bg-danger');
    })

} 

function addNewMember(newMember){
    if (newMember === "") {
        alert('Inserisci un nome valido')
    } else {
        teamMember.push(newMember);
        generateCardMember(newMember);
        document.getElementById('newmember').value = "";
    }

}

// creo la funzione che aggiunge la classe quando si clicca sulla card
/* function addClassMember() {
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
}*/