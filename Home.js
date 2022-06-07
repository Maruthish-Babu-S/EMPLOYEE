import {useState} from 'react';

const Home = () => {

    let [empName , setName] = useState("");
    let [empEmail , setEmail] = useState("");
    let [empContact , setContact] = useState("");
    let [gender , setGender] = useState("");

    let handelSubmit = (e)=>{
        e.preventDefault();

        let newEmp = {empName ,empEmail,empContact, gender};


        fetch("http://localhost:4005/employeedetails" , 
        {
            method:"POST",
            headers : {"Content-Type" : "application/json"},
            body:JSON.stringify(newEmp)
        })
        .then(()=>{alert("data is added");
    })
    
        
    
    }



    return ( 
        <div className="home-content">

            <form onSubmit={handelSubmit}>

    <label>Name : </label> <input type="text" value={empName} onChange={(e)=>{setName(e.target.value)}} /><br></br><br/>
    <label>Email : </label> <input type="email" value={empEmail} onChange={(e)=>{setEmail(e.target.value)}} /><br></br><br/>
    <label>Contact : </label> <input type="tel" value={empContact} onChange={(e)=>{setContact(e.target.value)}} /><br></br><br/>
    <label for="gender">Select your gender:</label>
    <select name="gender" id="gender">
        <option value="Male" onClick={(e)=>{setGender(e.target.value)}}>Male</option>
        <option value="Female" onClick={(e)=>{setGender(e.target.value)}}>Female</option>
        <option value="Others" onClick={(e)=>{setGender(e.target.value)}}>Others</option>
        
    </select>

                    <br />
                <br/>

<input type="submit" />
            </form>

        </div>
    );
}

export default Home