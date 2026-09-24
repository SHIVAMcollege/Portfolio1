import { useState } from "react";

function Newsletter() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubscribed(true);
        setEmail("");
    };

    return (
        <section
            id="subscribe"
            className="newsletter"
        >
            <h2>Subscribe to My Newsletter</h2>

            <p>
                Receive new articles and updates directly
                in your inbox.
            </p>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                    required
                />

                <button type="submit">
                    Subscribe
                </button>
            </form>
            {subscribed && <p className="newsletter-success">You're on the list. Welcome in.</p>}
        </section>
    );
}

export default Newsletter;