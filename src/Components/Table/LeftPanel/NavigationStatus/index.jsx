import { useContext } from "react";
import { TableContext } from "../../index";

const Navigation = () => {

    const { status, setStatus, applications } = useContext(TableContext);

    let sum;

    if (applications && (status == "new" || status == "all")) {
        sum = (applications.filter((value) => value.status == "new")).length;
        localStorage.setItem('buferSum', sum)
    } else if (status == "inwork" || status == "complete") {
        sum = localStorage.getItem('buferSum')
    }

    return (
        <div className="left-panel__navigation">
            <div className="left-panel__navigation-title">Заявки</div>
            <ul>
                <li><a data-value="all" data-role="left-status" className={status == "all" ? "active" : ""} onClick={() => { setStatus("all") }}>Все вместе</a></li>
                <li><a data-value="new" data-role="left-status" className={status == "new" ? "active" : ""} onClick={() => { setStatus("new") }}>Новые<div className="badge" id="badge-new">{sum}</div></a></li>
                <li><a data-value="inwork" data-role="left-status" className={status == "inwork" ? "active" : ""} onClick={() => { setStatus("inwork") }}>В работе</a></li>
                <li><a data-value="complete" data-role="left-status" className={status == "complete" ? "active" : ""} onClick={() => { setStatus("complete") }}>Завершенные</a></li>
            </ul>
        </div>
    );
}

export default Navigation;