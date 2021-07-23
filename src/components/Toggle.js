import { useState } from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";

export default function SwitchLabels() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="Translate to Chinese"
      />
    </FormGroup>
  );
}
