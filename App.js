import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import "./styles/App.css";
import ChatFeed from "./components/ChatFeed";

const projectID = "2dfb5b0e-fd88-4e2b-8d41-0ac131dbcc16";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;
