import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '70px' }}>{children}</main>
      <Footer />
    </>
  );
}
