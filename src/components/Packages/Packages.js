export default function Packages() {

    const packages = [
        {
            title: 'Guided Trips',
            iconClass: 'fa fa-compass',
            description: `Looking for the complete experience? Take a tour with one of our experts. They'll show you secrets
                        that you're likely to miss otherwise.`
        },
        {
            title: 'Photo Trips',
            iconClass: 'fa fa-camera-retro',
            description: `Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one of
                        our <em>Life is a party!</em> buses.`
        },
        {
            title: 'Biking Trips',
            iconClass: 'fa fa-bicycle',
            description: `If bicycles are more your speed, consider taking a tour through one of our mountain or city bike
                        paths. We'll provide the bikes, and lunch too!`
        },
        {
            title: 'Racing Trips',
            iconClass: 'fa fa-flag-checkered',
            description: `Got a competitive spirit? Sign up for one of our challenge-based marathons! Try to reach the summit
                        before any other group.`
        }
    ]

    return (
        <section className="packages">
            <h3 className="title">Tour Packages</h3>
            <p>We offer a variety of group (minimum 5 people) packages. Whether you've spent some summers together or this
                might be your first adventure, we've got the perfect vacation for you.</p>
            <hr />

            <ul className="grid">
                {packages.map((p) => (
                    <li key={p.title}>
                        <i className={p.iconClass + ' fa-4x'}></i>
                        <h4>{p.title}</h4>
                        <p dangerouslySetInnerHTML={{ __html: p.description }}></p>
                    </li>
                ))}
            </ul>
        </section>
    );
}