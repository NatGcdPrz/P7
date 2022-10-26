import "@/components/title/Title.css";

const Title = ({ title, location }) => {

    return (
        <article className="title_container">
            <h1 className="about_title">{title}</h1>
            <h2 className="about_subtitle">{location}</h2>
        </article>
    );
}

export default Title;