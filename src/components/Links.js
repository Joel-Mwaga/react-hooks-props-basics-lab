const Links = ({ links, github, linkedin }) => {
    const githubLink = github || (links && links.github);
    const linkedinLink = linkedin || (links && links.linkedin);

    return (
        <div>
            <h3>Links</h3>
            {githubLink && <a href={githubLink}>{githubLink}</a>}
            {linkedinLink && <a href={linkedinLink}>{linkedinLink}</a>}
        </div>
    );
};

// Add default props to handle missing values
Links.defaultProps = {
    links: null,
    github: null,
    linkedin: null,
};

export default Links;