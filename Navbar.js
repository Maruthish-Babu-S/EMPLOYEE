import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div id="nav">
        <h1>Employee Details</h1>
        <div className='links'>
        <Link to="/">Form </Link>

        <Link to="/Sheets">sheets </Link>
            
        </div>
        
        </div>

     );
}
 
export default Navbar;