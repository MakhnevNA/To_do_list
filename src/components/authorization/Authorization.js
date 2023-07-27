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
		email: null,
		password: null
	}

	checkValue = (e) => {
		this.setState({
			[e.target.name]: e.currentTarget.value
		})
	}

	submitForm = (e) => {
		e.preventDefault()
		if ((this.state.email === "admin") && (this.state.password === "admin")) {
			this.setState(({ view }) => ({
				view: !view,
			}));
		}
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
		const {checkValue, onSubmitForm} = this.props

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
						// boxShadow: "0 8px 16px -12px rgba(#0f0e13, 0.5)",
						// borderTop: "1px solid rgba(#ffffff, 0.05)",
						// backdropFilter: "blur(80px) brightness(1.25)"
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
							name="email"
							autoComplete="email"
							onChange = {checkValue}
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
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