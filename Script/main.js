import NotesLocalStorageAPI from './NotesLocalStorage-API.js'
import NoteAppBuilder from './NoteAppBuilder.js'

const root = document.querySelector('.app');
const notesArray = NotesLocalStorageAPI.getAllNotes();

const noteAppBuilder = new NoteAppBuilder(root, {
    onAddCallback(noteObject) {
        NotesLocalStorageAPI.addNote(noteObject);
        // noteAppBuilder.refresh(NotesLocalStorageAPI.getAllNotes());
    },
    onDeleteCallback(noteID) {
        NotesLocalStorageAPI.deleteNote(noteID);
    },
    onUpdateCallback(oldNoteID,noteObject , setNewDate) {
        NotesLocalStorageAPI.updateNote(oldNoteID , noteObject , setNewDate);
    },
    onSearchCallback(noteIDs){
         const notesArray = NotesLocalStorageAPI.getAllNotes();
         return notesArray.filter( (note) => {
            if(noteIDs.includes(note.date)){
                return note;
            }
         });
    }
})



noteAppBuilder.refresh(notesArray);





