import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./pages/index";

function App() {
	return (
		<Router>
			<React.Fragment>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</React.Fragment>
		</Router>
	);
}

export default App;
