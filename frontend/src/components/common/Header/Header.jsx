import { Link } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineHome } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { SiTestcafe } from "react-icons/si";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/userSlice";
import {
	HeaderContainer,
	LoginButton,
	LogoContainer,
	LogoutButton,
	NavContainer,
	PersonalContainer,
} from "../../../styles/components/common/Header/HeaderStyle";

export function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const userData = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleShowMenu = () => {
		setShowMenu((preve) => !preve);
	};

	const handleLogout = () => {
		dispatch(userLogout());
		toast.success("Logout successfully");
	};

	return (
		<HeaderContainer>
			<Toaster position="top-center" />
			<LogoContainer>
				<BsBook />
				{userData.nickName ? <div>{userData.nickName}'s note</div> : <div>Vocabulary note</div>}
			</LogoContainer>
			<div>
				<NavContainer>
					<li>
						<Link href="/">
							<AiOutlineHome />
						</Link>
					</li>
					<li>
						<Link href="/">
							<SiTestcafe />
						</Link>
					</li>
					<li onClick={handleShowMenu}>
						<BsFillPersonFill />

						{showMenu && (
							<PersonalContainer>
								{userData.nickName ? (
									<LogoutButton onClick={handleLogout}>Logout</LogoutButton>
								) : (
									<LoginButton href="/login">Login</LoginButton>
								)}
							</PersonalContainer>
						)}
					</li>
				</NavContainer>
			</div>
		</HeaderContainer>
	);
}
