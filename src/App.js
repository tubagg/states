import {useState} from "react";


function App() {
  const [name,SetName] = useState("Tugba");
  const [age,SetAge] = useState(22);
  const [friends,SetFriends] = useState(["ayse","Ahmet","Demir"]);
  const [adress,SetAdress] = useState({title:"İstanbul",zip:34000});

  return (
    <div className="App">
      <h1>Merhaba {name} </h1>
      <h1> {age} </h1>
      <button onClick={()=>SetName("Ayşe")}>Change Name</button>
      <button onClick={()=>SetAge(20)}>Change Age</button>

      <hr/>
      <br></br>

      <h2>Friends</h2>
      {
        friends.map((friend,key) => 
        (<div key ={key}>{friend}</div>))
      }
<br/>
<button onClick={()=>SetFriends([...friends,"Emre"])}>Add New Friend</button>

<hr/>
<br></br>

<h2>Adress</h2>
<div>{adress.title} {adress.zip}</div>
<br></br>

<button onClick={()=>SetAdress({...adress,title:"Bursa",zip:16000})}> Change the Adress</button>
   
    </div>
  );
}

export default App;
