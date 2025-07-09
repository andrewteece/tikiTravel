import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className='bg-white shadow-md fixed w-full z-1 top-0 left-0'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <div>
          <a href='#' className='font-semibold hover:text-blue-600 font-mono'>
            <FontAwesomeIcon icon={faUmbrella} className='pr-2' />
            Tiki Travel
          </a>
        </div>
        <ul className='space-x-8 text-gray-700'>
          <li>
            <a href='#home' className='hover:text-blue-600'>
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
