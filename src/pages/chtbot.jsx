// import { createBot } from "botui";
// import React, { useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import { BotUI, BotUIAction, BotUIMessageList } from "@botui/react";

// // import "@botui/react/dist/styles/default.theme.css";

// const MyBot = () => {
//   const mybot = createBot();
//   useEffect(() => {
//     mybot.message
//       .add({ text: "Hello" })
//       .then(() => mybot.wait({ waitTime: 1000 }))
//       .then(() => mybot.message.add({ text: "how are you?" }))
//       .then(() => mybot.wait({ waitTime: 500 }))
//       .then(() =>
//         mybot.action.set(
//           {
//             options: [
//               { label: "Good", value: "good" },
//               { label: "Great", value: "great" },
//             ],
//           },
//           { actionType: "selectButtons" }
//         )
//       )
//       .then((data) => mybot.wait({ waitTime: 500 }, data))
//       .then((data) =>
//         mybot.message.add({ text: `You are feeling ${data?.selected?.label}!` })
//       );
//   }, []);

//   return (
//     <div>
//       <BotUI bot={mybot}>
//         <BotUIMessageList />
//         <BotUIAction />
//       </BotUI>
//     </div>
//   );
// };
// export default MyBot;
// // const containerElement = document.getElementById("botui");
// // if (containerElement) {
// //   const root = createRoot(containerElement);
// //   root.render(<App />);
// // }

import React from "react";
import ChatBot from "react-simple-chatbot";

const chtbot = () => {
  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      //   end: true,
    },
  ];

  return <ChatBot steps={steps} />;
};

export default chtbot;
