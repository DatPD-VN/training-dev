import { useNotification } from "./hook";

const Notification = () => {
  const { messages } = useNotification();

  return (
    <>
      <ul>
        {Array.isArray(messages) &&
          messages.map((msg, index) => (
            <li key={index}>
              <a href="">{msg}</a>
            </li>
          ))}
      </ul>
    </>
  );
};

export { Notification };
