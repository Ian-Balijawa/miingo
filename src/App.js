import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Messages from "./components/Messages";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import RequireAuth from "./services/RequireAuth";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />} />
				<Route path="login" element={<Signin />} />
				<Route path="register" element={<Signup />} />
				<Route element={<RequireAuth />}>
					<Route path="feed" element={<Home />} />
					<Route path="messages" element={<Messages />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
