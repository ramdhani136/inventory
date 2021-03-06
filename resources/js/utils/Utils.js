const API_URL = "https://system.ekatunggal.com/api/";

const Datenow = () => {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    var output =
        d.getFullYear() +
        "-" +
        (month < 10 ? "0" : "") +
        month +
        "-" +
        (day < 10 ? "0" : "") +
        day;
    return output;
};

const Setnomor = (num) => {
    if (num > 10000) {
        return false;
    } else if (num < 10000 && num > 999) {
        return num.toString();
    } else if (num < 1000 && num > 99) {
        return "0" + num;
    } else if (num < 100 && num > 9) {
        return "00" + num;
    } else {
        return "000" + num;
    }
};

export { API_URL, Datenow, Setnomor };
