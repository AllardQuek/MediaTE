import { useState } from "react";

import { Button, Grid, TextField, withStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const UploadTextField = ({ uploadText, setUploadText, summarisedText, setSummarisedText, voice, setVoice }) => {
	const { handleSubmit } = useForm();

	const handleVoiceChange = (event) => {
		setVoice(event.target.value);
	};

	const handleChangeText = (event) => {
		setUploadText(event.target.value);
	};

	const unsummarise = () => {
		setSummarisedText("");
	};

	const summarise = (text) => {
		var https = require("follow-redirects").https;
		// var fs = require("fs");

		var options = {
			method: "POST",
			hostname: "api.meaningcloud.com",
			path: `/summarization-1.0?key=59145f70db8c8ecb0c17705b131896fb&txt=${uploadText}&limit=10`,
			headers: {},
			maxRedirects: 20,
		};

		var req = https.request(options, function (res) {
			var chunks = [];

			res.on("data", function (chunk) {
				chunks.push(chunk);
			});

			res.on("end", function (chunk) {
				var body = Buffer.concat(chunks);
				var result = JSON.parse(body.toString());
				setSummarisedText(result.summary);
				console.log(result.summary);
			});

			res.on("error", function (error) {
				console.error(error);
			});
		});
		req.end();
	};

	const UneditableTextField = withStyles({
		root: {
			"& .MuiInputBase-root.Mui-disabled": {
				color: "black", // (default alpha is 0.38)
			},
		},
	})(TextField);

	return (
		<UploadTextFieldStyled>
			<div className="field">
				<Grid container spacing={2}>
					<Grid item xs={12} sm={summarisedText ? 6 : 12}>
						<TextField
							className="text-field"
							id="outlined-multiline-static"
							label="Your text here"
							multiline
							rows={12}
							variant="outlined"
							onChange={handleChangeText}
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						{/* Trigger to summarise text */}
						{summarisedText && (
							<div>
								{/* <h3>Summarised Text</h3> */}
								<UneditableTextField
									className="text-field__uneditable"
									id="outlined-multiline-static"
									label="Summarised Text"
									value={summarisedText}
									disabled
									multiline
									rows={12}
									variant="outlined"
								/>
								<sub>We'll use the summarised text to generate your video!</sub>
							</div>
						)}
					</Grid>

					<Grid item xs={12}>
						<form onSubmit={handleSubmit(summarise)} className="summarise-btn">
							<Button type="submit" variant="contained" color="primary">
								Summarise
							</Button>{" "}
							{summarisedText && (
								<Button type="submit" variant="contained" color="primary" onClick={unsummarise}>
									Un-Summarise
								</Button>
							)}
						</form>
					</Grid>

					<FormControl className="voice-dropdown">
						<InputLabel htmlFor="voice-native-helper">Voice Type</InputLabel>
						<NativeSelect
							value={voice}
							onChange={handleVoiceChange}
							inputProps={{
								name: "voice",
								id: "voice-native-helper",
							}}
						>
							<option value="Joanna">US female</option>
							<option value="Joey">US male</option>
							<option value="Geraint">Welsh male</option>
							<option value="Raveena">Indian female</option>
						</NativeSelect>
						<FormHelperText>Select your voice</FormHelperText>
					</FormControl>
				</Grid>
			</div>
		</UploadTextFieldStyled>
	);
};

const UploadTextFieldStyled = styled.div`
	margin-top: 1rem;

	.voice-dropdown,
	.summarise-btn {
		margin-top: 1rem;
	}

	h3 {
		margin-bottom: -0.5rem;
	}
`;

export default UploadTextField;
