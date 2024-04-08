import Icon from "../assets/icon.svg";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={Icon} />

      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  );
}
