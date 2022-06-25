import logo from './logo.svg';

function Header() {
  return (
    <header>
      <nav className='nav'>
        <img className='logo' src={logo} alt='React Logo'/>
        <h3 className='nav--logo_text'>React Facts</h3>
        <h4 className='nav--title'>React Course - Project 1</h4>
      </nav>
    </header>
  );
}

export default Header;
