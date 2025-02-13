import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./shared/ui";
// import {  HomePage } from "./pages/HomePage/HomePage";
// import {  LoginPage } from "./pages/LoginPage/LoginPage";
// import {  ProfilePage } from "./pages/ProfilePage/ProfilePage";
// import { PostsPage } from "./pages/PostsPage/PostsPage";
import { AppRouter } from "./app/providers/router/routes"; 

function App() {
  return (
    <Router>
      <Navbar />
       <AppRouter/>
    </Router>
  );
}

export default App;

// <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="news" element={<PostsPage />} />
//         <Route path="login" element={<LoginPage />} /> 
//         <Route path="profile" element={<ProfilePage />} />
//       </Routes>