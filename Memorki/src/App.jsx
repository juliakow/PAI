import Memorki from "./components/memorki/memorki";


const cardImages = [
  { "id": 1, "src": "/public/img/Voldemort.webp" },
  { "id": 2, "src": "/public/img/images.jpg" },
  { "id": 3, "src": "/public/img/1.jpg" },
  { "id": 4, "src": "/public/img/2.webp" },
  { "id": 5, "src": "/public/img/3.jpg" },
  { "id": 6, "src": "/public/img/4.webp" },
  { "id": 7, "src": "/public/img/5.webp" },
  { "id": 8, "src": "/public/img/6.jpg" },

]

function App() {
  // mieszanie kart
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(()=> Math.random()- 0,5)
  }
  return(
      <>
      <div className="App">
          <h1>Harry Potter Memory</h1>
          <button>New Game</button>
        
      </div>
      
      </>
  )
}

export default App;