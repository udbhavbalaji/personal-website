import { Link } from "react-router-dom";

export default function Button({ title, link, linkType, className }) {
  if (!className) className = "";
  const appearance = (
    <div
      className={`px-10 py-2 bg-spotifyGreen text-white rounded-3xl border-2 border-spotifyGreen hover:bg-gray-800 hover:text-spotifyGreen mt-4 mb-6 mx-auto font-semibold ${className}`}
    >
      {title}
    </div>
  );
  const routeLink = <Link to={link}>{appearance}</Link>;
  const regularLink = <a href={link}>{appearance}</a>;
  
  return linkType === "route" ? routeLink : regularLink;
}
