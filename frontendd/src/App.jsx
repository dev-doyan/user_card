import { useState } from 'react'
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  const [showCard, setShowCard] = useState(false)

  const getRes = async () => {
    // you will write this
    // when done, call setShowCard(true)

    axios.post("http://localhost:4000/",{
      name:name,
      age:age,
      city:city
    })
    .then((e)=>{
       console.log(e.data)
      if (e.data.message === "post success") {
        setShowCard(true)
    }
  })
    .catch((e)=>{
      console.log(e)
    })


    
  }

  if (showCard) {
    return (
      <div>
        <h1>Hello, {name} from {city}!</h1>
        <p>Age: {age}</p>
        <button onClick={() => setShowCard(false)}>Go Back</button>
      </div>
    )
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => getRes()}>Send</button>
    </div>
  )
}

export default App