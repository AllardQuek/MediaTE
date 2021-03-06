import { TextField } from "@material-ui/core";

const EmailField = ({ setUploadEmail }) => {
  const handleChangeEmail = (event) => {
    setUploadEmail(event.target.value);
  };

  return (
    <div className="field">
      <TextField
        className="text-field"
        id="outlined-multiline-static"
        label="Your email here"
        helperText="We'll send your generated video to this email"
        rows={1}
        variant="outlined"
        onChange={handleChangeEmail}
      />
    </div>
  );
};

export default EmailField;
