function Header(props) {
    return (
      <header>
  <h1>My Portfolio</h1>
  {/* Navigation menu below which will include links to our page sections */}
  <nav>
    <a href="#work">Projects </a>
    <a href="#contact">Contact</a>
    <a href="#about">About Me</a>
  </nav>
  <form>
    <input id="searchText" type="text" placeholder="  Search" />
    <input id="searchBtn" type="button" onmouseover="" defaultValue="Search" />
  </form>
</header>

    );
  }
  
  export default Header;