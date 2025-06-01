// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link href="/" style={styles.logo}>KindlyGifts</Link>
      <div style={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #EDEDED',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#0A74DA',
  },
  links: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
};

export default Navbar;
