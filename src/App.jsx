import { useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import BlogHeader from "./components/BlogHeader";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import BlogCard from "./components/BlogCard";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const blogPosts = [
    {
        id: 1,
        title: "Introduction to Web Development",
        category: "Web Development",
        date: "September 10, 2026",
        readTime: "5 min read",
        description: "Learn the basics of HTML, CSS, and JavaScript and understand how websites are created."
    },
    {
        id: 2,
        title: "Why Every Student Should Learn Programming",
        category: "Programming",
        date: "September 12, 2026",
        readTime: "4 min read",
        description: "Discover how programming improves logical thinking, creativity, and problem-solving skills."
    },
    {
        id: 3,
        title: "Latest Trends in Technology",
        category: "Technology",
        date: "September 15, 2026",
        readTime: "6 min read",
        description: "Explore interesting technology trends and how they are changing our daily lives."
    },
    {
        id: 4,
        title: "Managing College and Personal Projects",
        category: "Student Life",
        date: "September 17, 2026",
        readTime: "4 min read",
        description: "Practical tips for managing academics, technical projects, and personal development."
    },
    {
        id: 5,
        title: "Understanding React Components",
        category: "Web Development",
        date: "September 19, 2026",
        readTime: "7 min read",
        description: "Understand how reusable components make React applications easier to maintain."
    },
    {
        id: 6,
        title: "Getting Started with Python",
        category: "Programming",
        date: "September 20, 2026",
        readTime: "5 min read",
        description: "A beginner-friendly introduction to Python programming and its practical uses."
    }
];

function App() {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPost, setSelectedPost] = useState(null);

    const filteredPosts = useMemo(() => {

        return blogPosts.filter((post) => {

            const matchesSearch =
                post.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                post.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

            const matchesCategory =
                selectedCategory === "All" ||
                post.category === selectedCategory;

            return matchesSearch && matchesCategory;

        });

    }, [searchTerm, selectedCategory]);

    return (
        <>
            <Navbar />

            <main>

                <BlogHeader />

                <section
                    id="articles"
                    className="articles-section"
                >

                    <div className="section-heading-row">
                        <div>
                            <p className="section-kicker">THE NOTEBOOK</p>
                            <h2>Latest Articles</h2>
                        </div>
                        <span className="result-count">{filteredPosts.length} {filteredPosts.length === 1 ? "story" : "stories"}</span>
                    </div>

                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />

                    <CategoryFilter
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                    <div className="blog-grid">

                        {filteredPosts.length > 0 ? (

                            filteredPosts.map((post) => (
                                <BlogCard
                                    key={post.id}
                                    title={post.title}
                                    category={post.category}
                                    date={post.date}
                                    description={post.description}
                                    readTime={post.readTime}
                                    onRead={() => setSelectedPost(post)}
                                />
                            ))

                        ) : (

                            <p className="no-results">
                                No articles found.
                            </p>

                        )}

                    </div>

                </section>


                <section id="about" className="about-section">

                    <h2>About This Blog</h2>

                    <p>
                        ShivamBlogs is a learning-focused blog
                        where I share ideas, experiences, and
                        knowledge related to programming,
                        technology, and student life.
                    </p>

                </section>


                <Newsletter />

            </main>

            <Footer />

            {selectedPost && (
                <div className="article-modal-backdrop" onClick={() => setSelectedPost(null)}>
                    <article className="article-modal" onClick={(event) => event.stopPropagation()}>
                        <button className="modal-close" type="button" aria-label="Close article" onClick={() => setSelectedPost(null)}>x</button>
                        <span className="blog-category">{selectedPost.category}</span>
                        <h2>{selectedPost.title}</h2>
                        <p className="modal-meta">{selectedPost.date} · {selectedPost.readTime}</p>
                        <p>{selectedPost.description} This reading preview is part of the ShivamBlogs learning journal, where ideas are explored through practical examples, small experiments, and lessons from building on the web.</p>
                        <button className="modal-action" type="button" onClick={() => setSelectedPost(null)}>Back to stories</button>
                    </article>
                </div>
            )}
        </>
    );
}

export default App;