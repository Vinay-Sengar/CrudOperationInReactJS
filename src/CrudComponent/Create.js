import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate();

    let changeName = (e) => {
        setName(e.target.value)
    }

    let changeAge = (e) => {
        setAge(e.target.value)
    }

    let changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://65c0ecebdc74300bce8cffa0.mockapi.io/crud', {
            e_name: name,
            e_age: age,
            e_email: email,
        }).then(() => {
            navigate('/')

        }).catch((err) => {

        });
    }
    return (
        <div className='row'>
            <div className='col-md-4'>
                <div>
                    <Link to='/'>
                        <button className='btn btn-primary mb-2 mt-2'>Read Data</button>
                    </Link>
                </div>

                <div className="bg-primary p-4 text-center">
                    <h1>Create Data</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label> Enter the Name: </label>
                        <input type="text" placeholder='Name' className='form-control' onChange={changeName} />
                    </div>

                    <div className='form-group'>
                        <label> Enter the Age: </label>
                        <input type="number" placeholder='Age' className='form-control' onChange={changeAge} />
                    </div>

                    <div className='form-group'>
                        <label> Enter the Email: </label>
                        <input type="email" placeholder='Email' className='form-control' onChange={changeEmail} />
                    </div>

                    <br />
                    <div className="d-grid">
                        <input type="submit" value='Submit' className='btn btn-primary' />
                    </div>
                </form>
                {name}
                <br />
                {age}
                <br />
                {email}
            </div>
        </div>
    )
}

export default Create
