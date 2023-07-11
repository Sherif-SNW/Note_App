export default class NoteAppBuilder {
    MAX_CHARACTERS_BODY = 80;
    MAX_CHARACTERS_TITLE = 30;
    favoriteSVG = `
        <div class="title__svg-wrapper">            
            <svg fill="#ffd500" viewBox="-100 -100 1200.00 1200.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffd500" transform="matrix(1, 0, 0, 1, 0, 0)">
                <g id="SVGRepo_bgCarrier" stroke-width="0">
                    <rect x="-100" y="-100" width="1200.00" height="1200.00" rx="600" strokewidth="0" />
                </g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M476 801l-181 95q-18 10-36.5 4.5T229 879t-7-36l34-202q2-12-1.5-24T242 596L95 453q-15-14-15.5-33.5T91 385t32-18l203-30q12-2 22-9t16-18l90-184q10-18 28-25t36 0 28 25l90 184q6 11 16 18t22 9l203 30q20 3 32 18t11.5 34.5T905 453L758 596q-8 9-12 21t-2 24l34 202q4 20-7 36t-29.5 21.5T705 896l-181-95q-11-6-24-6t-24 6z" />
                </g>
            </svg>
        </div>
        `;
    constructor(rootElement, { onAddCallback, onUpdateCallback, onDeleteCallback, onSearchCallback } = {}) {
        this.rootElement = rootElement;
        this.onAddCallback = onAddCallback;
        this.onUpdateCallback = onUpdateCallback;
        this.onDeleteCallback = onDeleteCallback;
        this.onSearchCallback = onSearchCallback;
        this.rootElement.innerHTML = `
                <section class="app__control-section">

                <h1 class="control-section__logo">Control</h1>

                <svg class="control-section__add-note-icon" viewBox="0 0 15 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                        stroke-width="0.03" />
                    <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM7 11V8H4V7H7V4H8V7H11V8H8V11H7Z" />
                    </g>
                </svg>

                <svg class="control-section__filter-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(90)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        <path d="M5 12L5 4" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        <path d="M19 20L19 18" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        <path d="M5 20L5 16" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        <path d="M19 12L19 4" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        <path d="M12 7L12 4" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        <path d="M12 20L12 12" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        <circle cx="5" cy="14" r="2" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        <circle cx="12" cy="9" r="2" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        <circle cx="19" cy="15" r="2" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                    </g>
                </svg>

                <div class="control-section__filter-container">
                    <label class="color1" for="color1-checkbox"><input type="checkbox" name="color"
                            id="color1-checkbox"></label>
                    <label class="color2" for="color2-checkbox"><input type="checkbox" name="color"
                            id="color2-checkbox"></label>
                    <label class="color3" for="color3-checkbox"><input type="checkbox" name="color"
                            id="color3-checkbox"></label>
                    <label class="color4" for="color4-checkbox"><input type="checkbox" name="color"
                            id="color4-checkbox"></label>
                    <label class="color5" for="color5-checkbox"><input type="checkbox" name="color"
                            id="color5-checkbox"></label>
                    <label class="favorite" for="favorite-checkbox">
                        <input type="checkbox" name="color" id="favorite-checkbox">
                        <svg fill="#ffd500" viewBox="-100 -100 1200.00 1200.00" xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffd500" transform="matrix(1, 0, 0, 1, 0, 0)">
                            <g id="SVGRepo_bgCarrier" stroke-width="0">
                                <rect x="-100" y="-100" width="1200.00" height="1200.00" rx="600" strokewidth="0" />
                            </g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M476 801l-181 95q-18 10-36.5 4.5T229 879t-7-36l34-202q2-12-1.5-24T242 596L95 453q-15-14-15.5-33.5T91 385t32-18l203-30q12-2 22-9t16-18l90-184q10-18 28-25t36 0 28 25l90 184q6 11 16 18t22 9l203 30q20 3 32 18t11.5 34.5T905 453L758 596q-8 9-12 21t-2 24l34 202q4 20-7 36t-29.5 21.5T705 896l-181-95q-11-6-24-6t-24 6z" />
                            </g>
                        </svg>
                    </label>
                </div>

            </section>

            
        <section class="app__content-section">
        <div class="content-section__search-theme">
            <div class="content-section__search">
                <label for="search-input">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L21.2929 22.7071ZM17 10C17 13.866 13.866 17 10 17V19C14.9706 19 19 14.9706 19 10H17ZM10 17C6.13401 17 3 13.866 3 10H1C1 14.9706 5.02944 19 10 19V17ZM3 10C3 6.13401 6.13401 3 10 3V1C5.02944 1 1 5.02944 1 10H3ZM10 3C13.866 3 17 6.13401 17 10H19C19 5.02944 14.9706 1 10 1V3ZM14.7929 16.2071L21.2929 22.7071L22.7071 21.2929L16.2071 14.7929L14.7929 16.2071Z" />
                        </g>

                    </svg>
                </label>
                <input type="text" id="search-input" class="search__input" placeholder="Search">
            </div>
            <div class="content-section__toggle-theme">
                <label for="toggle-theme__btn">
                    <input type="checkbox" name="theme" id="toggle-theme__btn">

                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" ">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    
                    <g id="SVGRepo_iconCarrier"> <g> <circle fill-rule="evenodd" clip-rule="evenodd" cx="32.003" cy="32.005" r="16.001"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4 s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656 c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4 s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004 s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M60.006,27.997l-4.009,0.008 c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4 C64.002,29.79,62.217,27.997,60.006,27.997z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657 c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4 c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004 c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653 L12.212,17.855z"/> </g> </g>
                    
                    </svg>
                </label>
            </div>
        </div>

        <h2 class="content-section__title">Notes</h2>
        <div class="content-section__notes-area">
        </div>
        
    </section>

                `;
        this.notesArea = this.rootElement.querySelector('.content-section__notes-area');

        // Envent listener on Add button at the Control Section
        this.rootElement.querySelector('.control-section__add-note-icon').addEventListener('click', () => {
            this._newNotePopup();
        })
        
        this.rootElement.querySelector('.control-section__filter-container').addEventListener('click', (eventObject) => {
            let selectedColorFilters = [];
            let filterFavorite = false;
            if (eventObject.target.tagName == 'LABEL') {
                eventObject.target.classList.toggle('filter-item--checked');

                eventObject.currentTarget.querySelectorAll('.filter-item--checked').forEach(filter => {
                    if (filter.classList[0] == 'favorite') {
                        filterFavorite = true;
                    } else {
                        selectedColorFilters.push(filter.classList[0]);
                    }
                });
                this._filter2(selectedColorFilters, filterFavorite);
            }
        })

        this.rootElement.querySelector('#search-input').addEventListener('input', (eventObject) => {
            this._search(eventObject.target.value)
        })

        // Envent listener on toggole button
        this.rootElement.querySelector('label[for="toggle-theme__btn"]').addEventListener('click',(eventObject)=>{
            if(eventObject.target.tagName == 'INPUT'){
                if(eventObject.target.checked){
                    eventObject.currentTarget.classList.add('content-section__toggle-theme-checked');
                    document.documentElement.classList.replace('light','dark');

                }
                else{
                    eventObject.currentTarget.classList.remove('content-section__toggle-theme-checked');
                    document.documentElement.classList.replace('dark','light');


                }

            }
        })

    }

    _search(inputText) {
        inputText = inputText.toLowerCase();
        const displayedNoteNodes = this.notesArea.querySelectorAll('.notes-area__note:not(.utility-display-none-filter)');

        if (inputText == '') {
            const hiddenNoteNodes = this.notesArea.querySelectorAll('.notes-area__note.utility-display-none-search')
            hiddenNoteNodes.forEach(noteNode => {
                noteNode.classList.remove('utility-display-none-search');
            })
            
        }
        else {
            let IDs = [];
            displayedNoteNodes.forEach(noteNode => {
                IDs.push(noteNode.dataset.noteId);
            })

            const noteObjectsArray = this.onSearchCallback(IDs);
            let index = 0;
            noteObjectsArray.forEach((noteObject) => {
                if (!(noteObject.title.toLowerCase().includes(inputText) || noteObject.body.toLowerCase().includes(inputText))) {
                    displayedNoteNodes[index].classList.add('utility-display-none-search');
                }
                else{
                    displayedNoteNodes[index].classList.remove('utility-display-none-search');
                }
                index++;
            });
        }

    }
    _filterTHEOLD(selectedColorFilters, filterFavorite) {
        const notesNodesArray = this.notesArea.querySelectorAll('.notes-area__note');
        let displayedNotes = []
        if (selectedColorFilters.length == 0 && !filterFavorite) {
            notesNodesArray.forEach(noteNode => {
                noteNode.classList.remove('utility-display-none');
            })
        }
        else {
            if (selectedColorFilters.length > 0) {

                notesNodesArray.forEach(noteNode => {

                    const nodeColor = noteNode.classList[1];

                    if (!selectedColorFilters.includes(nodeColor)) {
                        // hide note
                        noteNode.classList.add('utility-display-none');
                    }
                    else {
                        // show note
                        noteNode.classList.remove('utility-display-none');
                        displayedNotes.push(noteNode);
                    }


                });
            }
            if (filterFavorite) {

                if (displayedNotes.length == 0) {

                    notesNodesArray.forEach(noteNode => {

                        const isFavoriteNode = noteNode.querySelector('.title__svg-wrapper') ? true : false;

                        if (isFavoriteNode) {
                            // show note
                            noteNode.classList.remove('utility-display-none');
                        }
                        else {
                            // hide note
                            noteNode.classList.add('utility-display-none');
                        }


                    });
                } else {
                    displayedNotes.forEach(noteNode => {
                        const isFavoriteNode = noteNode.querySelector('.title__svg-wrapper') ? true : false;

                        if (isFavoriteNode) {
                            // show note
                            noteNode.classList.remove('utility-display-none');
                        }
                        else {
                            // hide note
                            noteNode.classList.add('utility-display-none');
                        }


                    });
                }
            }

        }
    }
    _filter2(selectedColorFilters, filterFavorite) {
        const notesNodesArray = this.notesArea.querySelectorAll('.notes-area__note');

        if (selectedColorFilters.length == 0 && !filterFavorite) {
            notesNodesArray.forEach(noteNode => {
                noteNode.classList.remove('utility-display-none-filter');
            })
        }
        else {
            notesNodesArray.forEach(noteNode => {
                const nodeColor = noteNode.classList[1];
                const isFavoriteNode = noteNode.querySelector('.title__svg-wrapper') ? true : false;

                if (filterFavorite) {
                    if (isFavoriteNode && selectedColorFilters.includes(nodeColor)) {
                        noteNode.classList.remove('utility-display-none-filter');
                    } else if (isFavoriteNode && selectedColorFilters.length == 0) {
                        noteNode.classList.remove('utility-display-none-filter');
                    } else {
                        noteNode.classList.add('utility-display-none-filter');
                    }
                }
                else {

                    if (selectedColorFilters.includes(nodeColor)) {
                        noteNode.classList.remove('utility-display-none-filter');
                    }
                    else {
                        noteNode.classList.add('utility-display-none-filter');
                    }
                }
            })



        }

        this._search(this.rootElement.querySelector('#search-input').value)
    }

    refresh(notesArray) {
        // sort notes by the newest
        notesArray = notesArray.sort((note1, note2) => {
            return new Date(note1.date) > new Date(note2.date) ? -1 : 1;
        });

        // Remove all notes
        // this.notesArea.innerHTML = '';
        notesArray.forEach((noteObject) => {
            const noteNode = this._createNoteNode(noteObject);
            this.notesArea.appendChild(noteNode);
            this._noteEventListeners(noteObject, noteNode);
        });

        // empty note area message
        const addNoteSVG = `            
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                stroke-width="0.03" />
            <g id="SVGRepo_iconCarrier">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM7 11V8H4V7H7V4H8V7H11V8H8V11H7Z" />
            </g>
        </svg>`
        this.notesArea.insertAdjacentHTML('beforeend', `<div class= "notes-area__message"><h1>Click on ${addNoteSVG} to add new note</h1></div>`)
    }

    _newNotePopup() {
        const newNotePopup_HTML = `
        <div class="app__popup">
            <div class="popup__add-note-modal">
                <div class="add-note-modal__modal-header">
                    <h2>New Note</h2>
                    <div class="add-note-modal__favorite-checkbox">
                        <input type="checkbox" id="favorite-option">
                        <label for="favorite-option">
                            <svg fill="#ffd500" viewBox="-100 -100 1200.00 1200.00" xmlns="http://www.w3.org/2000/svg"
                                stroke="#ffd500" transform="matrix(1, 0, 0, 1, 0, 0)">
                                <g id="SVGRepo_bgCarrier" stroke-width="0">
                                    <rect x="-100" y="-100" width="1200.00" height="1200.00" rx="600" strokewidth="0" />
                                </g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M476 801l-181 95q-18 10-36.5 4.5T229 879t-7-36l34-202q2-12-1.5-24T242 596L95 453q-15-14-15.5-33.5T91 385t32-18l203-30q12-2 22-9t16-18l90-184q10-18 28-25t36 0 28 25l90 184q6 11 16 18t22 9l203 30q20 3 32 18t11.5 34.5T905 453L758 596q-8 9-12 21t-2 24l34 202q4 20-7 36t-29.5 21.5T705 896l-181-95q-11-6-24-6t-24 6z" />
                                </g>
                            </svg>
                        </label>
                    </div>
                </div>
                
                <div class="add-note-modal__title-container">
                    <!-- test error start -->
                    <p class="error-massege">* Note title is requried</p>
                    <!-- test error end -->
                    <input class="add-note-modal__title" type="text" placeholder="Note Title...">

                </div>

                <div class="add-note-modal__body-container">
                    <!-- test error start -->
                    <p class="error-massege">* Note body is requried</p>
                    <!-- test error end -->

                    <textarea class="add-note-modal__body" placeholder="Note Body..."></textarea>
                </div>

                <div class="add-note-modal__modal-footer">
                    <!-- test error start -->
                    <!-- <p class="error-massege">* Please choose a color</p> -->
                    <!-- test error end -->

                    <div class="modal-footer__color-picker">
                        <h3>Choose a color</h3>
                        <p class="error-massege">* Please choose a color</p>
                        <div class="color-picker__list">
                            <label class="color1" for="color1-radio-modal"><input type="radio" name="color"
                                    id="color1-radio-modal"></label>
                            <label class="color2" for="color2-radio-modal"><input type="radio" name="color"
                                    id="color2-radio-modal"></label>
                            <label class="color3" for="color3-radio-modal"><input type="radio" name="color"
                                    id="color3-radio-modal"></label>
                            <label class="color4" for="color4-radio-modal"><input type="radio" name="color"
                                    id="color4-radio-modal"></label>
                            <label class="color5" for="color5-radio-modal"><input type="radio" name="color"
                                    id="color5-radio-modal"></label>
                        </div>
                    </div>
                    
                    <div class="modal-footer__btn">
                        <button class="cancel">Cancel</button>
                        <button class="create">Create</button>
                    </div>
                </div>
                
            </div>
        </div>`;
        this.rootElement.insertAdjacentHTML('beforeend', newNotePopup_HTML);

        const appPopUp = this.rootElement.querySelector('.app__popup');
        //animation
        const popUpDialog = appPopUp.children[0];
        setTimeout(() => { popUpDialog.classList.add('popup__add-note-modal--show-animation') }, 50);
        // end

        let isFavorite = false;

        const noteTitle = appPopUp.querySelector('.add-note-modal__title');
        const noteBody = appPopUp.querySelector('.add-note-modal__body');
        const radioColorList = appPopUp.querySelector(".color-picker__list");

        appPopUp.addEventListener('click', (eventObject) => {

            // Exit the from the Pop-up
            if (eventObject.target.className == 'cancel') {

                //animation
                popUpDialog.classList.remove('popup__add-note-modal--show-animation');
                setTimeout(() => { appPopUp.remove() }, 200);
            }
            // Favorite check
            if (eventObject.target.classList.contains('add-note-modal__favorite-checkbox')) {

                eventObject.target.children[0].toggleAttribute('checked')
                eventObject.target.classList.toggle('add-note-modal__favorite-checkbox--checked')
                isFavorite = !isFavorite;

            }
            // Radio colors
            if (eventObject.target.getAttribute('type') == 'radio') {

                appPopUp.querySelectorAll('input[name=color]').forEach(radioBtn => {
                    if (radioBtn == eventObject.target) {
                        radioBtn.parentElement.classList.add('color-picker__color--selected');
                    }
                    else {
                        radioBtn.parentElement.classList.remove('color-picker__color--selected');

                    }
                })
            }

            // Create new note
            if (eventObject.target.className == 'create') {
                const selectedRadioColor = radioColorList.querySelector("input[type='radio']:checked");
                const selectedRadioColorValue = selectedRadioColor ? selectedRadioColor.parentElement.classList[0] : '';
                let isValid = true;

                [noteTitle, noteBody].forEach(element => {
                    if (element.value == '') {
                        element.previousElementSibling.classList.add('error-massege-active');
                        isValid = false;
                    } else {
                        element.previousElementSibling.classList.remove('error-massege-active');
                    }
                });
                if (selectedRadioColorValue == '') {
                    radioColorList.previousElementSibling.classList.add('error-massege-active');
                    isValid = false;
                } else {
                    radioColorList.previousElementSibling.classList.remove('error-massege-active');
                }

                if (isValid) {

                    const note = {
                        title: noteTitle.value.trim(),
                        body: noteBody.value.trim(),
                        isFavorite: isFavorite,
                        color: selectedRadioColorValue,
                        date: new Date()
                    };
                    this.onAddCallback(note);
                    this._appendNoteNode(note);
                    //animation
                    popUpDialog.classList.remove('popup__add-note-modal--show-animation');
                    setTimeout(() => { appPopUp.remove() }, 200);
                }

            }
        })


    }

    _createNoteHTML(noteObject) {
        const date = new Date(noteObject.date);
        const noteTitleHTML = `
                <div class="note__title">
                    <h3>${noteObject.title.substring(0, this.MAX_CHARACTERS_TITLE)}${noteObject.title.length > this.MAX_CHARACTERS_TITLE ? '...' : ''}</h3>
                    ${noteObject.isFavorite ? this.favoriteSVG : ''}
                </div>
            `;
        const noteBodyHTML = `
            <p class="note__body">${noteObject.body.substring(0, this.MAX_CHARACTERS_BODY)}${noteObject.body.length > this.MAX_CHARACTERS_BODY ? '...' : ''}</p>`
            ;
        const noteFooterTimeHTML = `
            <div class="footer__time">
            <p>${date.toLocaleDateString(undefined, { weekday: "short" })} ${date.toLocaleDateString()}</p>
            <p>${date.toLocaleTimeString(undefined, { timeStyle: "medium" })}</p>
            </div>
        `;

        // Return note HTML
        return ` 
        <article class="notes-area__note ${noteObject.color}" data-note-id="${noteObject.date}">
            ${noteTitleHTML}
            ${noteBodyHTML}
        <div class="note__footer">
           ${noteFooterTimeHTML}
            <div class="footer__menu">
                <div class="menu__icon" tabindex= "3">
                    <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 342.382 342.382" xml:space="preserve" transform="rotate(90)">
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                    <g>
                                        <path d="M45.225,125.972C20.284,125.972,0,146.256,0,171.191c0,24.94,20.284,45.219,45.225,45.219 c24.926,0,45.219-20.278,45.219-45.219C90.444,146.256,70.151,125.972,45.225,125.972z" />
                                    </g>
                                    <g>
                                        <path d="M173.409,125.972c-24.938,0-45.225,20.284-45.225,45.219c0,24.94,20.287,45.219,45.225,45.219 c24.936,0,45.226-20.278,45.226-45.219C218.635,146.256,198.345,125.972,173.409,125.972z" />
                                    </g>
                                    <g>
                                        <path d="M297.165,125.972c-24.932,0-45.222,20.284-45.222,45.219c0,24.94,20.29,45.219,45.222,45.219 c24.926,0,45.217-20.278,45.217-45.219C342.382,146.256,322.091,125.972,297.165,125.972z" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="menu__action-btns | utility-display-none">
                <button class="action-btns__favorite"> ${noteObject.isFavorite ? 'Remove' : 'Add'} favorite</button>
                <button class="action-btns__edit">Edit</button>
                    <button class="action-btns__delete">Delete</button>
                </div>
            </div>
        </div>
    </article>`
    }

    _createNoteNode(noteObject) {
        const noteHTML = this._createNoteHTML(noteObject);
        const noteNode = new DOMParser().parseFromString(noteHTML, "text/html").documentElement.childNodes[1].childNodes[0];
        return noteNode;
    }

    _noteEventListeners(noteObject, noteNode) {

        const footerMenu = noteNode.querySelector('.footer__menu');
        const [footerMenuIcon, menuActionBtns] = footerMenu.children;
        const [favoriteBtn, editBtn, deleteBtn] = menuActionBtns.children;

        // Open actions menu
        footerMenuIcon.addEventListener('click', (eventObject) => {
            menuActionBtns.classList.toggle('utility-display-none');
        });
        footerMenuIcon.addEventListener('blur', (eventObject) => {

            setTimeout(() => {
                menuActionBtns.classList.add('utility-display-none');

            }, 300);

        });
        // Event listener on action buttons
        [favoriteBtn, editBtn, deleteBtn].forEach(btn => {
            btn.addEventListener('click', (eventObject) => {
                if (eventObject.target.className == 'action-btns__favorite') {
                    this._changeFavoriteState(!noteObject.isFavorite, noteNode, noteObject);
                }
                if (eventObject.target.className == 'action-btns__delete' && !this.rootElement.querySelector('.app__delete-dialog')) {
                    this._deleteNoteNode(noteNode);
                }
                if (eventObject.target.className == 'action-btns__edit') {
                    this._editNoteNode(noteObject, noteNode);
                }

            })
        })

    }

    _appendNoteNode(noteObject) {
        const noteNode = this._createNoteNode(noteObject);
        this.notesArea.insertAdjacentElement('afterbegin', noteNode);
        this._noteEventListeners(noteObject, noteNode);
    }

    _deleteNoteNode(noteNode) {
        // const note = noteArea.querySelector(`[data-note-id="${noteID}"]`);
        const deleteIconSVG = ` <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
        
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        
        <g id="SVGRepo_iconCarrier"> 
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.625 7.00008L14.5217 6.78908C13.9873 5.69263 12.8947 5 11.6995 5C10.5044 5 9.4118 5.69263 8.8774 6.78908L8.77502 7.00008H14.625Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
            <path d="M10.6117 11.8095C10.3225 11.513 9.84769 11.507 9.55111 11.7961C9.25453 12.0853 9.24852 12.5601 9.53769 12.8567L10.6117 11.8095ZM11.163 14.5237C11.4522 14.8203 11.927 14.8263 12.2236 14.5371C12.5202 14.248 12.5262 13.7731 12.237 13.4765L11.163 14.5237ZM9.53769 15.1435C9.24852 15.4401 9.25453 15.915 9.55111 16.2041C9.84769 16.4933 10.3225 16.4873 10.6117 16.1907L9.53769 15.1435ZM12.237 14.5237C12.5262 14.2271 12.5202 13.7523 12.2236 13.4631C11.927 13.174 11.4522 13.18 11.163 13.4765L12.237 14.5237ZM13.8623 12.8567C14.1515 12.5601 14.1455 12.0853 13.8489 11.7961C13.5523 11.507 13.0775 11.513 12.7883 11.8095L13.8623 12.8567ZM11.163 13.4765C10.8738 13.7731 10.8799 14.248 11.1764 14.5371C11.473 14.8263 11.9478 14.8203 12.237 14.5237L11.163 13.4765ZM12.7883 16.1907C13.0775 16.4873 13.5523 16.4933 13.8489 16.2041C14.1455 15.915 14.1515 15.4401 13.8623 15.1435L12.7883 16.1907ZM12.237 13.4765C11.9478 13.18 11.473 13.174 11.1764 13.4631C10.8799 13.7523 10.8738 14.2271 11.163 14.5237L12.237 13.4765ZM16.575 7.75012C16.9892 7.75012 17.325 7.41434 17.325 7.00012C17.325 6.58591 16.9892 6.25012 16.575 6.25012V7.75012ZM14.625 6.25012C14.2108 6.25012 13.875 6.58591 13.875 7.00012C13.875 7.41434 14.2108 7.75012 14.625 7.75012V6.25012ZM6.82501 6.25012C6.4108 6.25012 6.07501 6.58591 6.07501 7.00012C6.07501 7.41434 6.4108 7.75012 6.82501 7.75012V6.25012ZM8.77501 7.75012C9.18923 7.75012 9.52501 7.41434 9.52501 7.00012C9.52501 6.58591 9.18923 6.25012 8.77501 6.25012V7.75012ZM7.53894 18.2679L7.00194 18.7915L7.00194 18.7915L7.53894 18.2679ZM6.82501 16.5001H7.57501H6.82501ZM9.53769 12.8567L11.163 14.5237L12.237 13.4765L10.6117 11.8095L9.53769 12.8567ZM10.6117 16.1907L12.237 14.5237L11.163 13.4765L9.53769 15.1435L10.6117 16.1907ZM12.7883 11.8095L11.163 13.4765L12.237 14.5237L13.8623 12.8567L12.7883 11.8095ZM13.8623 15.1435L12.237 13.4765L11.163 14.5237L12.7883 16.1907L13.8623 15.1435ZM16.575 6.25012H14.625V7.75012H16.575V6.25012ZM6.82501 7.75012H8.77501V6.25012H6.82501V7.75012ZM7.63719 9.75012H15.7628V8.25012H7.63719V9.75012ZM15.7628 9.75012C15.7739 9.75012 15.7864 9.75363 15.8001 9.76768C15.8142 9.78206 15.825 9.80384 15.825 9.83312H17.325C17.325 8.97687 16.6434 8.25012 15.7628 8.25012V9.75012ZM15.825 9.83312V16.5001H17.325V9.83312H15.825ZM15.825 16.5001C15.825 17.4846 15.0517 18.2501 14.1375 18.2501V19.7501C15.9157 19.7501 17.325 18.277 17.325 16.5001H15.825ZM14.1375 18.2501H9.26251V19.7501H14.1375V18.2501ZM9.26251 18.2501C8.82117 18.2501 8.39395 18.0705 8.07594 17.7443L7.00194 18.7915C7.59816 19.403 8.41092 19.7501 9.26251 19.7501V18.2501ZM8.07594 17.7443C7.7573 17.4175 7.57501 16.9703 7.57501 16.5001H6.07501C6.07501 17.356 6.40634 18.1806 7.00194 18.7915L8.07594 17.7443ZM7.57501 16.5001V9.83312H6.07501V16.5001H7.57501ZM7.57501 9.83312C7.57501 9.80384 7.58587 9.78206 7.59989 9.76768C7.61359 9.75363 7.62614 9.75012 7.63719 9.75012V8.25012C6.75664 8.25012 6.07501 8.97687 6.07501 9.83312H7.57501Z" /> </g>
        
        </svg>`;
        const deletePopup = this._alertHTML(deleteIconSVG, 'Are you sure you want to delete this note?', 'Cancel', 'Delete');
        this.rootElement.appendChild(deletePopup);
        //animation
        setTimeout(() => { deletePopup.children[0].classList.add('app__delete-dialog--show-animation') }, 50);

        deletePopup.addEventListener('click', (eventObject) => {
            if (eventObject.target.className == 'btn__cancel') {
                // animation
                deletePopup.children[0].classList.remove('app__delete-dialog--show-animation');
                setTimeout(() => { deletePopup.remove() }, 200);


            }
            if (eventObject.target.className == 'btn__delete') {
                this.onDeleteCallback(noteNode.dataset.noteId);
                noteNode.remove();
                // animation
                deletePopup.children[0].classList.remove('app__delete-dialog--show-animation');
                setTimeout(() => { deletePopup.remove() }, 200);
            }
        });
    }

    _changeFavoriteState(setFavorite, noteNode, noteObject) {
        const noteID = noteNode.dataset.noteId;
        const noteTitle = noteNode.querySelector('.note__title');
        const favoriteBtn = noteNode.querySelector('.action-btns__favorite');

        if (setFavorite == true) {
            noteTitle.insertAdjacentHTML('beforeend', this.favoriteSVG);
            favoriteBtn.innerText = 'Remove favorite';

        }
        else if (setFavorite == false) {
            noteTitle.children[1].remove(); // second child which is the SVG
            favoriteBtn.innerText = 'Add favorite';

        }
        noteObject.isFavorite = setFavorite;
        this.onUpdateCallback(undefined, noteObject, false);

    }

    _editNoteNode(noteObject, noteNode) {
        const editNotePopup_HTML = `
        <div class="app__popup">
        <div class="popup__add-note-modal">
            <div class="add-note-modal__modal-header">
                <h2>Edit Note</h2>
                <!-- <div class="add-note-modal__favorite-checkbox ${noteObject.isFavorite ? 'add-note-modal__favorite-checkbox--checked' : ''} ">
                    <input type="checkbox" id="favorite-option" ${noteObject.isFavorite ? 'checked' : ''}>
                    <label for="favorite-option">
                        <svg fill="#ffd500" viewBox="-100 -100 1200.00 1200.00" xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffd500" transform="matrix(1, 0, 0, 1, 0, 0)">
                            <g id="SVGRepo_bgCarrier" stroke-width="0">
                                <rect x="-100" y="-100" width="1200.00" height="1200.00" rx="600" strokewidth="0" />
                            </g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M476 801l-181 95q-18 10-36.5 4.5T229 879t-7-36l34-202q2-12-1.5-24T242 596L95 453q-15-14-15.5-33.5T91 385t32-18l203-30q12-2 22-9t16-18l90-184q10-18 28-25t36 0 28 25l90 184q6 11 16 18t22 9l203 30q20 3 32 18t11.5 34.5T905 453L758 596q-8 9-12 21t-2 24l34 202q4 20-7 36t-29.5 21.5T705 896l-181-95q-11-6-24-6t-24 6z" />
                            </g>
                        </svg>
                    </label>
                </div> -->
                <div class="add-note-modal__new-date-checkbox">
                    <label for="new-date"> Update note's date </label>
                    <input type="checkbox" id="new-date" >
                </div>
            </div>
            
            <div class="add-note-modal__title-container">
                <!-- test error start -->
                <p class="error-massege">* Note title is requried</p>
                <!-- test error end -->
                <input class="add-note-modal__title" type="text" placeholder="Note Title..." value="${noteObject.title}">

            </div>

            <div class="add-note-modal__body-container">
                <!-- test error start -->
                <p class="error-massege">* Note body is requried</p>
                <!-- test error end -->

                <textarea class="add-note-modal__body" placeholder="Note Body...">${noteObject.body}</textarea>
            </div>

            <div class="add-note-modal__modal-footer">
                <!-- test error start -->
                <!-- <p class="error-massege">* Please choose a color</p> -->
                <!-- test error end -->

                <div class="modal-footer__color-picker">
                    <h3>Choose a color</h3>
                     <p class="error-massege">* Please choose a color</p>
                    <div class="color-picker__list">
                        <label class="color1 ${noteObject.color == 'color1' ? 'color-picker__color--selected' : ''}" for="color1-radio-modal"><input type="radio" name="color"
                                id="color1-radio-modal" ${noteObject.color == 'color1' ? 'checked' : ''}></label>
                        <label class="color2 ${noteObject.color == 'color2' ? 'color-picker__color--selected' : ''}" for="color2-radio-modal"><input type="radio" name="color"
                                id="color2-radio-modal"${noteObject.color == 'color2' ? 'checked' : ''}></label>
                        <label class="color3 ${noteObject.color == 'color3' ? 'color-picker__color--selected' : ''}" for="color3-radio-modal"><input type="radio" name="color"
                                id="color3-radio-modal"${noteObject.color == 'color3' ? 'checked' : ''}></label>
                        <label class="color4 ${noteObject.color == 'color4' ? 'color-picker__color--selected' : ''}" for="color4-radio-modal"><input type="radio" name="color"
                                id="color4-radio-modal"${noteObject.color == 'color4' ? 'checked' : ''}></label>
                        <label class="color5 ${noteObject.color == 'color5' ? 'color-picker__color--selected' : ''}" for="color5-radio-modal"><input type="radio" name="color"
                                id="color5-radio-modal"${noteObject.color == 'color5' ? 'checked' : ''}></label>
                    </div>
                </div>
                
                <div class="modal-footer__btn">
                    <button class="cancel">Cancel</button>
                    <button class="create">Edit</button>
                </div>
            </div>
            
        </div>
    </div>`;
        this.rootElement.insertAdjacentHTML('beforeend', editNotePopup_HTML);

        const appPopUp = this.rootElement.querySelector('.app__popup');
        // new animation
        const popUpDialoh = appPopUp.children[0];
        setTimeout(() => { popUpDialoh.classList.add('popup__add-note-modal--show-animation') }, 50);
        //end
        const noteTitle = appPopUp.querySelector('.add-note-modal__title');
        const noteBody = appPopUp.querySelector('.add-note-modal__body');
        const radioColorList = appPopUp.querySelector(".color-picker__list");
        let updateNoteDate = false;
        appPopUp.addEventListener('click', (eventObject) => {

            // Exit the from the Pop-up
            if (eventObject.target.className == 'cancel') {
                //animation
                popUpDialoh.classList.remove('popup__add-note-modal--show-animation');
                setTimeout(() => { appPopUp.remove() }, 200);

            }
            // Update date check
            if (eventObject.target.className == 'add-note-modal__new-date-checkbox') {

                eventObject.target.children[1].toggleAttribute('checked')
                console.log(eventObject.target.children[0], eventObject.target.children[1])
                // eventObject.target.classList.toggle('add-note-modal__favorite-checkbox--checked')
                // note.isFavorite = !note.isFavorite;
                updateNoteDate = !updateNoteDate;
            }
            // Radio colors
            if (eventObject.target.getAttribute('type') == 'radio') {

                appPopUp.querySelectorAll('input[name=color]').forEach(input => {
                    if (input == eventObject.target) {
                        input.parentElement.classList.add('color-picker__color--selected');
                    }
                    else {
                        input.parentElement.classList.remove('color-picker__color--selected');

                    }
                })
            }

            // Edite note
            if (eventObject.target.className == 'create') {
                const selectedRadioColor = radioColorList.querySelector("input[type='radio']:checked");
                const selectedRadioColorValue = selectedRadioColor.parentElement.classList[0];
                let isValid = true;

                [noteTitle, noteBody].forEach(element => {
                    if (element.value == '') {
                        element.previousElementSibling.classList.add('error-massege-active');
                        isValid = false;
                    } else {
                        element.previousElementSibling.classList.remove('error-massege-active');
                    }
                });
                if (selectedRadioColorValue == '') {
                    radioColorList.previousElementSibling.classList.add('error-massege-active');
                    isValid = false;
                } else {
                    radioColorList.previousElementSibling.classList.remove('error-massege-active');
                }

                if (isValid) {
                    noteObject.title = noteTitle.value.trim();
                    noteObject.body = noteBody.value.trim();
                    noteObject.color = selectedRadioColorValue;

                    const noteTitleValue = noteObject.title.substring(0, this.MAX_CHARACTERS_TITLE) + (noteObject.title.length > this.MAX_CHARACTERS_TITLE ? '...' : '');
                    const noteBodyValue = noteObject.body.substring(0, this.MAX_CHARACTERS_BODY) + (noteObject.body.length > this.MAX_CHARACTERS_BODY ? '...' : '');
                    noteNode.querySelector('.note__title h3').innerText = noteTitleValue;
                    noteNode.querySelector('.note__body').innerText = noteBodyValue;
                    noteNode.classList.replace(noteNode.classList[1], selectedRadioColorValue);

                    if (updateNoteDate) {
                        const oldDate = noteObject.date;
                        noteObject.date = new Date()
                        const [day, time] = noteNode.querySelector('.footer__time').children;
                        day.innerText = noteObject.date.toLocaleDateString(undefined, { weekday: "short" }) + ' ' + noteObject.date.toLocaleDateString();
                        time.innerText = noteObject.date.toLocaleTimeString(undefined, { timeStyle: "medium" });

                        this.onUpdateCallback(oldDate, noteObject, true);
                        noteNode.remove();
                        this.notesArea.insertAdjacentElement('afterbegin', noteNode);

                    } else {
                        this.onUpdateCallback(undefined, noteObject, false);
                    }

                    //animation 
                    popUpDialoh.classList.remove('popup__add-note-modal--show-animation');
                    setTimeout(() => { appPopUp.remove() }, 200);

                }

            }
        });
    }

    _alertHTML(icon, message, cancelText, progressText) {
        return new DOMParser().parseFromString(`
        <div class= "app__wrapper-delete-dialog">
            <div class="app__delete-dialog">
            
                <div class="delete-dialog__icon">
                    ${icon}
                </div>
                <p class="delete-dialog__massege">${message}</p>
                <div class="delete-dialog__btn">
                    <button class="btn__cancel">${cancelText}</button>
                    <button class="btn__delete">${progressText}</button>
                </div>
            </div>
        </div>
        
        ` , "text/html").documentElement.children[1].children[0];
    }

}