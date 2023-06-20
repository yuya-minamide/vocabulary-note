import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/userSlice";
import { Container, FormContainer } from "../../styles/pages/Login/LoginStyle";

export const Login = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setData((preve) => {
			return { ...preve, [name]: value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = data;

		if (email && password) {
			const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const resData = await response.json();
			resData.message ? toast.success(resData.message) : toast.error(resData.error);

			if (resData.message) {
				dispatch(userLogin(resData));

				setTimeout(() => {
					navigate("/");
				}, 1000);
			}
		} else {
			toast.error("Please enter required fields");
		}
	};

	return (
		<>
			<Container>
				<Toaster position="top-center" />
				<FormContainer>
					<h1>Login</h1>
					<form onSubmit={handleSubmit}>
						<div>
							<label>E-mail</label>
							<input type="email" id="email" name="email" value={data.email} onChange={handleOnChange} />
						</div>
						<div>
							<label>Password</label>
							<input
								type="password"
								id="password"
								name="password"
								value={data.password}
								onChange={handleOnChange}
								minLength={6}
							/>
						</div>
						<button type="submit">Login</button>
					</form>
					<p>
						Do not have an account? <a href="/signup">Resister from here!</a>
					</p>
				</FormContainer>
			</Container>
		</>
	);
};
