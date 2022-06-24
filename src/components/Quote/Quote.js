export default function Quote(props) {
    return (
        <>
            <p className="quote">{props.quote}</p>
            <p className="author">- {props.author}</p>
        </>
    );
}