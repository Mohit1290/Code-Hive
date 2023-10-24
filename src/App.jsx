import { StreamChat } from "stream-chat";

import Cookies from "universal-cookie";

import { Auth } from "./components";

import "stream-chat-react/dist/css/index.css";
import "./App.css";

const cookies = new Cookies();

const apiKey = "qgtk9ttyha7j";
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userId"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("phoneNumber"),
    },
    authToken
  );
}

const App = () => {
  if (!authToken) return <Auth />;

  return <div className="app__wrapper"></div>;
};

export default App;
