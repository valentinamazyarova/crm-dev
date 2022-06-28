const formatDate = () => {

    const year = new Date().getFullYear()
    const day = new Date().getDate()
    const month = new Date().getMonth()

    let curentDate;

    if (day < 10) {
        curentDate = `0${day}.${month}.${year}`
    } else if (month < 10) {
        curentDate = `${day}.0${month}.${year}`
    } else if (day >= 10 && month >= 10) {
        curentDate = `${day}.${month}.${year}`
    }

    return curentDate
}

export default formatDate;