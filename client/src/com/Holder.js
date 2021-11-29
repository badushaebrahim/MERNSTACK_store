import { useState, useEffect } from "react";
import Axios from "axios";
import Thecard from "./Thecard";

function Holder() {

	const [listOfUsers, setListOfUsers] = useState([]);
	const [head, setName] = useState("");
	const [date, setDatee] = useState(0);
	const [url, setUrl] = useState("");
	const [content, setContent] = useState("");
      
	useEffect(() => {
	  Axios.get("http://192.168.0.107:4000/getposts").then((response) => {
		  
	    setListOfUsers(response.data);
	    
	    //console.log(me)
	  });
	}, []);
      
	const createUser = () => {
	  Axios.post("http://localhost:4000/add", {
	    head,url,content,date
	  }).then((response) => {
	    setListOfUsers([
	      ...listOfUsers,
	      {
		head,url,content,date
	      },
	    ]);
	  })
	};

const deleters=(id)=>{
			console.log('delete')
		Axios.delete("http://loclhost/4000/deletepost/${id}")
}

	return (
		

<div className="App">
      <div class="card2">
        {listOfUsers.map((user,key) => {
          return (
            
            <><Thecard id={user.id} key={key} url={user.url} head={user.head} content={user.content} />
	    <h2 onClick={()=>{deleters(user._id)}}>X</h2></>
          );
        })}
     </div>
       
          
      <div class="boxr">
        <input type="date" placeholder="Date..." onChange={(event) => { setDatee(event.target.value);}}/>
	<input type="text" placeholder="heading..." onChange={(event) => { setName(event.target.value);}}/>
        <input type="text" placeholder="url..." onChange={(event) => { setUrl(event.target.value); }}/>
        <input type="text" placeholder="content..." onChange={(event) => { setContent(event.target.value);}}/>
	<input type="submit" />
        <button onClick={createUser}> add post </button>
      </div>
        <h1>

	</h1>
      </div>
   

		
	)
}

export default Holder
