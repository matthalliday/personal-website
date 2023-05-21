import { NavLink } from "@remix-run/react";

interface NavigationProps {
  links: { path: string; name: string }[];
}

export default function Navigation({ links }: NavigationProps) {
  return (
    <nav id="navigation" tabIndex={-1} className="focus:outline-none">
      <ul className="flex justify-end gap-4">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
