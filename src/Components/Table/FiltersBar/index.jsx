const FiltersBar = ({filterApplications, setCourse, setStatus, status, course}) => {

    return (
        <form action="">
            <div className="row mb-3 justify-content-start">
                <div className="col">
                    <div id="topStatusBar" className="btn-group" role="group" aria-label="..." >
                        <a  className={status == "all" ? 'btn btn-light active' : 'btn btn-light'} data-value="all" onClick={()=>{setStatus("all")}}>Все</a>
                        <a  className={status == "new" ? 'btn btn-light active' : 'btn btn-light'} data-value="new"  onClick={()=>{setStatus("new")}}>Новые</a>
                        <a  className={status == "inwork" ? 'btn btn-light active' : 'btn btn-light'} data-value="inwork"  onClick={()=>{setStatus("inwork")}}>В работе</a>
                        <a  className={status == "complete" ? 'btn btn-light active' : 'btn btn-light'} data-value="complete" onClick={()=>{setStatus("complete")}}>Завершенные</a>
                    </div>
                </div>

                <div className="col">
                    <select className="custom-select" id="productSelect" defaultValue={course} onChange={(e)=>{setCourse(e.target.value)}}>
                        <option value="all" >Все продукты</option>
                        <option value="course-html">Курс по верстке</option>
                        <option value="course-js">Курс по JavaScript</option>
                        <option value="course-vue">Курс по VUE JS</option>
                        <option value="course-php">Курс по PHP</option>
                        <option value="course-wordpress">Курс по WordPress</option>
                    </select>
                </div>
                
            </div>
        </form>
    );
}

export default FiltersBar;