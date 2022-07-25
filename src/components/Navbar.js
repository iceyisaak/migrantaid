import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="
    flex
    justify-between
    content-center
    items-center
    h-32
    px-20
    ">
      <div className="">
        <h2 className="font-display text-6xl">
          <Link href='/'>
            <a>
              MigrantAid
            </a>
          </Link>
        </h2>
      </div>

      <div className="w-3/5">
        <ul className="flex justify-between items-center">
          <li className="text-2xl">
            <Link href="/about">
              <a>
                About Us
              </a>
            </Link>
          </li>
          <li className="text-2xl">
            <Link href='/offers'>
              <a>
                Our Offers
              </a>
            </Link>
          </li>
          <li className="text-2xl">
            <Link href='/join'>
              <a>
                Join Us
              </a>
            </Link>
          </li>
          <li className="text-2xl">
            <Link href='/contact'>
              <a>
                Contact
              </a>
            </Link>
          </li>
          <li className="text-2xl">
            <Link href='/blog'>
              <a>
                Blog
              </a>
            </Link>
          </li>
          <li className="text-2xl">
            <Link href='/login'>
              <a>
                Login
              </a>
            </Link>
          </li>
          <Link href='/donate'>
            <a>
              <button className="bg-blue-900 px-3 py-3 text-center rounded-2xl w-32">
                <li className="text-2xl text-center text-gray-300">
                  Donate
                </li>
              </button>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;