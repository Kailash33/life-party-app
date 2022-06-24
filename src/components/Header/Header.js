export default function Header() {
    const navigations = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Tours", link: "/" },
        { id: 3, name: "About", link: "/" },
        { id: 4, name: "Contact", link: "#contact" }
    ]

    return (
        <header>
            <h2>
                <a href="/">
                    Life is a party!
                </a>
            </h2>
            <nav>
                {
                    navigations.map(
                        (nav) => (
                            <li key={nav.id}>
                                <a href={nav.link}>
                                    {nav.name}
                                </a>
                            </li>
                        )
                    )
                }
            </nav>
        </header>
    );
}