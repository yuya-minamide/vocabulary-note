import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Archive, ExamSelect, Home, Login, Signup } from "./pages/index";

function App() {
	return (
		<Router>
			<React.Fragment>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/archive" element={<Archive />} />
					<Route path="/examselect" element={<ExamSelect />} />
				</Routes>
			</React.Fragment>
		</Router>
	);
}

export default App;
