import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="c33b0692-6947-482f-b782-ba044472597b"
      userName="SachinMahesh"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
