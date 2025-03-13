"use client";
import { API_ROUTES } from "@/app/Utilities/Constants/api";
import HttpUtilities from "@/app/Utilities/httputilities";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import "./LoginPage.css";

const LoginPage = () => {
   const router = useRouter();
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [rememberMe, setRememberMe] = useState(false);
   const [message, setMessage] = useState("");

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.isLoggedIn) {
         router.push("/"); // Redirect to the landing page if already logged in
      }
   }, []);

   const handleLogin = async (e) => {
      e.preventDefault();
      try {
         const response = await HttpUtilities.post(API_ROUTES.LOGIN_USERS, {
            username,
            password,
         });
         // Handle successful login
         console.log("Login successful:", response.data);
         localStorage.setItem(
            "user",
            JSON.stringify({ username, isLoggedIn: true })
         );
         setMessage(`Welcome, ${username}!`);

         // Delay to show the welcome message before redirecting
         setTimeout(() => {
            router.push("/"); // Redirect to the landing page ("/")
         }, 2000);
         // 2 seconds delay
      } catch (error) {
         console.error("Login error:", error);
         alert("Login failed. Please try again."); // Show alert on login failure
      }
   };

   return (
      <div className="screen">
         <div className="wrapper">
            {message ? (
               <div>
                  <h1>{message}</h1>
               </div>
            ) : (
               <form onSubmit={handleLogin}>
                  <h1>Login</h1>
                  <div className="input-box">
                     <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                     />
                     <FaUser className="icon" />
                  </div>
                  <div className="input-box">
                     <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                     />
                     <FaLock className="icon" />
                  </div>
                  <div className="remember">
                     <label>
                        <input
                           type="checkbox"
                           checked={rememberMe}
                           onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Remember me
                     </label>
                  </div>
                  <button type="submit">Login</button>
               </form>
            )}
         </div>
      </div>
   );
};

export default LoginPage;
