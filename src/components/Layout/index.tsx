import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/comics">Comics</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>2022</footer>
    </>
  );
};

export default Layout;
