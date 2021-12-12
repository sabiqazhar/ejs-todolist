module.exports = getDate;

function getDate() {
    let today = new Date();

    let option = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    let day = today.toLocaleString("en-US", option);

    return day;
}