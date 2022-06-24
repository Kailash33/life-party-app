import Quote from "../Quote/Quote";

export default function Testimonials() {
    const testimonials = [
        {
            author: "Albert Herter",
            quote: `Wow! This tour made me realize how much I love being outside with my friends. After going on
                one of these tours, I can safely say that beer pong is my favorite game all time, also the cultural programs
                were really interesting!`
        },
        {
            author: "Sharon Rosenberg",
            quote: `Wow, this really blew my mind. We had so much fun at the beach, and also some hidden secrets
                revealed. Come on, I'm living in this city for 5 years. Amazing!`
        },
        {
            author: "Luis Mendoza",
            quote: `If you want to understand your friends better, head to the mountains. I mean, seriously. It's
                like sitting next to a campfire and just talk in the sunset, woah. You know? It's like that.`
        },
    ];

    return (
        <section className="testimonials">
            <h3 className="title">
                Testimonials from our adventurers:
            </h3>
            <hr />
            {testimonials.map((t) => (<Quote quote={t.quote} author={t.author} key={t.author} />))}
        </section>
    );
}