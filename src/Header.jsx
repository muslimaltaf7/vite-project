import React from 'react';
 
const Header = () => (
<header className="bg-gray-800 text-white p-4">
<nav className="container mx-auto flex justify-between items-center">
<h1 className="text-xl font-bold">DemandScience</h1>
<ul className="flex space-x-4">
<li><a href="/" className="hover:text-gray-400">Home</a></li>
<li><a href="/" className="hover:text-gray-400">Products</a></li>
<li><a href="/" className="hover:text-gray-400">Contact</a></li>
</ul>
</nav>
</header>
);
 
export default Header;