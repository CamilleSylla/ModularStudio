import style from "./navbar.module.scss";
import Link from 'next/link'

export default function Navbar() {
  const menu = [
    {
      label: "Accueil",
      link: "/",
    },
    {
      label: "Offres",
      link: "/",
    },
    {
      label: "Showcase",
      link: "/",
    },
    {
      label: "Studio",
      link: "/",
    },
    {
      label: "Blog",
      link: "/",
    },
  ];

  const Menu = () => {
    return (
      <ul>
        {menu.map((el, i) => {
          return (
            <Link href={el.link}>
              <li>
                <p>{el.label}</p>
                <div />
              </li>
            </Link>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className={style.wrapper}>
      <Menu />
    </nav>
  );
}
