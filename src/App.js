import './App.css';
import { useEffect, useState } from "react"
import Table from './components/Table'
function App() {
  const [blogs, setBlogs] = useState(null);
   useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(res => {
        return res.json();
      })
      .then(data => {
         setBlogs(data);
      })
  }, []);
 if(blogs){
    return (
      <div >
      <div className='heading'>
        <h3>Github Open Issues Portal</h3>
      </div>

      <Table issues={blogs}/>
      </div>
    )
    }

}
export default App;
