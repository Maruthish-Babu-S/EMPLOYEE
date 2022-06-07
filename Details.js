import { useEffect,useState } from "react";
import {useHistory,useParams,Link} from "react-router-dom"


const Details = () => {
    let {id}=useParams();
    let history = useHistory();

    let[employeeData,setemployeeData]=useState(null);
useEffect(()=>{
    fetch("http://localhost:4005/employeedetails/"+id)
        .then((response)=>{
            return response.json();
        })
        .then((fetchedData)=>{
            setemployeeData(fetchedData);

        }) 

},[])
    
        const handleDelete= (deleteId)=>{
            fetch(`http://localhost:4005/employeedetails/${deleteId}`,{method:"DELETE"})
            .then(()=>{
                history.push("/Sheets")
            })
        }


    return (
        <div>
            {employeeData && 
            <div>
                <h1>{employeeData.empName}</h1>
                <h1>{employeeData.empEmail}</h1>
                <h1>{employeeData.empContact}</h1>
                <h1>{employeeData.gender}</h1>
                <button onClick={()=>{handleDelete(employeeData.id)}}>Delete</button>
                <br/><br/>
                <button><Link to={`/Update${employeeData.id}`}>Edit</Link></button>

            </div>
                }
        </div>
      );
}
 
export default Details;