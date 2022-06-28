import { createContext, useState } from "react";
import useFetch from "../../useFetch";
import Applications from "./Applications";
import FiltersBar from "./FiltersBar";
import LeftPanel from "./LeftPanel";
import { serverPath } from "../../helpers/variables";
import { useEffect } from "react";

export const TableContext = createContext(null)


const Table = () => {

    let currentCourse = 'all';
    let currentStatus = 'all';

    if (localStorage.getItem('course') && localStorage.getItem('status')) {
        currentCourse = localStorage.getItem('course');
        currentStatus = localStorage.getItem('status');
    }

    const [path, setPath] = useState(serverPath)
    const [course, setCourse] = useState(currentCourse)
    const [status, setStatus] = useState(currentStatus)
    const { data: applications, isLoading, error, } = useFetch(path)


    useEffect(() => {

        localStorage.setItem('status', status)
        localStorage.setItem('course', course)

        if (course !== "all" && status !== "all") {
            return setPath(`${serverPath}?course=${course}&status=${status}`)
        } else if (course !== "all" && status == "all") {
            return setPath(`${serverPath}?course=${course}`)
        } else if (status !== "all" && course == "all") {
            return setPath(`${serverPath}?status=${status}`)
        } else if (course == "all" && status == "all") {
            return setPath(serverPath)
        }



    }, [course, status])



    return (
        <div className="body--dashboard">
            <TableContext.Provider value={{ status, setStatus, applications }}>
                <LeftPanel />
                <div className="main-wrapper">
                    <div className="container-fluid">
                        <div className="admin-heading-1">Все заявки</div>
                        <FiltersBar setCourse={setCourse} setStatus={setStatus} status={status} course={course} />
                        {isLoading && <h1>Loading...</h1>}
                        {error && <p>{error}</p>}
                        {applications && <Applications applications={applications} />}
                    </div>
                </div>
            </TableContext.Provider>

        </div>

    );
}

export default Table;