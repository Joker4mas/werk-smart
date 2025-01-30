import PropTypes from "prop-types";

interface FAQItemProps {
  question: string;
  answer: string;
}

// Reusable FAQ Item Component
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <div className="max-w-lg w-full p-4 bg-gray-800 shadow-md rounded-lg">
    <h2 className="text-gray-500 text-lg uppercase font-semibold">
      {question}
    </h2>
    <p className="text-gray-300 leading-relaxed">{answer}</p>
    <hr className="border border-gray-300 my-4" />
  </div>
);

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

// Main FAQ Section Component
const FAQSection = () => {
  const faqData = [
    {
      question: "Do you offer discounts?",
      answer:
        "Our free plan covers all the essential tools you need to manage your projects and teams effectively. We do not offer discounts on any of the paid plans.",
    },
    {
      question: "Can I use Werk for free?",
      answer:
        "Yes! The free version of Werk has all the essential features unlocked for individuals and teams.",
    },
    {
      question: "When do I need to upgrade?",
      answer:
        "You only need to upgrade if you require advanced features. Workspace members are billable. Project editors and guests are free.",
    },
    {
      question: "Can I use the free version of Werk with my team?",
      answer:
        "Yes. Werk is designed for remote team collaboration. Simply share a project or invite your teammates to join a workspace for free. The free version is limited to 5 teams and 75 total members. If you have a larger team, consider upgrading to the professional or agency plan.",
    },
    {
      question: "What if I have multiple teams?",
      answer:
        "The free plan allows up to 5 teams, while the professional plan allows a maximum of 20 teams. If you are a big organization with many teams, consider the agency plans for unlimited teams.",
    },
    {
      question: "Can I collaborate with people outside my workspace?",
      answer:
        "Yes, you can invite guests or collaborate with people outside your workspace by inviting them to a project or folder.",
    },
    {
      question: "What happens when I hit my usage limits?",
      answer:
        "You’ll still be able to use Werk for free, and we’ll let you know as soon as a limit is reached, from premium features to advanced integrations. We’re here to help and find the plan that works for you!",
    },
    {
      question: "Are there any monthly upload or storage limits?",
      answer:
        "No! Share and upload as many files as needed for free. There is only a per-upload file size limit which is 500MB on the free plan, 2GB on the professional plan, and 50GB on the unlimited plan. Tasks and projects do not count towards any limits.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6  my-8 justify-center">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
