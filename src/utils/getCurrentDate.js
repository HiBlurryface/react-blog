function getCurrentDate() {
    let date = new Date()
    let day = date.getDate();
    let month = date.toLocaleString('en', { month: 'short' });
    let year = date.getFullYear();

    return day + ' ' + month + ' ' + year;
}

export default getCurrentDate