import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {

    const [apiData, setApiData] = useState([])

    function handleDelete(id) {
        axios.delete(`https://65c0ecebdc74300bce8cffa0.mockapi.io/crud/${id}`).then((result) => {
            getData();
        }).catch((err) => {
            
        });
    }

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        axios.get('https://65c0ecebdc74300bce8cffa0.mockapi.io/crud').then((response) => {
            setApiData(response.data)
        }).catch((err) => {

        });
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">

                    <div>
                        <Link to='/create'>
                            <button className='btn btn-primary mb-2 mt-2'>Create New Data</button>
                        </Link>
                    </div>
                    <table className='table table-bordered table-striped table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                apiData.map((value) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.e_name}</td>
                                                <td>{value.e_age}</td>
                                                <td>{value.e_email}</td>
                                                <td><button className='btn btn-primary'>Edit</button></td>
                                                <td><button className='btn btn-danger' onClick={() =>{if(window.confirm('Are you sure to delete data??')){ handleDelete(value.id)}}}> Delete</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Read
