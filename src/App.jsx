import './App.css'
import instagramIcon from './assets/instagram.png'

function App() {
  return (
    <>
      <div>
        <h1>Ravi Mahar</h1>
        <p>Computer Instructor</p>
        <p>Message me at <a href="https://instagram.com/ravimahar5695" target="_blank"><img src={instagramIcon} alt="Instagram" width="18" height="18" style={{verticalAlign: 'middle'}}/></a></p>
      </div>
    </>
  )
}

export default App
