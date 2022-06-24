export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h3 className="title">Learn more</h3>
            <p>Want to know about our upcoming events, or come to one of our mixers? Just sign up for our mailing list. No
                spam from us, we promise! Except for the spam we give you to keep up your energy while you're having fun
                with your friends. Have a blast! We have tons of that.</p>
            <hr />
            <form>
                <input type="email" placeholder="Email" />
                <a href="/" className="btn">Subscribe now</a>
            </form>
        </section>
    );
}