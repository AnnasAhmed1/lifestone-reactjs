import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { H3, H4 } from "../helper/heading";
import { P2, P3, P4 } from "../helper/paragraph";

const ProductDetails = () => {
  let { productDetail } = useParams();
  productDetail = productDetail.replace(/-/g, " ");

  const compDetails = [
    {
      heading: "Unleash Your Creativity",
      text:
        "INNPages offers a user-friendly, intuitive website building experience that allows you to unleash your creativity. With a vast selection of customizable templates, dynamic design elements, and a drag-and-drop interface, you can bring your vision to life without the need for technical expertise. From stunning landing pages to comprehensive e-commerce sites, the possibilities are limitless.",
    },
    {
      heading: "Streamlined Content Management",
      text:
        "Say goodbye to the complexities of content management. INNPages simplifies the process of adding, editing, and organizing your content. Whether you're creating blog posts, uploading product listings, or sharing your latest achievements, our platform ensures that your content looks polished and professional.",
    },
    {
      heading: "Responsive and SEO-Optimized",
      text:
        "Your online presence should shine across all devices and be easily discoverable. INNPages ensures that your website is responsive, adapting seamlessly to desktops, tablets, and mobile devices. What's more, our built-in SEO tools help boost your online visibility, ensuring that your content reaches its intended audience.",
    },
    {
      heading: "Engaging User Experience",
      text:
        "Captivate your visitors with an engaging user experience. INNPages allows you to integrate multimedia content, such as images, videos, and interactive elements, to make your website visually appealing and interactive. Engaged visitors are more likely to stay, explore, and convert.",
    },
    {
      heading: "Scalability and Integration",
      text:
        "INNPages is designed to grow with you. Whether you're starting small or planning for expansion, our module scales effortlessly to meet your needs. Plus, it seamlessly integrates with other Lifestone platform modules, offering you a holistic solution for your online presence.",
    },
    {
      heading: "Support and Guidance",
      text:
        "Creating and managing a website can be daunting, but with INNPages, you're never alone. Our platform offers robust support and guidance to assist you at every step of your online journey. From tutorials and FAQs to a dedicated support team, we're here to help you succeed.",
    },
    {
      heading: "Your Online Presence, Your Way",
      text:
        "INNPages puts the power of online presence management in your hands. It's your canvas to express your unique identity, share your story, and connect with your audience. Your online journey begins here, and the possibilities are as limitless as your imagination.",
    },
  ];
  const productDetails = {
    "Manufacturing Consulting": {
      details: "",
    },

    INNVex: {
      subTitle: "Revolutionizing Inventory Management",
      details:
        "At Lifestone, we recognize that inventory management is the backbone of any successful business. It's not just about keeping track of products and assets; it's about optimizing resources, ensuring timely deliveries, and ultimately, maximizing profitability. That's where INNVeX comes in—a groundbreaking inventory management module that redefines the way you handle your inventory.",
      bottomText:
        "Are you ready to experience a new era of efficiency, control, and profitability? Discover the power of INNVeX and take your inventory management to the next level with Lifestone. Learn more about INNVeX and how it can transform your business.",
      completeDetails: [
        {
          heading: "A New Era of Efficiency",
          text:
            "INNVeX is more than just an inventory tool; it's a catalyst for efficiency. Gone are the days of manual record-keeping, spreadsheets, and guesswork. With INNVeX, you have an intelligent and intuitive system at your fingertips, designed to streamline your inventory processes from start to finish.",
        },
        {
          heading: "Real-Time Insights",
          text:
            "Imagine having real-time insights into your inventory—knowing what's in stock, what's in transit, and what's needed for upcoming orders. INNVeX provides you with up-to-the-minute data, ensuring that you're always one step ahead of your inventory needs. Say goodbye to overstocking, stockouts, and the associated costs.",
        },
        {
          heading: "Seamless Integration",
          text:
            "INNVeX is seamlessly integrated into the Lifestone platform, ensuring that your inventory management is part of a cohesive, interconnected system. This integration means that data flows effortlessly between modules, so you can make informed decisions across your entire operation",
        },
        {
          heading: "Tailored Solutions",
          text:
            "We understand that every business is unique. That's why INNVeX is designed to adapt to your specific needs. Whether you're a small business managing a limited inventory or a large enterprise with complex supply chains, INNVeX can be tailored to suit your requirements.",
        },
        {
          heading: "The Future of Inventory Management",
          text:
            "INNVeX is not just about managing your current inventory; it's about preparing for the future. With advanced features and predictive analytics on the horizon, we're committed to helping you stay ahead of the curve. The future of inventory management is here, and it's called INNVeX.",
        },
      ],
    },

    INNTimex: {
      subTitle: "Redefining Workforce Management",
      details:
        "In today's dynamic business landscape, efficient workforce management is the linchpin of success. At Lifestone, we recognize the pivotal role played by workforce productivity and time management in achieving organizational goals. That's why we're proud to introduce INNTimeX—a cutting-edge time tracking module that goes beyond traditional clock-in and clock-out systems.",
      bottomText:
        "Are you ready to revolutionize your workforce management? Explore the capabilities of INNTimeX and discover how it can elevate your organization's productivity, efficiency, and overall success. Learn more about INNTimeX and experience the future of workforce management.",
      completeDetails: [
        {
          heading: "Unlock the Power of INNTimeX",
          text:
            "INNTimeX is more than just a time tracking tool; it's a comprehensive workforce management solution designed to empower your organization. It seamlessly integrates into the Lifestone platform, allowing you to monitor, manage, and optimize your workforce with unparalleled precision.",
        },
        {
          heading: "Effortless Time Tracking",
          text:
            "Say goodbye to manual time tracking and cumbersome spreadsheets. With INNTimeX, your employees can effortlessly log their work hours, breaks, and tasks, ensuring accurate and reliable time records. Real-time data entry and automated reminders make time tracking a breeze, freeing your workforce to focus on what truly matters.",
        },
        {
          heading: "Task Assignment and Monitoring",
          text:
            "INNTimeX provides an intuitive platform for task assignment and monitoring. Easily assign tasks to qualified employees, track their progress, and receive real-time updates on project milestones. This feature ensures that your workforce is aligned with your organizational objectives, promoting efficiency and accountability.",
        },
        {
          heading: "Insights for Informed Decisions",
          text:
            "Data is power, and INNTimeX offers a wealth of insights to drive informed decisions. Analyze time utilization, identify bottlenecks, and optimize resource allocation. With comprehensive reporting and analytics, you'll gain a deeper understanding of your organization's productivity, enabling you to make strategic choices that enhance efficiency.",
        },
        {
          heading: "Privacy and Quality of Life",
          text:
            "We understand the importance of privacy and quality of life for your workforce. INNTimeX includes features that respect the personal time of your employees, allowing them to request time off, manage emergency situations, and ensure work-life balance.",
        },
        {
          heading: "Future-Ready Workforce Management",
          text:
            "INNTimeX is not just about managing your workforce today; it's about preparing for the future. As part of the Lifestone platform, it's poised to evolve with your organization's needs. With AI integration and advanced features on the horizon, INNTimeX is your partner in building a future-ready workforce.",
        },
      ],
    },

    INNLens: {
      subTitle: "AI-Powered Precision Imaging for Stone Slabs",
      details:
        "Welcome to INNLens, a revolutionary module within the Lifestone Platform. INNLens harnesses the power of Artificial Intelligence (AI) and Machine Learning (ML) to elevate your stone-related projects. With advanced digital imaging technology, INNLens captures, analyzes, and enhances stone slab visuals like never before. From AI-driven image recognition to ML-based perspective correction, INNLens unlocks a new realm of precision and possibilities.",
    },

    INNCanvas: {
      details: "",
    },

    "INNStone Market": {
      subTitle: "Elevate Your Business",
      details:
        "In today's interconnected world, expanding your business reach and connecting with a diverse customer base is essential for growth and success. That's where INNStone market comes into play—a dynamic and comprehensive module within the Lifestone platform, designed to empower businesses of all sizes and industries.",

      bottomText:
        "Elevate your business to new heights with INNStone market—a platform that empowers you to reach, engage, and succeed.",
      completeDetails: [
        {
          heading: "Unleash Your Business Potential",
          text:
            "INNStone market offers you the opportunity to unlock the full potential of your business. Whether you're a local retailer, an e-commerce giant, a service provider, or a manufacturer, our platform provides the tools and resources you need to thrive in the digital age.",
        },
        {
          heading: "Connect with Your Audience",
          text:
            "Your customers are out there, waiting to discover your products and services. INNStone market is your bridge to connect with them. Showcase your offerings, tell your brand story, and engage with your audience on a platform that's designed for seamless interaction.",
        },
        {
          heading: "Local and Global Reach",
          text:
            "Whether you're looking to reach local customers or expand your footprint globally, INNStone market is your trusted companion. Our module offers features like local currency support, delivery options, and geo-location services to help you cater to diverse markets.",
        },
        {
          heading: "Real-Time Engagement",
          text:
            "Engaging with your customers in real time is crucial for building lasting relationships. INNStone market facilitates live chat between buyers, sellers, and employees, ensuring that inquiries are addressed promptly and efficiently.",
        },
        {
          heading: "Secure and Versatile Payment Options",
          text:
            "Facilitating transactions has never been easier. INNStone market supports multiple payment methods, including online, in-store, and delivery payments. Provide your customers with the convenience and flexibility they expect.",
        },
        {
          heading: "Advanced Features for Growth",
          text:
            "As your business evolves, so does INNStone market. We're committed to continuously enhancing our platform with advanced features like real-time tracking, co-assignee options, waiting lists, and more. Your growth is our priority.",
        },
        {
          heading: "Your Business, Your Way",
          text:
            "INNStone market is designed to be flexible and customizable. Tailor your storefront, listings, and customer interactions to align with your unique business identity and goals.",
        },
      ],
    },

    INNCloud: {
      details: "",
    },

    INNPhoto: {
      details: "",
    },

    INNSlid: {
      details: "",
    },

    INNPages: {
      subTitle: "Your Gateway to a Dynamic Online Presence",
      details:
        "In today's digital age, establishing a compelling online presence is paramount. Whether you're an aspiring blogger, a small business owner, or a professional looking to showcase your portfolio, INNPages is your go-to module within the Lifestone platform. It's more than just a website builder; it's a versatile tool designed to empower you to create, manage, and optimize your online space effortlessly.",
      bottomText:
        "Discover the world of possibilities with INNPages and craft your dynamic online presence today.",
      completeDetails: [
        {
          heading: "Unleash Your Creativity",
          text:
            "INNPages offers a user-friendly, intuitive website building experience that allows you to unleash your creativity. With a vast selection of customizable templates, dynamic design elements, and a drag-and-drop interface, you can bring your vision to life without the need for technical expertise. From stunning landing pages to comprehensive e-commerce sites, the possibilities are limitless.",
        },
        {
          heading: "Streamlined Content Management",
          text:
            "Say goodbye to the complexities of content management. INNPages simplifies the process of adding, editing, and organizing your content. Whether you're creating blog posts, uploading product listings, or sharing your latest achievements, our platform ensures that your content looks polished and professional.",
        },
        {
          heading: "Responsive and SEO-Optimized",
          text:
            "Your online presence should shine across all devices and be easily discoverable. INNPages ensures that your website is responsive, adapting seamlessly to desktops, tablets, and mobile devices. What's more, our built-in SEO tools help boost your online visibility, ensuring that your content reaches its intended audience.",
        },
        {
          heading: "Engaging User Experience",
          text:
            "Captivate your visitors with an engaging user experience. INNPages allows you to integrate multimedia content, such as images, videos, and interactive elements, to make your website visually appealing and interactive. Engaged visitors are more likely to stay, explore, and convert.",
        },
        {
          heading: "Scalability and Integration",
          text:
            "INNPages is designed to grow with you. Whether you're starting small or planning for expansion, our module scales effortlessly to meet your needs. Plus, it seamlessly integrates with other Lifestone platform modules, offering you a holistic solution for your online presence.",
        },
        {
          heading: "Support and Guidance",
          text:
            "Creating and managing a website can be daunting, but with INNPages, you're never alone. Our platform offers robust support and guidance to assist you at every step of your online journey. From tutorials and FAQs to a dedicated support team, we're here to help you succeed.",
        },
        {
          heading: "Your Online Presence, Your Way",
          text:
            "INNPages puts the power of online presence management in your hands. It's your canvas to express your unique identity, share your story, and connect with your audience. Your online journey begins here, and the possibilities are as limitless as your imagination.",
        },
      ],
    },

    INNCad: {
      details: "",
    },

    INNMap: {
      details: "",
    },

    StoneSense: {
      subTitle: "Your Stone Knowledge Hub",
      details:
        "At StoneSense, we understand that your home is your sanctuary, and the materials you choose for it matter. That's why we're here to be your expert guide to the fascinating world of stone. Imagine having the knowledge and confidence to select the perfect stone for your countertops, floors, or outdoor spaces. Picture your ability to care for and maintain your stone surfaces, ensuring their enduring beauty for years to come. With StoneSense, these possibilities become a reality.",
      bottomText:
        "StoneSense is your go-to resource for stone knowledge, inspiration, and community. Join us on this journey to uncover the timeless beauty and practicality of stone materials in your home. Experience the world of stone like never before with StoneSense.",
      completeDetails: [
        {
          heading: "Stone Knowledge",
          text:
            " Whether you're a homeowner looking to enhance your understanding of stone or a seasoned enthusiast seeking deeper insights, StoneSense provides a treasure trove of information. Explore articles, videos, and guides that cover everything from the types of stone to their unique properties and best practices.",
        },
        {
          heading: "Expert Guidance",
          text:
            " Have questions about selecting the right stone for your project? Want to know how to care for your stone surfaces? StoneSense offers expert guidance and advice to assist you at every stage of your stone journey.",
        },
        {
          heading: "Community Connection",
          text:
            " Connect with fellow homeowners who share your passion for stone. Join discussions, share project photos, and connect with others on a similar stone-related journey.",
        },
        {
          heading: "DIY Resources",
          text:
            " If you're the hands-on type, StoneSense offers step-by-step DIY guides for working with stone. Learn the art of cutting, polishing, and sealing stone surfaces for your projects.",
        },
        {
          heading: "Trusted Recommendations",
          text:
            " Access a curated directory of reputable stone vendors and contractors in your area. Find the right professionals for stone installation, repair, or restoration.",
        },
        {
          heading: "Maintenance Mastery",
          text:
            " Discover maintenance guidelines and schedules tailored to different types of stone. Learn how to protect and preserve the beauty of your stone surfaces with expert advice.",
        },
        {
          heading: "Stone Identification",
          text:
            " Unsure about the type of stone in your home? StoneSense provides tools for identifying and verifying stone materials, putting your mind at ease.",
        },
        {
          heading: "Real-Time Support",
          text:
            "Engage with our community in real time. Ask questions, seek advice, and get answers from experts and experienced homeowners alike.",
        },
      ],
    },

    INNArchStoneHub: {
      subTitle: "Your Architectural Stone Expert",
      details:
        "At INNArchStoneHub, we recognize that stone is more than just a building material; it's an architectural statement. With a focus on precision, aesthetics, and innovation, we provide architects and designers with a wealth of resources to elevate their projects to new heights.",
      bottomText:
        "INNArchStoneHub empowers architects and designers to infuse their creations with the timeless beauty, durability, and elegance of stone. We understand that every project is a work of art, and stone is your canvas. Join us on this journey to redefine architectural excellence through the artistry of stone. Elevate your architectural vision with INNArchStoneHub.",
      completeDetails: [
        {
          heading: "Industry Insights",
          text:
            "Stay ahead of the curve with in-depth industry insights. Explore the latest stone trends, emerging materials, and innovative techniques that will set your projects apart.",
        },

        {
          heading: "Material Mastery",
          text:
            "Delve into the world of stone materials. From marble and granite to slate and quartzite, INNArchStoneHub offers comprehensive information, ensuring you select the perfect stone for each project.",
        },

        {
          heading: "Design Brilliance",
          text:
            "Find inspiration in our extensive gallery of stone applications. Discover how stone can transform spaces, from luxurious interiors to breathtaking outdoor landscapes.",
        },

        {
          heading: "Expert Guidance",
          text:
            "Access expert guidance on stone selection, installation, and maintenance. Our community of experienced architects and designers is here to share their knowledge and offer valuable advice.",
        },

        {
          heading: "Collaboration Opportunities",
          text:
            "Connect with fellow professionals, stone suppliers, and artisans. Collaborate on projects, share insights, and expand your network within a community that understands the unique challenges and opportunities of working with stone.",
        },

        {
          heading: "Visualization Tools",
          text:
            "Visualize your designs with precision. INNArchStoneHub offers cutting-edge visualization tools to help you see how different stone materials will interact with your architectural concepts.",
        },

        {
          heading: "Vendor Directory",
          text:
            "Navigate our curated directory of trusted stone suppliers and craftsmen. Find partners who share your commitment to excellence in stone-based projects.",
        },

        {
          heading: "Sustainability Focus",
          text:
            "Explore sustainable stone practices. Learn how to incorporate eco-friendly stone materials and practices into your designs, aligning your work with modern environmental priorities.",
        },
      ],
    },

    INNStoneCraftAdvise: {
      subTitle: "Your Partner in Perfecting the Art of Stone Craftsmanship",
      details:
        "At INNStoneCraftAdvise, we have a singular focus: to empower and support stone fabricators at all levels of expertise, from seasoned artisans to those just embarking on their journey in the world of stone. ",
      bottomText:
        "INNStoneCraftAdvise is more than a consultancy service; it's a community of passionate craftsmen and craftswomen dedicated to perfecting the art of stone fabrication. Whether you're shaping stone into countertops, sculptures, or architectural masterpieces, we're here to help you elevate your craft to new heights. Join us on this journey to refine the art of stone craftsmanship.",
      completeDetails: [
        {
          heading: "Craftsmanship Excellence",
          text:
            "We believe that every piece of stone carries its own unique story. Our team of experts is dedicated to helping you tell that story through your craftsmanship. Whether it's marble, granite, quartz, or any other stone, we provide the guidance needed to perfect your artistry.",
        },

        {
          heading: "Industry Insight",
          text:
            "Stay ahead of industry trends and innovations with our in-depth insights. We keep a close watch on emerging materials, cutting-edge techniques, and the latest tools to ensure your work remains at the forefront of stone craftsmanship.",
        },

        {
          heading: "Precision Guidance",
          text:
            "Our consultancy services offer precision guidance for every facet of stone fabrication. From optimizing workspace layouts to machinery upgrades, we help you make informed decisions that enhance efficiency and quality.",
        },

        {
          heading: "Collaboration Opportunities",
          text:
            "Connect with a community of fellow craftsmen, suppliers, and designers who share your passion for stone. Collaborate on projects, share knowledge, and expand your network within a community that understands the intricacies of working with stone.",
        },

        {
          heading: "Sustainable Practices",
          text:
            "Discover sustainable practices in stone fabrication. We'll guide you on how to incorporate eco-friendly materials and methods into your work, aligning your craft with modern environmental priorities.",
        },

        {
          heading: "Expertise at Your Fingertips",
          text:
            "Access a wealth of expertise in stone selection, installation, and maintenance. Our team of seasoned professionals is here to provide you with practical advice and solutions for any challenge you may encounter.",
        },
      ],
    },

    INNBalance: {
      subTitle: "Precision Resource Management",
      details:
        "Stone projects are complex endeavors that demand meticulous planning, careful allocation of resources, and unwavering attention to detail. INNBalance steps in as your dedicated partner, simplifying the intricacies and empowering you to achieve unmatched efficiency in project management. ",
      bottomText:
        "INNBalance is more than a module; it's a strategic partner that brings precision, collaboration, and success to every stone project within the Lifestone Platform. Welcome to INNBalance, where precision meets perfection in stone project management.",
      completeDetails: [
        {
          heading: "Resource Optimization",
          text:
            "INNBalance allows you to allocate materials, labor, and equipment with pinpoint accuracy. No more underutilized resources or costly overruns. With INNBalance, every resource is optimized for maximum efficiency.",
        },

        {
          heading: "Real-time Scheduling",
          text:
            "Say goodbye to scheduling conflicts and delays. INNBalance provides real-time scheduling and task management, ensuring that projects progress smoothly and deadlines are met.",
        },

        {
          heading: "Budget Control",
          text:
            "Keeping projects within budget is a constant challenge. INNBalance provides robust budgeting and cost-tracking features, allowing you to maintain strict financial control throughout the project lifecycle.",
        },

        {
          heading: "Documentation Excellence",
          text:
            "INNBalance streamlines the documentation process, ensuring that every project phase is thoroughly documented. From initial plans to progress reports, you'll have a complete record at your fingertips.",
        },

        {
          heading: "Collaboration Hub",
          text:
            "Collaboration is at the core of INNBalance. It facilitates seamless communication and collaboration among all project stakeholders, from architects and designers to fabricators and installers.",
        },

        {
          heading: "Analytics and Insights",
          text:
            "INNBalance offers advanced analytics and reporting tools, providing valuable insights into project performance. Identify areas for improvement and make data-driven decisions.",
        },
      ],
    },
  };
  const location = useLocation();
  useEffect(() => {
    document.title = `${location.pathname
      .replace("/product/", "")
      .replace(/-/g, " ")} - Lifestone`;
  }, [location]);
  return (
    <>
      <main className="productDetails-main">
        <Navbar white />

        <div
          style={{
            backgroundColor: "rgb(45, 65, 152)",
          }}
        >
          <div
            style={{
              minHeight: "80px",
              width: "100%",
            }}
          ></div>

          <div
            className="container main-section"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <h1
              className="helper-h1"
              style={{
                color: "#ffffff",
              }}
            >
              {productDetail.split("INN")?.map((part, index) =>
                index < productDetail.split("INN").length - 1 ? (
                  // <h1 key={index}>
                  <>
                    {part}
                    <span className="red-text">{"INN"}</span>
                  </>
                ) : (
                  // </h1>
                  part
                )
              )}
            </h1>
            <H3
              color="light"
              text={
                productDetails[productDetail]?.subTitle
                  ? productDetails[productDetail]?.subTitle
                      .split("INN")
                      ?.map((part, index) =>
                        index <
                        productDetails[productDetail]?.subTitle.split("INN")
                          .length -
                          1 ? (
                          // <h1 key={index}>
                          <>
                            {part}
                            <span className="red-text">{"INN"}</span>
                          </>
                        ) : (
                          // </h1>
                          part
                        )
                      )
                  : // productDetails[productDetail]?.subTitle
                    "Lorem ipsum dolor sit amet consectetur."
              }
            />

            <P2
              color="light"
              text={
                productDetails[productDetail]?.details
                  ? productDetails[productDetail]?.details
                      .split("INN")
                      ?.map((part, index) =>
                        index <
                        productDetails[productDetail]?.details.split("INN")
                          .length -
                          1 ? (
                          // <h1 key={index}>
                          <>
                            {part}
                            <span className="red-text">{"INN"}</span>
                          </>
                        ) : (
                          // </h1>
                          part
                        )
                      )
                  : // productDetails[productDetail]?.details

                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aspernatur dolorum alias totam, ullam ipsam facilis, nisi optio laboriosam nam mollitia repudiandae earum accusamus ratione cum magnam harum quisquam delectus ducimus quod itaque tempore provident eum repellat? Quos corrupti sint atque animi magni rerum magnam vitae et adipisci expedita sequi ullam eos ab omnis, autem itaque incidunt quaerat placeat non explicabo doloribus eligendi modi nisi. Consectetur molestiae ab doloremque recusandae corporis hic excepturi ipsa, natus beatae exercitationem quidem, impedit dolorem accusamus quod ipsam alias perferendis est nulla omnis."
              }
            />
          </div>
        </div>
        <div
          className="container main-section"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          {productDetails[productDetail]?.completeDetails
            ? productDetails[productDetail]?.completeDetails?.map(
                (detail, index) => {
                  return (
                    <div key={index}>
                      <h4 className="helper-h4">
                        {detail.heading.split("INN")?.map((part, index) =>
                          index < detail.heading.split("INN").length - 1 ? (
                            <>
                              {part}
                              <span className="red-text">{"INN"}</span>
                            </>
                          ) : (
                            part
                          )
                        )}
                        {/* {detail.heading} */}
                      </h4>
                      {/* <H4 text={detail.heading} /> */}
                      <p className="helper-p3">
                        {detail.text.split("INN")?.map((part, index) =>
                          index < detail.text.split("INN").length - 1 ? (
                            <>
                              {part}
                              <span className="red-text">{"INN"}</span>
                            </>
                          ) : (
                            part
                          )
                        )}

                        {/* {detail.text} */}
                      </p>
                      {/* <P3 text={detail.text} /> */}
                    </div>
                  );
                }
              )
            : compDetails.map((detail, index) => {
                return (
                  <div key={index}>
                    <H4
                      text={detail.heading.split("INN")?.map((part, index) =>
                        index < detail.heading.split("INN").length - 1 ? (
                          <>
                            {part}
                            <span className="red-text">{"INN"}</span>
                          </>
                        ) : (
                          part
                        )
                      )}

                      // {detail.heading}
                    />
                    <P3
                      text={detail.text.split("INN")?.map((part, index) =>
                        index < detail.text.split("INN").length - 1 ? (
                          <>
                            {part}
                            <span className="red-text">{"INN"}</span>
                          </>
                        ) : (
                          part
                        )
                      )}
                    />
                  </div>
                );
              })}
          <P4
            text={
              productDetails[productDetail]?.bottomText
                ? productDetails[productDetail]?.bottomText
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos."
            }
          />

          {/* <div>
          <H4 />
          <P3 />
        </div>
        <div>
          <H4 />
          <P3 />
        </div>
        <div>
          <H4 />
          <P3 />
        </div>
        <div>
          <H4 />
          <P3 />
        </div> */}
        </div>
        {/* <div></div> */}
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
