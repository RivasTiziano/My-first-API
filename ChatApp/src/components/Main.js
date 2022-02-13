import "./Main.css";
import Post from "./Post";
import TextField from '@mui/material/TextField';
import {useState} from "react";


const Main = () => {
  const [posts, setPosts] = useState([]);
  const [input, setImput] = useState({
    title: "",
    text: ""
  });

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(input.title && input.text){
      setPosts([input,...posts]);
      setImput({
        title: "",
        text: ""
      })
    }else{
      alert("Add your post");
    }
  }

  return (
    <div className="main">
        <div className="main__input" >
          <form noValidate autoComplete="off">
            <div className="main__inputForm">
              <TextField value={input.title} onChange={e => setImput({...input, title: e.target.value})} className="main__inputFormText" id="standard-basic" label="Title" variant="standard" />
              <TextField value={input.text} onChange={e => setImput({...input, text: e.target.value})}  id="outlined-basic" label="Enter yout post here..." variant="outlined"/>
              <button type="submit" onClick={handleSubmit}></button>
            </div>
          </form>
        </div>
        <div className="main__posts">
        {
          posts.map(({title, text}) => <Post title={title} text={text}/>)
        }
        </div>
    </div>
    );
};

export default Main;
