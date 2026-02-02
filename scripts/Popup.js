import Datepicker from "./Datepicker.js";

class Popup {
    constructor() {
        return this;
    };

    getPopUpElements({ idOfPopup, idOfPopupOpenButton, idOfPopupCloseButton }) {
        this.popup = document.getElementById(`${idOfPopup}`);
        this.popupOpenButton = document.getElementById(`${idOfPopupOpenButton}`);
        this.popupCloseButton = document.getElementById(`${idOfPopupCloseButton}`);
    }

    bindEvents(popupElementsIDs) {
        this.getPopUpElements(popupElementsIDs);
        this.openPopup();
        this.closePopup();

        return this;
    };

    openPopup() {
        this.popupOpenButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.popup.classList.add('active');
        });

        return this;
    };

    closePopup() {
        if (this.popupCloseButton) {
            this.popupCloseButton.addEventListener('click', (event) => {
                this.popup?.classList.remove('active');
            });
        }

        this.popup.addEventListener('click', (event) => {
            if (event.target === this.popup) {
                this.popup.classList.remove('active');
            }
        });

        return this;
    };
};

export class AddTaskPopup extends Popup {
    taskDateTag = '[data-js-form-input-task-date]';

    constructor() {
        super();
        this.datepicker = new Datepicker();
        this.datepicker.setCurrentDate(this.taskDateTag);
    };
};

export const addTaskPopup = new AddTaskPopup();

export class AccountWindowPopup extends Popup {
    calcAccountWindowRelativelyHeader() {
        const header = document.querySelector('header');
        const headerPosition = header.getBoundingClientRect();

        const accountWindowContent = document.querySelector('.popup--account-window');

        const accountWindowContentRight = headerPosition.left;

        accountWindowContent.style.right = `${accountWindowContentRight}px`;
    };

    setPositionOfAccountWindow() {
        this.calcAccountWindowRelativelyHeader();
        window.addEventListener('resize', this.calcAccountWindowRelativelyHeader);
    }

    bindEvents(popupElementsIDs) {
        super.bindEvents(popupElementsIDs);
        this.setPositionOfAccountWindow();
    }
};

export const accountWindowPopup = new AccountWindowPopup();