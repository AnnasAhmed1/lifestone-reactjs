import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { H2, H3 } from "../helper/heading";
import { P3 } from "../helper/paragraph";
import "../styles/pages/faq.css";

const Faq = () => {
  const data = [];

  const categories = [
    {
      label: "Lifestone Platform",
      faq: [
        {
          question: "What is the Lifestone Platform?",
          answer:
            "The Lifestone Platform is an innovative and comprehensive solution designed to cater to all aspects of the stone industry. It offers a suite of modules and services tailored to the unique needs of stone businesses, countertop fabricators, architects, and designers. Our platform aims to streamline operations, optimize processes, and provide valuable tools for success in the stone industry.",
        },
        {
          question: "How can I benefit from the Lifestone Platform?",
          answer:
            "Whether you're a countertop fabricator looking to enhance your production efficiency or an architect seeking inspiration for stone projects, the Lifestone Platform has something for everyone. By using our platform, you can access modules like INNVeX for inventory management, INNTimeX for workforce tracking, and INNPages for customized web presence. Our goal is to empower you with the right tools to succeed in the stone industry.",
        },
        {
          question: "Can I customize my Lifestone Platform experience?",
          answer:
            "Absolutely! The Lifestone Platform is designed with flexibility in mind. You can tailor your experience by selecting the modules and services that best suit your needs. This means you only pay for what you require, ensuring cost-effectiveness and efficiency for your stone-related endeavors.",
        },
        {
          question:
            "Is the Lifestone Platform suitable for small and large businesses?",
          answer:
            "Yes, it is! We understand that the stone industry encompasses businesses of all sizes. Our platform is scalable, making it suitable for small countertop fabricators, large stone distributors, and everything in between. Regardless of your business's size, the Lifestone Platform can adapt to your unique requirements.",
        },
        {
          question: "What sets Lifestone apart from other solutions?",
          answer:
            "Lifestone stands out due to its commitment to innovation, simplicity, and transparency. We offer modules that are easy to use and understand, ensuring that stone businesses can make the most of our platform without unnecessary complexity. Additionally, our transparent billing, data analysis, and reporting set us apart as a trusted partner in the stone industry.",
        },
        {
          question:
            "Can I get technical support and training for the Lifestone Platform?",
          answer:
            "Absolutely! We provide comprehensive technical support and training to help you maximize the benefits of our platform. Our dedicated team is here to assist you with any questions or issues you may encounter. We want you to feel confident and empowered while using the Lifestone Platform.",
        },
        {
          question: "How can I get started with the Lifestone Platform?",
          answer:
            "Getting started is easy! Simply register with Lifestone and select the modules or services that align with your stone-related goals. You'll receive access to our user-friendly platform, and our team will guide you through the setup process. We're here to help you embark on your journey to success in the stone industry.",
        },
        {
          question: "Is my data secure on the Lifestone Platform?",

          answer:
            "We take data security seriously. The Lifestone Platform employs state-of-the-art security measures to protect your information. Your data is encrypted and stored securely, ensuring confidentiality and peace of mind.",
        },

        {
          question: "What future developments can I expect from Lifestone?",

          answer:
            "Lifestone is committed to continuous improvement and innovation. We plan to roll out exciting updates, including AI integration, enhanced modules, and new services, to further empower our users. Your feedback and needs will shape the future of the Lifestone Platform.",
        },

        {
          question: "How can I reach out for additional questions or support?",

          answer:
            "We encourage you to contact our support team for any inquiries or assistance you may require. You can reach us via email, phone, or through the contact forms on our platform. Your success is our priority, and we're here to support you every step of the way.",
        },

        {
          question: "What is the Stone Library on the Lifestone Platform?",

          answer:
            "The Stone Library is a valuable resource within the Lifestone Platform that offers a vast collection of information related to stone, including different types of stone materials, their characteristics, and best practices for stone handling and fabrication. It's a knowledge hub for stone enthusiasts, countertop fabricators, architects, and designers.",
        },

        {
          question: "What is the best way to access the Stone Library?",

          answer:
            "The most efficient and user-friendly way to access the Stone Library is through our AI-powered chatbot. Simply initiate a conversation with the chatbot by clicking on the chat icon located on our platform. The chatbot is your gateway to the extensive knowledge and resources available in the Stone Library. It can quickly provide you with information, guide you to specific articles or guides, and assist you in exploring the wealth of knowledge the library offers. It's like having a stone expert at your fingertips, ready to assist you 24/7.",
        },

        {
          question: "What kind of content can I find in the Stone Library?",

          answer:
            "In the Stone Library, you'll find a wide range of content, including articles, guides, videos, and expert insights. Learn about the different types of stone, their applications, maintenance tips, and the latest trends in the stone industry. It's a treasure trove of knowledge for anyone passionate about stone.",
        },

        {
          question: "Is the content in the Stone Library regularly updated?",

          answer:
            "Yes, we are committed to keeping the Stone Library up-to-date with the latest information, trends, and innovations in the stone industry. Our team of experts continuously adds new content and updates existing materials to ensure that you have access to the most current and relevant information.",
        },

        {
          question: " Can I contribute to the Stone Library?",
          answer:
            "Absolutely! We encourage contributions from stone industry professionals, experts, and enthusiasts. If you have valuable insights, tips, or knowledge to share, you can submit your content to be featured in the Stone Library. We believe in the power of collaboration and sharing expertise.",
        },

        {
          question:
            "How can I interact with the chatbot on the Lifestone Platform?",

          answer:
            "Interacting with our chatbot is simple. You can initiate a conversation with the chatbot by clicking on the chat icon located on our platform. The chatbot is here to assist you with any questions you may have, provide information, and guide you through the platform's features.",
        },

        {
          question:
            " What is the goal of the Chatbot on the Lifestone Platform?",

          answer:
            "Our chatbot is designed to enhance user experience by providing quick access to information, assistance with navigation, and answers to frequently asked questions. It's a helpful tool for both new and experienced users, ensuring a seamless and efficient interaction with the platform.",
        },

        {
          question:
            "Can I request specific information or assistance from the chatbot?",

          answer:
            "Certainly! The chatbot is here to assist you with a wide range of inquiries. Whether you need help finding specific content in the Stone Library, want to learn more about platform features, or require technical support, you can simply ask the chatbot, and it will guide you accordingly.",
        },

        {
          question:
            "Are there any subscription fees to access the Stone Library or use the chatbot?",

          answer:
            "Access to the Stone Library and chatbot services is included with your Lifestone Platform subscription. We aim to provide a comprehensive and value-packed experience for all our users without additional charges.",
        },

        {
          question:
            "How can I stay updated on the latest developments and additions to the Lifestone Platform?",

          answer:
            "To stay informed about platform updates, new features, and valuable content additions, we recommend subscribing to our newsletter. You can opt in for notifications and newsletters within your platform settings to ensure you don't miss out on any exciting developments.",
        },
      ],
    },
    {
      label: "Billing Policy",
      faq: [
        {
          question:
            "How often will I be billed for my Lifestone Platform subscription?",
          answer:
            "You will be billed every six months in advance for your Lifestone Platform subscription.",
        },

        {
          question: "What does the upfront payment cover in my bill?",
          answer:
            "The upfront payment covers the module subscription fee and user license fees for the upcoming six-month period, ensuring uninterrupted access to your chosen modules and user licenses.",
        },

        {
          question:
            "What is the purpose of the pre-paid credit balance in my account?",
          answer:
            "The pre-paid credit balance in your account offers flexibility. It allows you to cover any additional user license fees that may arise during the six-month billing cycle without immediate billing for additional licenses. Charges for extra user licenses are deducted from this balance.",
        },

        {
          question:
            "Can I make decisions about adding more subscriptions or user licenses during the billing cycle?",
          answer:
            "Yes, you have the freedom to make these decisions as needed. You can add more subscriptions or user licenses during the billing cycle. However, if additional usage significantly affects your pre-paid credit balance, we may adjust the billing cycle accordingly and charge for the next six-month period immediately.",
        },

        {
          question: "How can I monitor my pre-paid credit balance?",
          answer:
            "You can monitor your pre-paid credit balance within the Lifestone Platform. The balance updates daily, and user admins have access to view it. Additionally, when 90% of your pre-paid credit is used, you will receive an email reminder.",
        },

        {
          question:
            "How can I avoid subscription expiration due to low pre-paid credit?",
          answer:
            "You can set up auto-renewal within the Lifestone Platform to avoid subscription expiration. Auto-renewal ensures that your subscription remains active without interruption.",
        },

        {
          question:
            "What happens if I have questions or need clarification about the billing policy?",
          answer:
            "If you have any questions or need further clarification regarding our billing policy, please reach out to our dedicated support team. They are available to assist you with any inquiries you may have.",
        },
      ],
    },
    {
      label: "Registration",
      faq: [
        {
          question: "How do I create an account on the Lifestone Platform?",
          answer: `To create an account, visit the Lifestone Platform website and click on the "Register" or "Sign Up" button. Follow the prompts to provide your information and complete the registration process.`,
        },
        {
          question:
            "Can I change my account name and subdomain after registration?",
          answer:
            "Yes, you can change your account name and subdomain later. However, we encourage you to choose wisely as they are an integral part of your Lifestone identity.",
        },
        {
          question: "What should I consider when choosing my account name?",
          answer:
            "Your account name should be unique, creative, concise, and respectful. It's your identity on the platform and will be visible to other members.",
        },
        {
          question: "How do I preview my account name and subdomain?",
          answer:
            "Once you've chosen your account name, you can preview how it will appear on the platform. Your subdomain will be in the format www.Lifestone.ca/[YourChosenSubdomain].",
        },
        {
          question:
            "What if I want to change my registered address or phone number later?",
          answer:
            "You can update your registered address or phone number in your profile settings after registration.",
        },
        {
          question: "Can I provide my website URL during registration?",
          answer:
            "Yes, you can provide your website URL if you have one related to your stone business. This can be a valuable resource for others.",
        },
        {
          question: "Is my email address safe with Lifestone?",
          answer:
            "Yes, your email address is secure with Lifestone. We use it for communication and notifications, and we respect your privacy.",
        },
        {
          question: `What is the "Account Category" in the registration form?`,
          answer: `The "Account Category" allows you to select the category that best defines your role or business on the platform, such as Fabricator, Architect, Homeowner, etc.`,
        },
        {
          question: "How long should my profile description be?",
          answer:
            "Your profile description can be up to 250 characters. It should be concise and highlight something unique about your business.",
        },
        {
          question: "Can I change my operating days and hours later?",
          answer:
            "Yes, you can update your operating days and hours in your profile settings as needed.",
        },
        {
          question:
            "Is it mandatory to upload photos and images during registration?",
          answer:
            "While it's not mandatory, uploading images can enhance your profile's appeal and provide others with a visual representation of your work or services.",
        },

        {
          question: `What is the purpose of the "Operation Map Location" field?`,
          answer: `The "Operation Map Location" field allows you to specify your operational location if it differs from your billing address. This helps customers find your physical location easily.`,
        },

        {
          question:
            "What payment methods are available for billing on Lifestone?",
          answer:
            "Lifestone offers various payment methods for billing. You can choose the ones that suit your preferences.",
        },
        {
          question: "Can I change my preferred currency later?",
          answer:
            "Yes, you can change your preferred local currency for conducting business and transactions in your profile settings.",
        },

        {
          question:
            "How can I enable two-factor authentication for added security?",
          answer:
            "You can enable two-factor authentication via email or phone in your account settings to enhance the security of your Lifestone account.",
        },

        {
          question: `What happens after I click "Create Account"?`,
          answer: `After clicking "Create Account," you become a registered member of the Lifestone Platform. You can then personalize your profile and start exploring the platform.`,
        },

        {
          question:
            "Can I continue personalizing my profile after registration?",
          answer:
            "Yes, you can continue personalizing your profile by adding more details, images, and content to enhance your credibility on the platform.",
        },

        {
          question:
            "How do I start connecting with others on the Lifestone Platform, and what role does INNChat play?",
          answer: `To connect with others, simply explore the platform and discover profiles, businesses, and resources that interest you. INNChat, our integrated chat feature, plays a crucial role in connecting with other members. You can initiate conversations, share ideas, collaborate on projects, and network with fellow stone enthusiasts, professionals, or businesses using INNChat. It's a powerful tool to foster meaningful connections and build a vibrant stone community on Lifestone.`,
        },
      ],
    },
  ];
  const [active, setActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
    setOpen(null);
  };
  const [open, setOpen] = useState();
  const handleOpen = (index) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  const location = useLocation();
  useEffect(() => {
    document.title = `${location.pathname
      .replace("/", "")
      .charAt(0)
      .toUpperCase() + location.pathname.slice(2)} - Lifestone`;
  }, [location]);
  return (
    <main className="faq-main">
      <Navbar white />

      <div
        style={{
          minHeight: "80px",
          width: "100%",
        }}
      ></div>
      <div className="container main-section">
        <div>
          <H2
            text="Frequently Asked Question"
            center
            color="primary"
            style={{
              marginBottom: "30px",
            }}
          />
          <P3 text="" />
        </div>
        <section className="container main-section/ faq-section">
          <div
            className="categories-container"
            style={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              borderRadius: "5px",
              padding: "20px 0px",
            }}
          >
            <H3
              text="Categories"
              style={{
                paddingLeft: "20px",
                borderBottom: "1px solid var(--dark)",
              }}
            />
            <ul>
              {categories?.map((category, index) => {
                return (
                  <li
                    onClick={() => {
                      handleActive(index);
                    }}
                    key={index}
                    className={`category ${
                      active === index ? "category-active" : null
                    }`}
                  >
                    {category.label}
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="faq-container"
            style={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              padding: "0 20px",
            }}
          >
            {/* <div
            style={{
              position: "sticky",
              top: "0px",
              zIndex: "2",
              backgroundColor: "var(--light)",
            }}
          >
            <H2
              text="Frequently Asked Question"
              style={{
                paddingTop: "20px",
              }}
            />
            <P3 text="" />
          </div> */}
            <div>
              <H3
                text={categories[active].label}
                color="primary"
                style={{
                  position: "sticky",
                  top: "0px",
                  zIndex: "1.5",
                  backgroundColor: "var(--light)",
                  borderBottom: "1px solid black",
                  paddingTop: "20px",
                }}
              />
              <ul>
                {categories[active]?.faq?.map((faq, index) => {
                  return (
                    <li key={index}>
                      <p
                        className="question"
                        onClick={() => {
                          handleOpen(index);
                        }}
                      >
                        {open === index ? <MinusOutlined /> : <PlusOutlined />}
                        {faq.question}
                      </p>
                      <p
                        className={`answer ${
                          open === index ? "faq-active" : null
                        }`}
                      >
                        {faq.answer}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Faq;
