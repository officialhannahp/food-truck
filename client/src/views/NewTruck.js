import React, { useReducer,useState } from 'react'
import TruckForm from '../components/TruckForm'
import { truckReducer } from '../reducers/truckReducer';
import { navigate } from '@reach/router';
import axios from 'axios';

const initialTruck = {
    name: "",
    style: "",
    desc: ""
}

const initialErrors = {
    name: "",
    style: "",
    desc: ""
}

const NewTruck = () => {
    const [truck, setTruck] = useReducer(truckReducer, initialTruck);
    const [errors, setErrors] = useState(initialErrors);

    const changeHandler = e => {
        const { name, value } = e.target;
        setTruck({ 
            type: name,
            payload: value
        })
    }

    const submitHandler = e => {
        e.preventDefault(); 
        axios.post('http://localhost:3000/api/trucks')
            .then(res => {
                const { message, result } = res.data;
                if(message === "create success"){
                    navigate(`/truck/${result._id}`)
                } else {
                    console.log(result); 
                }
            })
    }

    return (
        <div className="col-sm-12">
            <h2>New Food Truck</h2>
            <TruckForm 
                truck={truck}
                submitHandler={submitHandler}
                changeHandler={changeHandler}
                action="Submit"
            />
        </div>
    )
}

export default NewTruck
