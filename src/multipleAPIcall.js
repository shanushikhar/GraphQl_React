import './App.css';
import axios from 'axios';

const getData = async () => {
  console.log('first')
  let x1 = await axios.get('https://jsonplaceholder.typicode.com/users/1')
  let x2 = await axios.get('https://jsonplaceholder.typicode.com/users/' + `${x1.data.id + 1}`)
  let x3 = await axios.get('https://jsonplaceholder.typicode.com/users/' + `${x2.data.id + 1}`)

  for (let x = 1; x < 11; x++) {
    let y = await axios.get(`https://jsonplaceholder.typicode.com/users/${x}`)
    console.log(y.data)
  }

  console.log('hey')
   console.log(x1.data)
   console.log(x2.data)
   console.log(x3.data)
  // console.log('hi')
}

function App() {
  return (
    <div className="App">
      <button onClick={getData}>click me</button>
    </div>
  );
}

export default App;
