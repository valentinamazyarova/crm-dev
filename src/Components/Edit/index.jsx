import { useParams } from 'react-router-dom';
import useFetchFromEdit from './useFetchForEdit';
import { useNavigate } from 'react-router-dom';
import { serverPath } from '../../helpers/variables';

const Edit = () => {

    const { id } = useParams();
    const { data: application, isLoading, error, setError, name,  phone, course, email, status, setName, setEmail, setPhone, setStatus, setСourse } = useFetchFromEdit(serverPath + "/" + id);
    const navigate = useNavigate();

    const saveСhanges = (e) => {
        e.preventDefault()

        const changeData = {
            ...application,
            name,
            phone,
            email,
            course,
            status
        }

        fetch(`${serverPath}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(changeData)
        }).then((res) => {
            if (res.ok !== true) {
                throw Error('Could not fetch the data for that resource')
            }
            navigate('/table')
        }).catch((err) => {
            setError(err.message)
        })
    }

    const deleteApplication = () => {
        fetch(`${serverPath}/${id}`, {
            method: 'DELETE'
        }).then((res) => {
            navigate('/table')
        })

    }

    return (
        <div className="form-wrapper">
            {error && <h3>{error}</h3>}
            {isLoading && <h1>Loading...</h1>}
            {application && (<div className="container-fluid">
                {/* <!-- row --> */}
                <div className="row justify-content-between align-items-center">
                    <div className="col">
                        <div className="admin-heading-1">Работа с заявкой</div>
                    </div>
                    <div className="col text-right ">
                        <button className="back btn btn-link " onClick={() => { navigate('/table') }}>Вернуться назад</button>
                    </div>
                </div>
                {/* <!-- // row --> */}
                {/* <!-- row --> */}
                <div className="row">
                    {/* <!-- col --> */}
                    <div className="col">
                        <form id="form" onSubmit={(e) => { saveСhanges(e) }}>
                            {/* <!-- card --> */}
                            <div className="card mb-4">
                                <div className="card-header">Данные о заявке</div>
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>ID:</strong>
                                        </div>
                                        <div className="col">Заявка №<span id="number">{id}</span></div>
                                        <input name="id" type="hidden" id="id" />
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>Дата создания:</strong>
                                        </div>
                                        <div className="col" id="date">2020-04-20 13:52:13</div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>Продукт:</strong>
                                        </div>
                                        <div className="col">
                                            <select onChange={(e) => { setСourse(e.target.value) }} id="product" name="product" className="custom-select" value={course}>
                                                <option value="course-html">Курс по верстке</option>
                                                <option value="course-js">Курс по JavaScript</option>
                                                <option value="course-vue">Курс по VUE JS</option>
                                                <option value="course-php">Курс по PHP</option>
                                                <option value="course-wordpress">Курс по WordPress</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>Имя:</strong>
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={name}
                                                id="name"
                                                name="name"
                                                onChange={(e) => { setName(e.target.value) }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>Email:</strong>
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={email}
                                                id="email"
                                                name="email"
                                                onChange={(e) => { setEmail(e.target.value) }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>Телефон:</strong>
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={phone}
                                                id="phone"
                                                name="phone"
                                                onChange={(e) => { setPhone(e.target.value) }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>Статус заявки:</strong>
                                        </div>
                                        <div className="col">
                                            <select className="custom-select" id="status" name="status" value={status} onChange={(e) => { setStatus(e.target.value) }}>
                                                <option >Выберите...</option>
                                                <option value="new">Новая</option>
                                                <option value="inwork">В работе</option>
                                                <option value="complete">Завершена</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- //card --> */}
                            <div className="row justify-content-between">
                                <div className="col text-right">
                                    <button type='submit' className="btn btn-primary mr-15" >Сохранить изменения</button>
                                    <button type='submit' className="btn btn-primary " onClick={()=>{deleteApplication()}} >Удалить заявку</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <!-- //col --> */}
                </div>
                {/* <!-- //row --> */}
            </div>)}

        </div>
    );
}

export default Edit;