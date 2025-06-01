// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { FaHome, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Button } from '@/components/ui/button'; // from shadcn

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="md:px-8 px-3">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            KindlyGifts
          </Link>

          {/* Navigation Links with Icons */}
          <div className="flex space-x-4">
            <Link href="/" passHref>
              <Button variant="ghost" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <FaHome className="text-lg" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>

            <Link href="/profile" passHref>
              <Button variant="ghost" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <FaUser className="text-lg" />
                <span className="hidden sm:inline">Profile</span>
              </Button>
            </Link>

            <Link href="/cart" passHref>
              <Button variant="ghost" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <FaShoppingCart className="text-lg" />
                <span className="hidden sm:inline">Cart</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
