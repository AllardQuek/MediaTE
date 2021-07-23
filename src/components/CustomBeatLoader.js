import { BeatLoader } from "react-spinners";

const CustomBeatLoader = ({ submitting }) => {
  return (
    <BeatLoader
      color="var(--success-color)"
      loading={submitting} // no prop passed will still be true!
      size={15}
      margin={2}
    />
  );
};

export default CustomBeatLoader;
