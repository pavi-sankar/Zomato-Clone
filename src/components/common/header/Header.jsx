import "./header.css"

function Header({generatePortal}) {

  return (
    <div className='max-width header'>
      <div className='header-left'>
        <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
        alt='Zomato-logo'
        className='header-logo' />
       </div>
       <div className="header-right">
        <div className="header-container">
          <div className="location-search">
            <div className="location-icon-container">
              <i className="fi fi-rr-marker abs-center location-icon"></i>
              <div>Banglore</div>
            </div>
            <i className="fi fi-rr-caret-down abs-center"></i>
          </div>
          <span className="separator"></span>
          <div className="header-searchBar">
            <i className="fi fi-rr-search abs-center search-icon"></i>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="account-container">
          <button onClick={generatePortal} className="Login">
            Log In
          </button>
             
          <button onClick={generatePortal} className="Sign-up">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Header