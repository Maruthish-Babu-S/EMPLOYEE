import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Sheets = () => {

    let [data,setData]=useState(null);

   useEffect(()=>{
        fetch("http://localhost:4005/employeedetails")
        .then((response)=>{
            return response.json();
        })
        .then((fetchedData)=>{
            setData(fetchedData);
        })
    },[])

    return (
        <div>
            {data && 
            <table border="2px">
                <tr>
                    <th>Sl no.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Gender</th>
                    <th>Details</th>
                </tr>
                {
                    data.map((emp)=>
                    (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.empEmail}</td>
                            <td>{emp.empContact}</td>
                            <td>{emp.gender}</td>
                            <td><Link to={`/Details${emp.id}`}><button>View Details</button></Link></td>
                        </tr>
                    ))
                }
                </table>}
        </div>
    )
}
 
export default Sheets;