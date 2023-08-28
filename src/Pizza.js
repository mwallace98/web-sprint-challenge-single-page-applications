import { useNavigate,Link } from 'react-router-dom'
export default function OrderForm() {
    return (
        <div>
            <h1> Order Form</h1>
            <label>
                <h4>Name</h4>
                <input 
                    id='name-input'
                    type='text'
                    name='name'
                    placeholder='Enter your Name'
                />
            </label>
            <form id='pizza-form'>
                <h4>Choose size</h4>
            <label> 
                <select id='size-dropdown'>
                <option value='size'>Select a Size </option>
                <option value='small'>Small</option>
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
                />
                </label>
            </div>
            </form>
        </div>
    )
}