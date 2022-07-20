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
          MigrantAid
        </h2>
      </div>

      <div className="w-3/5">
        <ul className="flex justify-between items-center">
          <li className="text-2xl">
            About Us
          </li>
          <li className="text-2xl">
            Our Offers
          </li>
          <li className="text-2xl">
            Join Us
          </li>
          <li className="text-2xl">
            Contact
          </li>
          <li className="text-2xl">
            Blog
          </li>
          <li className="text-2xl">
            Login
          </li>
          <button className="bg-blue-900 px-3 py-3 text-center rounded-2xl w-32">
            <li className="text-2xl text-center text-gray-300">
              Donate
            </li>
          </button>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;