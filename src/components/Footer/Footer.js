export default function Footer() {

    const socials = [
        { name: 'twitter', href: '/', iconClass: 'fa-brands fa-twitter-square' },
        { name: 'facebook', href: '/', iconClass: 'fa-brands fa-facebook-square' },
        { name: 'instagram', href: '/', iconClass: 'fa-brands fa-instagram-square' },
    ]

    return (
        <footer>
            <p>Images courtesy of <a href="http://unsplash.com/">unsplash</a>.</p>
            <p>Why are you even reading this?! There's never anything interesting in the footer!</p>
            <ul>
                {socials.map(social => (
                    <li key={social.name}>
                        <a href={social.href} title={social.name}>
                            <i className={social.iconClass + ' fa-2x'}></i>
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}