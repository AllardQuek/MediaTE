import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Snack = ({ message, setMessage, severity }) => {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMessage("");
  };

  return (
    <div>
      <Snackbar
        open={message !== ""} // Using string allows us to customise the message
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Snack;
