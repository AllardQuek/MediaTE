import { Button, Grid, TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Switch from "@material-ui/core/Switch";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const UploadTextField = ({
  uploadText,
  setUploadText,
  summarisedText,
  setSummarisedText,
  voice,
  setVoice,
  translate,
  setTranslate,
}) => {
  const { handleSubmit } = useForm();

  const handleVoiceChange = (event) => {
    setVoice(event.target.value);
  };

  const handleChangeText = (event) => {
    setUploadText(event.target.value);
  };

  const handleChange = (event) => {
    setTranslate(!translate);
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
              rows={10}
              variant="outlined"
              onChange={handleChangeText}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            {/* Trigger to summarise text */}
            {summarisedText && (
              <div>
                {/* <h3>Summarised Text</h3> */}
                <TextField
                  className="text-field"
                  id="outlined-multiline-static"
                  label="Summarised Text"
                  value={summarisedText}
                  multiline
                  rows={10}
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <span className="subtitle__text">
                  <sup>
                    We'll use this <b>summarised</b> text to generate your
                    video!
                  </sup>
                </span>
              </div>
            )}
          </Grid>

          <Grid item xs={12}>
            <form onSubmit={handleSubmit(summarise)} className="summarise-btn">
              {!summarisedText && (
                <>
                  <Button type="submit" variant="contained" color="primary">
                    Summarise
                  </Button>{" "}
                  <span className="subtitle__text">
                    your text or generate videos from the full text
                  </span>
                </>
              )}
              {summarisedText && (
                <>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={unsummarise}
                  >
                    Un-Summarise
                  </Button>{" "}
                  <span className="subtitle__text">
                    to use the full text in the video
                  </span>
                </>
              )}
            </form>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={0} sm={2} />
              <Grid item xs={12} sm={3}>
                <FormControl className="voice-dropdown">
                  <InputLabel htmlFor="voice-native-helper">
                    Select a Voice
                  </InputLabel>
                  <NativeSelect
                    value={voice}
                    disabled={translate}
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
              <Grid item xs={12} sm={2} className="or-word">
                OR
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={translate}
                        onChange={handleChange}
                        name="checkedA"
                      />
                    }
                    label="Translate to Chinese"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={0} sm={2} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </UploadTextFieldStyled>
  );
};

const UploadTextFieldStyled = styled.div`
  margin-top: 1rem;

  .voice-dropdown {
    width: 100%;
  }

  .summarise-btn {
    margin-top: -1rem;
  }

  h3 {
    margin-bottom: -0.5rem;
  }

  .or-word {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 200;
  }
`;

export default UploadTextField;
