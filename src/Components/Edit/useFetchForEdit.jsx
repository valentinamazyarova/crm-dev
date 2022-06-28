import { useState, useEffect } from "react";

const useFetchFromEdit = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [course, setСourse] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        const abortCont = new AbortController()

        fetch(url, { signal: abortCont.signal }).then((res) => {
            if (res.ok !== true) {
                throw Error('Could not fetch the data for that resource')
            }
            return res.json()
        }).then((data) => {
            setData(data)
            setLoading(false)
            setError(null)
            setName(data.name)
            setPhone(data.phone)
            setEmail(data.email)
            setСourse(data.course)
            setStatus(data.status)

        }).catch((err) => {
            if (err.name === 'AbortError') {
                console.log('Fetch aborted')
            } else {
                setError(err.message)
                setLoading(false)
            }

        })

        return () => {
            abortCont.abort()
        }

    },[])

    return { data, isLoading, error, setError, name, phone, course, email, status, setName, setEmail, setPhone, setStatus, setСourse}
}

export default useFetchFromEdit;