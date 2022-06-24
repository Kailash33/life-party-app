export default function Destinations() {
    const images = [
        { id: 1, className: 'small', url: '../images/image-1.jpg' },
        { id: 2, className: 'large', url: '../images/image-2.jpg' },
        { id: 6, className: 'large', url: '../images/image-5.jpg' },
        { id: 4, className: 'small', url: '../images/image-4.jpg' },
    ]
    return (
        <section className="destinations">
            <h3 className="title">Some of our destinations:</h3>
            <p>Tired of the beach alone? Are the plains too plain? Come along with us on one of our unusual adventures with
                yout friends. Here are some pictures from people who have had elevated experiences with us.</p>
            <hr />

            <ul className="grid">
                {
                    images.map(
                        (img) => (
                            <li
                                key={img.id}
                                className={img.className}
                                style={{ backgroundImage: `url(${img.url})` }}
                            >
                            </li>
                        )
                    )
                }
            </ul>
        </section>
    );
}