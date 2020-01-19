import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import NotesService from "../services/NotesService";
import Note from "../services/Note";


export default class AddNote extends Component {

  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  onTextChange(e) {
    this.setState({ text: e.target.value });
  }

  onKeyPress(e) {
    if (e.key === "Enter") {
      console.log("Adding note...", this.state.text);
      this.setState({ text: "" });
    }
  }

  async addNote() {
    let note=new Note();
    note.text=this.state.text;

    console.log(note);

    let noteService=new NotesService();
    await noteService.createNote();

    this.setState({ text: "" });
  }

  render() {
    return (
        <div>
          <TextField id="noteText" label="Enter text"
                     value={this.state.text}
                     onChange={this.onTextChange.bind(this)}
                     onKeyPress={this.onKeyPress.bind(this)}
          />

          <Fab color="primary" aria-label="add" onClick={this.addNote.bind(this)}>
            <AddIcon/>
          </Fab>
        </div>
    );
  }
}