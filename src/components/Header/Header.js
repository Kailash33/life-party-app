import { Link } from "react-router-dom";

export default function Header() {
    const navigations = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Tours", link: "/" },
        { id: 3, name: "About", link: "/" },
        { id: 4, name: "Contact", link: "/" }
    ]

    return (
        <header>
            <h2>
                <Link href="/">
                    Life is a party!
                </Link>
            </h2>
            <nav>
                {
                    navigations.map(
                        (nav) => (
                            <li key={nav.id}>
                                <Link to={nav.link}>
                                    {nav.name}
                                </Link>
                            </li>
                        )
                    )
                }
            </nav>
        </header>
    );
}