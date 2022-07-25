import Link from "next/link";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="
    bg-blue-900
      pt-40
      pb-72
      px-40
      flex
      justify-between
    ">
      <div className="links">
        <ul>
          <li className="text-2xl mb-3">
            <Link href='/contact'>
              <a>
                Contact Us
              </a>
            </Link>
          </li>
          <li className="text-2xl mb-3">
            <Link href='/about'>
              <a>
                About Us
              </a>
            </Link>
          </li>
          <li className="text-2xl mb-3">
            <Link href='/impressum'>
              Impressum
            </Link>
          </li>
          <li className="text-2xl mb-3">
            <Link href='/datenschutz'>
              <a>
                Datenschutz
              </a>
            </Link>
          </li>
          <li className="text-2xl mb-3">
            <Link href='/agb'>
              <a>
                AGB
              </a>
            </Link>
          </li>
          <li className="text-2xl mb-3">
            <Link href='/join'>
              <a>
                Join Us
              </a>
            </Link>
          </li>
          <li className="text-2xl mb-3">
            <Link href='/donate'>
              <a>
                Donate
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <div>
          <h3 className="text-2xl mb-2">
            MigrantAid e.V.
          </h3>
          <p className="text-2xl mb-5">
            Behringerstr. 93 <br />
            55111 Wainz
          </p>
          <h3 className="text-2xl mb-9">
            Mo. - Fr. 10:00 - 17:00
          </h3>
          <h4 className="text-2xl mb-5">
            0123 456 7890
          </h4>
          <p className="text-2xl underline">
            info@migrantaid.de
          </p>
        </div>
      </div>
      <div className="social-icons">
        <h3 className="text-right text-4xl mb-4">
          Follow us
        </h3>
        <ul className="flex justify-end mb-32">
          <li className="mx-1 ml-4">
            <FaFacebookF className="text-5xl" />
          </li>
          <li className="mx-1 ml-4">
            <FaInstagram className="text-5xl" />
          </li>
        </ul>
        <h1 className="font-display text-6xl">
          <Link href='/'>
            <a>
              MigrantAid
            </a>
          </Link>
        </h1>
      </div>
    </footer>
  );
};
export default Footer;