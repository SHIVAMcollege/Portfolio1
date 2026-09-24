function CategoryFilter({
    selectedCategory,
    setSelectedCategory
}) {
    const categories = [
        "All",
        "Web Development",
        "Programming",
        "Technology",
        "Student Life"
    ];

    return (
        <div className="category-container">

            {categories.map((category) => (
                <button
                    key={category}
                    className={
                        selectedCategory === category
                            ? "category-button active"
                            : "category-button"
                    }
                    onClick={() =>
                        setSelectedCategory(category)
                    }
                >
                    {category}
                </button>
            ))}

        </div>
    );
}

export default CategoryFilter;