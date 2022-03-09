import contact from './img/contact.svg';
import searchIcon from './img/search.svg';
import logo from './img/logo.svg';
import logo_glow from './img/logo_glow.svg';
import './App.scss';

function App() {
  return (
    <body>
      <div className="App">

        <div className="header">

          <div className="searchInput">
            <input className="search" type="text" id="search"></input>
              <div className='center noSelect'>
                <img src={searchIcon} className="searchIcon"></img>
                <p class="searchText">Search</p>
              </div>
          </div>

          <div className="logoContainer">
            <img src={logo_glow} className="logo noSelect center loopBlur"></img>
            <img src={logo_glow} className="logo noSelect center loopBlur"></img>
            <img src={logo} className="logo noSelect center"></img>
          </div>

            <div className="contactButton contactBorderGradient">
              <div className='center'>
                <img src={contact} className="contactIcon"></img>
                <p className="contactText">Contact</p>
              </div>
            </div>
          </div>
        </div>
    </body>
  );
}

export default App;

