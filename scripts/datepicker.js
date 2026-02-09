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

    #setButtonsTags = {};

    setDatepickerLocalSetting() {
        $.datepicker.regional["ru"] = this.localSettings;
        $.datepicker.setDefaults( $.datepicker.regional["ru"] );
    };

    constructor() {
        this.setDatepickerLocalSetting();
    };  

    setButtons(nextButtonTag, prevButtonTag) {
        this.nextButton = document.querySelector(nextButtonTag);
        this.prevButton = document.querySelector(prevButtonTag);

        this.#bindButtonEvents();
    };

    #bindButtonEvents() {
        this.nextButton.addEventListener('click', this.#nextDate);
        this.prevButton.addEventListener('click', this.#prevDate);
    };

    #nextDate = () => {
        let currentDate = $(`${this.inputSelector}`).val();
        currentDate = this.parseDate(currentDate);

        let nextDate = new Date(currentDate);
        nextDate.setTime(nextDate.getTime() + 86400000);
        nextDate = this.getFormattedDate(nextDate);
        
        $(`${this.inputSelector}`).val(nextDate);
    };

    #prevDate = () => {
        let currentDate = $(`${this.inputSelector}`).val();
        currentDate = this.parseDate(currentDate);

        let prevDate = new Date(currentDate);
        prevDate.setTime(prevDate.getTime() - 86400000);
        prevDate = this.getFormattedDate(prevDate);
        
        $(`${this.inputSelector}`).val(prevDate);
    };

    getFormattedDate(date) {
        let year = date.getFullYear();

        let month = (1 + date.getMonth()).toString();       // если месяц состоит из одной цифры
        month = month.length > 1 ? month : '0' + month;     // то мы добавляем перед ним ноль

        let day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return day + '.' + month + '.' + year;
    };

    parseDate(date) {
        const [day, month, year] = date.split('.');

        const fullDate = new Date(year, month - 1, day);

        return fullDate;
    }

    setCurrentDate(inputSelector) {
        const currentDate = new Date();

        this.inputSelector = inputSelector;

        const formattedDate = this.getFormattedDate(currentDate);
        $(`${this.inputSelector}`).val(formattedDate);
    };

    createDatepicker(fieldSelector) {
        $(`${fieldSelector}`).datepicker();
    };
}