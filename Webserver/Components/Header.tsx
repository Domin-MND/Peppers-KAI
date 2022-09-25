// Next
import Image from "next/image";
import Link from "next/link";

// Configs
// Конфиги
import headerConfig from "../Configs/Components/Header.json";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Логотип
function Title() {
    return (
        <Link href={headerConfig.Designation.Link}>
            <a id="logo">
                <Image
                    src={headerConfig.Designation.Logo}
                    alt={headerConfig.Designation.Name}
                    width={50}
                    height={50}
                />
            </a>
        </Link>
    )
}

// Ссылки в хедере
function Links() {
    let links: any = [];
    Object.keys(headerConfig.Links).forEach(function (item) {
        links.push((
            <Link href={(headerConfig.Links as any)[item]} key={item}>
                <a>{item}</a>
            </Link>
        ));
    });
    return (
        <div className="links">
            {links}
        </div>
    )
}

export default function Header() {

    function Menu() {
        document.querySelector('header').classList.toggle('active');
    }

    return (
        <header>
            <Title />
            <Links />
            <FontAwesomeIcon
                icon={faBars}
                id="menu"
                onClick={Menu}
            />
        </header>
    );
}