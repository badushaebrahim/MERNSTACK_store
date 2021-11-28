import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Adduser() {
	const[username,setName]=useState('')
	const[pass,setPass]=useState('')
	const[email,setEmail]=useState('')
	const[userlsit,seUser]=useState([])
	useEffect(() => {
		axios.get("http://192.168.0.107:4000/getuser").then((response) => {
			
		  seUser(response.data);
		  
		  //console.log(me)
		});
	      }, []);
	const addUsers =() =>{
		axios.post("http://localhost:4000/adduser", {
			 
				username,email,pass
			
		})
		.then(function (response) {
			
		})
		.catch(function (error) {
		})
		
	}

	return (
		<div>
			<center>
       
	<input type="text" placeholder="username..." onChange={(event) => { setName(event.target.value);}}/>
        <input type="text" placeholder="email..." onChange={(event) => { setPass(event.target.value); }}/>
        <input type="text" placeholder="password..." onChange={(event) => { setEmail(event.target.value);}}/>
	
        <button onClick={addUsers}> Register </button>
	<a href="/posts">gogo</a>
	</center>
<center><h1>Users Here</h1>
	{userlsit.map((user,keys)=>{
		return(
			<div>
				<h2>{user.username}</h2>
				
				</div>
		)
	}
	)}</center>
		</div>
	)
}

export default Adduser
