import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import styled from "styled-components";

const UploadTextField = ({ setUploadText, voice, setVoice }) => {
  const handleVoiceChange = (event) => {
    setVoice(event.target.value);
  };

  const handleChangeText = (event) => {
    setUploadText(event.target.value);
  };

  return (
    <UploadTextFieldStyled>
      <div className="field">
        <TextField
          className="text-field"
          id="outlined-multiline-static"
          label="Your text here"
          multiline
          rows={4}
          variant="outlined"
          onChange={handleChangeText}
        />
        <FormControl className="form-control">
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
      </div>
    </UploadTextFieldStyled>
  );
};

const UploadTextFieldStyled = styled.div`
  margin-top: 1rem;
`;

export default UploadTextField;
