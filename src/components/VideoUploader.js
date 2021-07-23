import "react-dropzone-uploader/dist/styles.css";
import { useState } from "react";

import Dropzone from "react-dropzone-uploader";

import CustomBeatLoader from "./CustomBeatLoader";
import CustomDialog from "./CustomDialog";
import Snack from "./Snack";
import styled from "styled-components";

const Uploader = () => {
  const axios = require("axios").default;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const url =
    "https://5n58vjjzdd.execute-api.ap-southeast-1.amazonaws.com/default/getVidPresignedURL";
  const inputContent = "Drop 1 Video File (.mp4) of a Face";
  const contentType = "video/mp4";

  const handleChangeStatus = (file, status) => {
    console.log(status, file.meta);

    if (status === "rejected_file_type") {
      setError("Sorry, this file type is not supported");
      return;
    }

    // When status is done, alert the user if their file is longer than 1 minute
    if (status === "done") {
      if (file.meta.duration > 60) {
        setError("Sorry, maximum file duration is 1 minute!");
        file.remove();
        return;
      }
      console.log(file.meta.size);

      // if file size greater than 10mb
      if (file.meta.size > 10485760) {
        setError("Sorry, maximum file size is 10MB!");
      }
    }
  };

  const handleSubmit = async (files) => {
    setLoading(true);
    const f = files[0]; // We limit uploads to only 1
    const response = await axios({
      method: "GET",
      url: url,
    });

    // * Using the returned URL, make a PUT request to upload media to S3 bucket
    await fetch(response.data.uploadURL, {
      method: "PUT",
      headers: {
        "Content-Type": contentType,
      },
      body: f["file"], // ! WATCH OUT !
    })
      .then(() => {
        setSuccess(true);
        // setNthUpload(true); // Keep track which files have been uploaded
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });

    f.remove(); // Remove the file from the Dropzone
    setLoading(false); // Disable uploader if file is already uploading
  };

  const submitStyles = {
    dropzone: {
      overflow: "auto",
      padding: "1.5rem",
      backgroundColor: "var(--dropzone-bg-color)",
    },
    dropzoneReject: {
      borderColor: "red",
      backgroundColor: "#DAA",
    },
    submitButton: {
      borderRadius: "45px",
      color: "var(--font-light-color)",
      backgroundColor: "var(--primary-color)",
      boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
      fontWeight: 500,
      letterSpacing: "1.2px",
      fontFamily: "Roboto",
    },
    preview: {},
    inputLabel: {
      color: "var(--dropzone-font-color)",
    },
  };

  return (
    <VideoUploaderStyled>
      <Dropzone
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="video/mp4"
        maxFiles={1}
        multiple={false}
        submitButtonDisabled={(files) => files.length > 1}
        inputContent={inputContent}
        PreviewComponent={loading && CustomBeatLoader} // Cannot pass props here!
        disabled={loading}
        styles={submitStyles}
      />
      <CustomDialog open={success} setOpen={setSuccess} />
      <Snack
        severity="error"
        message={error} // Display the error if not empty
        setMessage={setError}
      />
    </VideoUploaderStyled>
  );
};

const VideoUploaderStyled = styled.div`
  margin-top: 1rem;
`;

export default Uploader;
