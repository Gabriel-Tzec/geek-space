import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-white text-2xl font-bold">Geek Space</a>
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-white hover:text-gray-300">Home</a>
            </Link>
          </li>

          <li>
            <Link href="/favoritos" legacyBehavior>
              <a className="text-white hover:text-gray-300">Mis Favoritos</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
