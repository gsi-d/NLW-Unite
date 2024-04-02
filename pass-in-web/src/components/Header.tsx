import Icon from "../assets/icon.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={Icon} />

      <nav className="flex items-center gap-5">
        <a className="font-medium text-sm text-zinc-300" href="/">
          Eventos
        </a>
        <a className="font-medium text-sm" href="">
          Participantes
        </a>
      </nav>
    </div>
  );
}
