import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { DialogContent } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true, newPaletteName: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("paletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { newPaletteName } = this.state;
    const { handleSubmit, hideForm } = this.props;

    return (
      <Dialog
        open={this.state.open}
        onClose={hideForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new color palette. The name must be
              unique.
            </DialogContentText>
            <Picker />
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              name="newPaletteName"
              onChange={this.handleChange}
              fullWidth
              margin="normal"
              validators={["required", "paletteNameUnique"]}
              errorMessages={[
                "Enter a palette name",
                "Palette name must be unique",
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm} color="primary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default PaletteMetaForm;
