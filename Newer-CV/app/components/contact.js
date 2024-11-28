"use client";

export default function Contact() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        window.open(`mailto:renzopel@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`);
    };

    return (
        <form onSubmit={handleFormSubmit} className= "contact-box">
            <div>
                <label htmlFor="subject" className= "contact-label">
                    Subject:
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    required
                    className= "contact-textArea"
                />
            </div>
            <div>
                <label htmlFor="message" className= "contact-label">
                    Your Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Enter your message here"
                    required
                    className="contact-textArea"
                />
            </div>
            <button
                type="submit"
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#0073e6',
                    color: 'white',
                    border: 'solid',
                    borderRadius: '5px',
                    fontSize: '16px',
                    cursor: 'pointer',
                }}
            >
                Send Message
            </button>
        </form>
    );
}
