// Simple contact form page (static)

const ContactPage = () => {
  return (
    <div className="container mt-4">
      <h2>Contact Us</h2>
      <p>If you have feedback or questions, we’d love to hear from you!</p>
      <form>
        <input className="form-control mb-2" type="text" placeholder="Your Name" />
        <input className="form-control mb-2" type="email" placeholder="Your Email" />
        <textarea className="form-control mb-2" rows={4} placeholder="Message" />
        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
