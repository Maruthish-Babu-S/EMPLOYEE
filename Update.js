import {useState,useEffect} from 'react';
import { useHistory,useParams } from 'react-router-dom';

const Update = () => {
    let {id}=useParams();
        let history=useHistory();

    let [empName , setName] = useState("");
    let [empEmail , setEmail] = useState("");
    let [empContact , setContact] = useState("");
    let [gender , setGender] = useState("");

    

        useEffect(()=>{
            fetch("http://localhost:4005/employeedetails/"+id)
            .then((res)=>{return res.json()})
            .then((exEmp)=>{setName(exEmp.empName);
                            setEmail(exEmp.empEmail);
                            setContact(exEmp.empContact);
                            setGender(exEmp.gender);
            })
        
           },[])

    let handleUpdate = (e)=>{
        e.preventDefault();

        let replacingEmp = {empName ,empEmail,empContact, gender};
        


        fetch("http://localhost:4005/employeedetails/"+ id , 
        {
            method:"PUT",
            headers : {"Accept" : "application/json",
            "Content-Type" : "application/json"},
            body:JSON.stringify(replacingEmp)
        })
        .then(()=>{alert("data is updated");
        history.pushState("/Sheets")
        
    })
        
    
    }



    return ( 
        <div className="home-content">

            <form onSubmit={handleUpdate}>

    <label>Name : </label> <input type="text" value={empName} onChange={(e)=>{setName(e.target.value)}} /><br></br><br/>
    <label>Email : </label> <input type="email" value={empEmail} onChange={(e)=>{setEmail(e.target.value)}} /><br></br><br/>
    <label>Contact : </label> <input type="tel" value={empContact} onChange={(e)=>{setContact(e.target.value)}} /><br></br><br/>

    <label for="gender">Select your gender:</label>
    <select name="gender" id="gender">
        <option value="Male" onClick={(e)=>{setGender(e.target.value)}}>Male</option>
        <option value="Female" onClick={(e)=>{setGender(e.target.value)}}>Female</option>
        <option value="Others" onClick={(e)=>{setGender(e.target.value)}}>Others</option>
        
    </select>

<input type="Submit" value="Update"/>
            </form>

        </div>
    );
}

export default Update;