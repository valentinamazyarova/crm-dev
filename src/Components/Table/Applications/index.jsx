import { Link } from "react-router-dom";
import BageStatus from "../BageStatus.jsx";


const Applications = ({ applications}) => {

    let courseName = "";

    const application = () => {
        return (
            applications.map((value) => {
                
                if (value.course == "course-html") {
                    courseName = "Курс по верстке"
                }
                else if (value.course == "course-js") {
                    courseName = "Курс по JavaScript"
                }
                else if (value.course == "course-vue") {
                    courseName = "Курс по VUE JS"
                }
                else if (value.course == "course-php") {
                    courseName = "Курс по PHP"
                }
                else if (value.course == "course-wordpress") {
                    courseName = "Курс по WordPress"
                }

                return (
                    <tr key={value.id}>
                        <th scope="row">{value.id}</th>
                        <td>{value.date}</td>
                        <td>{courseName}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.phone}</td>
                        <td>
                            <BageStatus status={value.status}/>
                        </td>
                        <td>
                            <Link to={`/edit/${value.id}`}>Редактировать</Link>
                        </td>
                    </tr>
                )
            })
        )

    }

    return (
        <table className="table fs-14">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>дата</th>
                    <th>продукт</th>
                    <th>имя</th>
                    <th>email</th>
                    <th>телефон</th>
                    <th>статус</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="tbody">
                {application()}
            </tbody>
        </table>
    );
}

export default Applications;