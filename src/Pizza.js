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
const initialFormErrors = ''
 


export default function OrderForm() {


    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    



    const submitForm = (evt) => {
        evt.preventDefault();
        const newPizza = {
            name: formValues.name,
            size: formValues.size,
            pepperoni:formValues.pepperoni,
            mushrooms:formValues.mushrooms,
            beef:formValues.beef,
            chicken:formValues.chicken,
            specialInstructions:formValues.specialInstructions
        }
        axios.post('https://reqres.in/api/orders',newPizza)
        .then(res =>{
            console.log(res);
        })
        .catch(err => console.log(err))
    }

    
    
    const change = (evt => {
       const {name,specialInstructions,size,value} = evt.target;
       let result = evt.target.type === 'checkbox' ? evt.target.checked : value
       setFormValues({...formValues, [name]: value })
       schema.validate(formValues)
       .then(res => {
        setFormErrors(initialFormErrors)
       })
       .catch(err => {
        console.log(err)
        setFormErrors("name must be at least 2 characters")
       })
       //checkbox values need to be true or false
       //determine how to differenciate checkbox from other inputs
       //update the toppings with the correct value
       //updates to on, needs to update to true or false
    })
    
    return (
        <div>
            <h1> Order Form</h1> 
            <form  id='pizza-form' onSubmit={submitForm}>
            <label>
                <h4>Name</h4>
                <input 
                    id='name-input'
                    type='text'
                    name='name'
                    placeholder='Enter your Name'
                    onChange={change}
                />
                <div>{formErrors}</div>
            </label>
                <h4>Choose size</h4>
            <label> 
                <select onChange={change} id='size-dropdown' name='size'>
                <option value=''>Select a Size </option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                </select>
            </label>
            <div className='toppings-checkbox' id='toppings-input'>
                <h4>Toppings</h4>
                <label>Pepperoni
                    <input 
                    type='checkbox'
                    name='pepperoni'
                    onChange={change}
                    />
                </label>
                <label>Mushrooms
                    <input 
                    type='checkbox'
                    name='Mushrooms'
                    onChange={change}
                    />
                </label>
                <label>Beef
                    <input 
                    type='checkbox'
                    name='Beef'
                    onChange={change}
                    />
                </label>
                <label>Chicken
                    <input 
                    type='checkbox'
                    name='Chicken'
                    onChange={change}
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
                <div>
                <button type='submit' value='submit-button' id='order-button'> Submit Order</button>
                </div>
            </div>
            </form>
        </div>
    )
}