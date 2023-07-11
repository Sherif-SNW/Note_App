export default class NotesLocalStorageAPI {
    static STORAGE_KEY = 'notesapp-notes';

    static getAllNotes() {
        let notesArray = JSON.parse(localStorage.getItem(NotesLocalStorageAPI.STORAGE_KEY));
        if (notesArray == null) {
            notesArray = [];
        }
        return notesArray;
    }

    static addNote(noteToAdd) {
        const notesArray = NotesLocalStorageAPI.getAllNotes();
        notesArray.unshift(noteToAdd);
        localStorage.setItem(NotesLocalStorageAPI.STORAGE_KEY, JSON.stringify(notesArray))
    }

    static deleteNote(noteID) {
        const notesArray = NotesLocalStorageAPI.getAllNotes();
        const newNotesArray = notesArray.filter((note) => {
            if (note.date != noteID) {
                return note;
            }
        });
        localStorage.setItem(NotesLocalStorageAPI.STORAGE_KEY, JSON.stringify(newNotesArray))
    }

    static updateNote(oldNoteID, noteToUpdate, setNewDate) {
        // const notesArray = NotesLocalStorageAPI.getAllNotes();
        // const newNotesArray = notesArray.filter(note => {
        //     if (note.date != noteToUpdate.date) {
        //         return note;
        //     }
        // });
        // newNotesArray.push(noteToUpdate);
        // localStorage.setItem(NotesLocalStorageAPI.STORAGE_KEY, JSON.stringify(newNotesArray))

        const notesArray = NotesLocalStorageAPI.getAllNotes();

        if (setNewDate == true) {
            const newNotesArray = notesArray.filter((note) => {
                if (note.date != oldNoteID) {
                    return note;
                }
            });
            newNotesArray.unshift(noteToUpdate);
            localStorage.setItem(NotesLocalStorageAPI.STORAGE_KEY, JSON.stringify(newNotesArray))
        } else {

            const oldNote = notesArray.find((note) => {
                if (note.date == noteToUpdate.date) {
                    return note;
                }
            })
            notesArray[notesArray.indexOf(oldNote)] = noteToUpdate;
            localStorage.setItem(NotesLocalStorageAPI.STORAGE_KEY, JSON.stringify(notesArray))
        }

    }
}