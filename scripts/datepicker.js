import DateController from './DateController.js';
import Task from './Task.js';
import TaskList from './TaskList.js';

export default class Datepicker {
    localSettings = {
        closeText: "Закрыть",
        currentText: "Сегодня",
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        dayNamesShort: ['Вос ', 'Пон', 'Втр', 'Сре', 'Чет', 'Пят', 'Суб'],
        defaultDate: +7,
        dateFormat: 'dd.mm.yy',
        constrainInput: true,
        firstDay: 1,
    };

    inputSelector = "";

    setDatepickerLocalSetting() {
        $.datepicker.regional["ru"] = this.localSettings;
        $.datepicker.setDefaults( $.datepicker.regional["ru"] );
    };

    constructor() {
        this.setDatepickerLocalSetting();
    };

    set inputSelector(inputSelector) {
        this.inputSelector = inputSelector;
    }

    setButtons(nextButtonTag = "", prevButtonTag = "") {
        this.nextButton = document.querySelector(nextButtonTag);
        this.prevButton = document.querySelector(prevButtonTag);

        this.#bindButtonEvents();
        this.datepickerBindEvent();
    };

    #bindButtonEvents() {
        this.nextButton?.addEventListener('click', this.#nextDate);
        this.prevButton?.addEventListener('click', this.#prevDate);
    };

    #nextDate = () => {
        let currentDate = $(`${this.inputSelector}`).val();
        currentDate = DateController.parseDate(currentDate);

        let nextDate = new Date(currentDate);
        nextDate.setTime(nextDate.getTime() + 86400000);
        nextDate = DateController.getFormattedDate(nextDate);
        
        $(`${this.inputSelector}`).val(nextDate);
    };

    #prevDate = () => {
        let currentDate = $(`${this.inputSelector}`).val();
        currentDate = DateController.parseDate(currentDate);

        let prevDate = new Date(currentDate);
        prevDate.setTime(prevDate.getTime() - 86400000);
        prevDate = DateController.getFormattedDate(prevDate);
        
        $(`${this.inputSelector}`).val(prevDate);
    };

    setCurrentDate() {
        const currentDate = new Date();

        const formattedDate = DateController.getFormattedDate(currentDate);
        $(`${this.inputSelector}`).val(formattedDate);
    };

    static createDatepicker(fieldSelector) {
        $(`${fieldSelector}`).datepicker();
    };

    datepickerBindEvent() {
        $(this.inputSelector).datepicker({
            onSelect: function () {
                TaskList.refreshEventButtons();
            }
        });

        TaskList.refreshEventButtons();
    };
}