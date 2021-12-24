import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
    
  );
}
// const RegisterText = (props) =>{
//   return (
//     <p>Hi, {props.registerUserName}!</p>
//   )
// }

// const RegisterUserProfile = (props) =>{
//   return (
//     <div>
//       <p>{props.registerUserAge}</p>
//       <p>{props.registerUserCountry}</p>
//     </div>
    
//   )
// }


// const App = () => {
//   return (
//     <div>
//       <RegisterText registerUserName="Jack"></RegisterText>
//       <RegisterUserProfile registerUserAge={22} registerUserCountry="US"></RegisterUserProfile>
//       <RegisterText registerUserName="Mary"></RegisterText>
//       <RegisterUserProfile registerUserAge={20} registerUserCountry="UK"></RegisterUserProfile>
//     </div>
//   )
// }

export default App;
