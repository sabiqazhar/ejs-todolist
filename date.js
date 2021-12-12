exports.getDate = () => {
    let today = new Date();

    let option = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    return today.toLocaleString("en-US", option);
}


exports.getDay = () => {
    let today = new Date();

    let option = {
        weekday: "long"
    }

    return today.toLocaleString("en-US", option);
}