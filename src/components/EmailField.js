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
        rows={1}
        variant="outlined"
        onChange={handleChangeEmail}
      />
      <span className="subtitle__text">
        <sup>We'll send the generated video to this email :)</sup>
      </span>
    </div>
  );
};

export default EmailField;
