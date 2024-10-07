import { navbarItems } from "@data/songsavvy";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='py-8 z-20 top-0 left-0 bg-inherit'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <div className='flex items-center h-6 sm:h-9 mr-3 self-center text-2xl font-semibold font-portfolioFont'>
          <Link to='/' className='hover:text-white'>
            UB
          </Link>
          .
        </div>
        <div>
          <h1 className='text-5xl font-bold'>
            <Link to='/songsavvy' className='hover:text-white'>
              Song Savvy
            </Link>
          </h1>
        </div>
        <div>
          <ul className='inline-flex text-md font-medium'>
            {navbarItems.map((item, index) => (
              <li key={index} className='mx-4 my-2'>
                {item.linkType === "route" ? (
                  <a href={item.link} className='hover:text-white'>
                    {item.title}
                  </a>
                ) : (
                  <Link to={item.link} className='hover:text-white'>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
