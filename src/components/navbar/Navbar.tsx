import "./navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>DashReact</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" />
        <img src="app.svg" alt="" />
        <img src="expand.svg" alt="" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=complete&cs=tinysrgb&w=1600&lazy=load" alt="" />
          <span>Chetan</span>
        </div>
        <img src="settings.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar