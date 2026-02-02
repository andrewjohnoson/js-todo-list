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

    setDatepickerLocalSetting() {
        $.datepicker.regional["ru"] = this.localSettings;
        $.datepicker.setDefaults( $.datepicker.regional["ru"] );
    };

    constructor() {
        this.setDatepickerLocalSetting();
    };  

    getFormattedCurrentDate() {
        let date = new Date();

        let year = date.getFullYear();

        let month = (1 + date.getMonth()).toString();       // если месяц состоит из одной цифры
        month = month.length > 1 ? month : '0' + month;     // то мы добавляем перед ним ноль

        let day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return day + '.' + month + '.' + year;
    };

    setCurrentDate(inputSelector) {
        const formattedDate = this.getFormattedCurrentDate();
        $(`${inputSelector}`).val(formattedDate);
    }

    createDatepicker(fieldSelector) {
        $(`${fieldSelector}`).datepicker();
    }
}