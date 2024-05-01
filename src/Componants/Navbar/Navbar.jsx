
import Links from "../Link/Links";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "404", path: "*" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-4">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {
            open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
        }

      
      </div>
      <ul className={`md:flex absolute md:static duration-1000
      ${open ? "" : "hidden"}
      bg-yellow-300 px-6`}>
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
