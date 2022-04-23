const oldNotes = document.getElementById("oldNotes")
const newNote = document.getElementById("user_input")

let finishedNote = "";
// const noteTemplate = 

newNote.addEventListener("change", (event) => {
    let newInput = event.target.value;
    const noteTemplate = '<div class="oldNote"> <button class="mainButton" type="button"></button><h2>'; 
    const noteTemplate2 = '</h2><img class="exitButton" src="references/images/icon-cross.svg" alt="bruh"></div>';

    finishedNote = noteTemplate + newInput + noteTemplate2;
    oldNotes.insertAdjacentHTML('beforeend',finishedNote)
});


