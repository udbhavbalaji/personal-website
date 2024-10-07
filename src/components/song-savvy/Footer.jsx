import { footerContent } from "@data/songsavvy";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='container p-4 mx-auto w-full'>
      <div className='flex flex-col sm:flex-row items-center justify-between'>
        <ul className='inline-flex justify-between mx-auto w-7/12'>
          {footerContent.map((list, index) => (
            <li key={index}>
              <h2 className='text-3xl font-semibold my-10 w-full mx-auto text-center'>
                {list.title}
              </h2>
              <ul>
                {list.items.map((obj, idx) => (
                  <li
                    key={idx}
                    className='text-stone-400 hover:text-white my-2'
                  >
                    {obj.linkType === "route" ? (
                      <Link to={obj.link}>{obj.title}</Link>
                    ) : (
                      <a href={obj.link}>{obj.title}</a>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
