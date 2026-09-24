function BlogCard({
    title,
    category,
    date,
    description,
    readTime,
    onRead
}) {
    return (
        <article className="blog-card">

            <div className="blog-image">
                {category}
            </div>

            <div className="blog-content">

                <span className="blog-category">
                    {category}
                </span>

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="blog-meta">
                    <span>{date}</span>
                    <span>{readTime}</span>
                </div>

                <button className="read-button" type="button" onClick={onRead}>
                    Read Article
                </button>

            </div>

        </article>
    );
}

export default BlogCard;