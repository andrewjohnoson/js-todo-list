import Datepicker from './Datepicker.js';
import { AddTaskPopup, AccountWindowPopup } from './Popup.js';
import TaskList from './TaskList.js';
import Task from './Task.js';
import FormValidation from './formValidation.js';

Task.bindEvents();

const addTaskPopupElementsIDs = {
    idOfPopup: 'popup--add-task',
    idOfPopupOpenButton: 'task-list__btn--add-task',
    idOfPopupCloseButton: 'popup--add-task__btn--cancel',
};

const addTaskPopup = new AddTaskPopup();
addTaskPopup.bindEvents(addTaskPopupElementsIDs);

const accountWindowPopupElementsIDs = {
    idOfPopup: 'popup--account-window',
    idOfPopupOpenButton: 'header__btn--open-account-window',
};

const accountWindowPopup = new AccountWindowPopup();
accountWindowPopup.bindEvents(accountWindowPopupElementsIDs);

const datepicker = new Datepicker();
datepicker.inputSelector = '[data-js-dateselector-datefield]';
datepicker.setButtons('#data-selector--next-date', '#data-selector--prev-date');
datepicker.setCurrentDate();
Datepicker.createDatepicker('[data-js-dateselector-datefield]');

const formValidation = new FormValidation();

TaskList.init();
TaskList.printTasks();
// TaskList.saveTasks();