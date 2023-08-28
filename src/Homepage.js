import { useNavigate,Link } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();

    const routeToPizza = () => {
        navigate('/pizza');
    }

    return(
        <>
        <h1>Homepage Component</h1>
            <button onClick={routeToPizza} className='order-pizza' id='order-pizza'>
                Order Pizza
            </button>
        </>
        
    )
}