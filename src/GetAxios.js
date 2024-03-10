import Axios from 'axios';
import React, { useEffect, useState } from 'react'

function GetAxios() {
    const baseURL = "https://jsonplaceholder.typicode.com/posts";

    const [my_data, setData] = useState([]);

    useEffect(() => {
        Axios.get(baseURL).then((response) => {
            setData(response.data);
        })
    }, [])

    // The data (which is in this case a post with id, title, and body properties) is put in a piece of state called "my_data" which is displayed in the component.

    // Note that you can always find the requested data from the ".data" property in the response.

    return (
        <>
            {my_data.map((item) => {
                const { id, title, body } = item;
                return (
                    <div>
                        <h1>{id}</h1>
                        <h1>{title}</h1>
                        <h1>{body}</h1>
                    </div>
                )
            })}
        </>
    )
}

export default GetAxios



{/* the process to take single id data  */ }
{/* <h1>{mydata.id}</h1>
            <h1>{mydata.title}</h1>
            <h1>{mydata.body}</h1> */}

{/* the process to get whole data at once */ }


