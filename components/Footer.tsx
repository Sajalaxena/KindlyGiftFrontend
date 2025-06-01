// components/Footer.tsx
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f2ecf9] text-[#1a102c] mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">Phone: +91 9760760329</p>
          <p>Email: help.kindlygifts@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Social Media</h2>
          <div className="flex space-x-4 text-2xl">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <p className="mb-3 text-sm">No signup required for exploring the products</p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-400 text-center text-sm text-gray-700 py-4">
        © 2025 Kindly Gift, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
