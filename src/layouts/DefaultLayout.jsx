import { Outlet, Link } from 'react-router-dom';

function DefaultLayout() {
  return (
    <>
      <header className="navbar bg-dark px-4">
        <Link to="/" className="navbar-brand text-white">Boolean Movies</Link>
      </header>
      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
