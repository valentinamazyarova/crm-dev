const BageStatus = ({status}) => {

    let statusClass = "";
    let statusText = "";

    if (status == "new") {
        statusClass = "danger"
        statusText = "Новый"
    }
    else if (status == "inwork") {
        statusClass = "warning"
        statusText = "В работе"
    }
    else if (status == "complete") {
        statusClass = "success"
        statusText = "Завершенный"
    }
    
    return (<div className={`badge badge-pill badge-${statusClass}`}>{statusText}</div>);
}

export default BageStatus;