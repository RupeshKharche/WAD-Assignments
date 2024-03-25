function LoginComponent() {
	return (
		<div className="d-flex flex-column align-items-center justify-content-center">
			<form className="card mt-4 p-4" id={"loginForm"}>
				<label className="form-label" htmlFor="username">Username: </label>
				<input className={"form-control"} type="text" id={"username"} placeholder={"Enter username"} required/>

				<br/>

				<label className="form-label" htmlFor="password">Password: </label>
				<input className={"form-control"} type="password" id={"password"} placeholder={"Enter password"} required/>
			</form>
		</div>
	);
}

export default LoginComponent;