import $api from "../../http/index";

export const sendLogout = () => {
	// $api.post("/users/revoke").then(() => {
	// 	localStorage.removeItem("accessToken");

	// 	window.location.href = "/";
	// });

	localStorage.removeItem("accessToken");
	window.location.href = "/";
}