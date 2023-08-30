import { useNavigate,Link } from 'react-router-dom'
import React,{useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Username is Required')
    .min(2,"name must be at least 2 characters")
})


const initialValues = {
    name:'',
    size: '',
    pepperoni: false,
    mushrooms: false,
    beef: false,
    chicken: false,
    specialInstructions: '',

}
const initialFormErrors = {
    name:'',
}

//STATE, 
// need to create state to hold the initial values and then some way to update them
// create a slice of state that holds the values in the form oncee they are updated
// on submit needs to upadte the new values into a slice of state
export default function OrderForm() {


    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    

    // const submit = (evt) => {     
    //     }
    //     evt.preventDefault()
    //     axios.post('https://reqres.in/api/orders',newPizza)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => console.log(err))
    
    
    const change = (evt => {
       const {name,specialInstructions,value} = evt.target;
       setFormValues({...formValues, [name]: value, [specialInstructions]: value})
       
    })
    


    return (
        <div>
            <h1> Order Form</h1> 
            <form  id='pizza-form'>
            <label>
                <h4>Name</h4>
                <input 
                    id='name-input'
                    type='text'
                    name='name'
                    placeholder='Enter your Name'
                    onChange={change}
                />
            </label>
                <h4>Choose size</h4>
            <label> 
                <select id='size-dropdown'>
                <option name='size'>Select a Size </option>
                <option name='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                </select>
            </label>
            <div className='toppings-checkbox'>
                <h4>Toppings</h4>
                <label>Pepperoni
                    <input 
                    type='checkbox'
                    name='pepperoni'
                    />
                </label>
                <label>Mushrooms
                    <input 
                    type='checkbox'
                    name='Mushrooms'
                    />
                </label>
                <label>Beef
                    <input 
                    type='checkbox'
                    name='Beef'
                    />
                </label>
                <label>Chicken
                    <input 
                    type='checkbox'
                    name='Chicken'
                    />
                </label>
                <label>
                    <h4>Special Instructions</h4>
                    <input 
                    id='special-text'
                    type='text'
                    name='special instructions'
                    placeholder='Enter Special Istructions'
                    onChange={change}
                />
                </label >
                <input type='submit' value='Add to Order'/>
            </div>
            </form>
        </div>
    )
}