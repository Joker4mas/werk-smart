import { Card } from "rsuite";

import PropTypes from "prop-types";

interface ContactCardProps {
  title: string;
  children: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, children }) => (
  <Card className="p-4 shadow-md rounded-lg">
    <Card.Header className="text-lg font-semibold mb-4">{title}</Card.Header>
    <Card.Body className="text-gray-600 leading-relaxed">{children}</Card.Body>
  </Card>
);

const Contact = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-12">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl text-blue-700 font-bold">
            We’d love to hear from you
          </h1>
          <p className="text-gray-500 my-4">Let us know how we can help out</p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <ContactCard title="Sales">
            Let us show you what Werk can do for your team. Get in touch at{" "}
            <strong>sales@werk.com</strong>.
          </ContactCard>
          <ContactCard title="General Inquiries">
            For anything else on your mind, including partnership ideas, say
            hello: <strong>hello@werk.com</strong>.
          </ContactCard>
          <ContactCard title="Customer Support">
            For any product or technical questions, or to report a bug, please
            use our online form via the Help Center or email{" "}
            <strong>support@werk.com</strong>.
          </ContactCard>
          <ContactCard title="Address">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <span>8502 Preston Rd. Inglewood, Maine 98380, USA</span>
              <span>Firs Cottage, Adams Road, Kirk Langley, DE6 4LW, UK</span>
            </div>
          </ContactCard>
        </div>
      </div>
    </>
  );
};

export default Contact;

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
