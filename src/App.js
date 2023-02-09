import LoginScreen from "./views/login_screen";
import ChatScreen from "./views/chat_creen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/chat/*" element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
