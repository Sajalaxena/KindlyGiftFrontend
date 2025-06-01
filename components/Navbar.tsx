// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
<nav className="navbar">
  <div className="logo">KindlyGifts</div>
  <div className="links">
    <a href="/">Home</a>
    <a href="/cart">Cart</a>
  </div>
</nav>

  );
}
