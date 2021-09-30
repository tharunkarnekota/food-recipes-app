import React,{useState} from 'react'
import Products from './products';

const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  const YOUR_APP_ID = "c76438b1";
  const YOUR_APP_KEY = "f760e55ab34c58a0a6563885a3fe6020";
  const changehandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`).then(
      res => res.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div>
      <center>
          <h2> Food Recipe App </h2>
          <form onSubmit={submitHandler}>
            <input type="text" value={search} onChange={changehandler}/><br /><br />
            <input type="submit" className="btn btn-primary" value="search" />
          </form>
          {data.length>= 1 ? <Products/>:null }
        </center>
    </div>
  )
}

export default App


