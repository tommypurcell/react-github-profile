import './App.css'
import GitHubProfile from './GitHubProfile'
import './output.css'

function App() {
  return (
    <div className="App">
      <GitHubProfile
        userName={'tommypurcell'}
        accessToken={process.env.REACT_APP_ACCESS_TOKEN} // Accessing environment variable directly
      />
    </div>
  )
}

export default App
