import { Component } from "react";
import WorkingArea from "../workingArea/WorkingArea";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

class Authorization extends Component {

	state = {
		view: false,
		login: false,
		email: '',
		password: ''
	}

	checkValue = (e) => {
		this.setState({
			[e.target.id]: e.currentTarget.value
		})
	}

	submitForm = (e) => {
		e.preventDefault()

		this.authWithEmailAndPassword(this.state.email, this.state.password)
			.then(reg => {
				if (reg === true) {
					this.setState(() => ({
						view: false,
					}));
				}
			})
			
			
	}

	authWithEmailAndPassword = (email, password) => {
		
		const apiKey = "AIzaSyAIfQuuz0TZudCJQQMucHqJ3AHZLMgX7sw";

		return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
			method: 'POST',
			body: JSON.stringify({
				email: email,
				password: password,
				returnSecureToken: true
			}),
			headers: {
				'Content-type': 'application/json'
			}
		})
		.then(res => res.json())
		.then(data => data.registered)
	}


	render() {
		const { view } = this.state;
		const content = view ? <Login checkValue={this.checkValue} onSubmitForm={this.submitForm} /> : <WorkingArea />;
		
		return (
			<>
				{content}
			</>
		)
	}
}


class Login extends Component{

	render() {
		const { checkValue, onSubmitForm } = this.props

		return (
			<Container component="main" maxWidth="sm" >
				<Box
					sx={{
						// boxShadow: 3,
						borderRadius: 2,
						px: 4,
						py: 6,
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						backgroundColor: "white",
					}}
					
				>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box component="form"  noValidate sx={{ mt: 1 }} onSubmit={(e) => onSubmitForm(e)}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							autoComplete="email"
							onChange={checkValue}
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange = {checkValue}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item >
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		)
	}
}



export default Authorization;