import ButtonSubmit from "./ButtonSabmit";
import { useState, useEffect } from "react";
import { serverPath } from "../../helpers/variables";
import randomTestData from "../../helpers/randomTestData";
import formatDate from "../../helpers/formatDate";

const Form = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [course, setСourse] = useState("course-html");
    const [status, setStatus] = useState("new");
    const [date, setDate] = useState(formatDate())

    const randomData = () => {
        const testData = randomTestData()
        setName(testData.name)
        setPhone(testData.phone)
        setEmail(testData.email)
        setСourse(testData.course)
    }

    const addApplication = (e) => {
        e.preventDefault()

        setDate(formatDate())

        const dataApplication = {
            name,
            phone,
            email,
            course,
            status,
            date
        }

        fetch(serverPath, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataApplication)
        }).then(() => {
            setName("")
            setPhone("")
            setEmail("")
            setСourse("")
            randomData()
        })

    }

    useEffect(() => {
        randomData()
    }, [])

    return (
        <div className="radial-bg flex-center">
            <div className="white-plate white-plate--payment">
                <div className="container-fluid">
                    {/* <!-- header --> */}
                    <div className="white-plate__header text-center">
                        <p className="white-plate__logo">
                            <span>Форма</span> заявок
                        </p>
                    </div>
                    {/* <!-- // header --> */}

                    <div className="white-plate__line-between white-plate__line-between--main"></div>

                    <form id="form" method="POST" action="" onSubmit={addApplication}>
                        <label>Ваши данные:</label>
                        <div className="form-group">
                            <input
                                id="name"
                                type="text"
                                name="name"
                                autoComplete="on"
                                className="form-control"
                                placeholder="Имя и Фамилия"
                                required
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                id="phone"
                                type="text"
                                name="phone"
                                autoComplete="on"
                                className="form-control"
                                placeholder="Телефон"
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="on"
                                className="form-control"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">
                                Продукт:
                            </label>
                            <select
                                id="product"
                                name="product"
                                className="form-control"
                                value={course}
                                onChange={(e) => { setСourse(e.target.value) }}
                            >
                                <option value="course-html">Курс по верстке</option>
                                <option value="course-js">Курс по JavaScript</option>
                                <option value="course-vue">Курс по VUE JS</option>
                                <option value="course-php">Курс по PHP</option>
                                <option value="course-wordpress">Курс по WordPress</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <ButtonSubmit />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;