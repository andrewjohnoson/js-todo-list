export default class DateController {
    static getDate(inputSelector) {
        return $(`${inputSelector}`).val();
    };

    static parseDate(date) {
        const [day, month, year] = date.split('.');

        const fullDate = new Date(year, month - 1, day);

        return fullDate;
    };

    static getFormattedDate(date) {
        let year = date.getFullYear();

        let month = (1 + date.getMonth()).toString();       // если месяц состоит из одной цифры
        month = month.length > 1 ? month : '0' + month;     // то мы добавляем перед ним ноль

        let day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return day + '.' + month + '.' + year;
    };
};