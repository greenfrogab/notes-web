import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles/index";
import NotesService from "../services/NotesService";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = makeStyles(theme => ({
  notesList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    maxWidth: 360,
  }
}));

export default class NotesList extends Component {

  constructor() {
    super();
    this.state = {
      notes: new Map()
    };
    this.notesService = new NotesService();
  }

  async componentDidMount() {
    let notes = await this.notesService.getNotes();

    let map = new Map();
    notes.forEach(note => {
      map.set(note.id, note);
    });

    this.setState({
      notes: map
    });
  }

  async markDone(note) {

    note.status = !note.status;
    await this.notesService.updateNote(note);

    let notes = this.state.notes;
    notes.set(note.id, note);

    this.setState({
      notes: notes
    });
  }

  _renderNotes() {
    return Array.from(this.state.notes.values()).map((note) => {
      return (
          <ListItem className={styles.listItem} key={note.id} role={undefined} dense button
                    onClick={this.markDone.bind(this, note)}>
            <ListItemIcon>
              <Checkbox edge="start" checked={note.status} tabIndex={-1} disableRipple
                        inputProps={{ 'aria-labelledby': 1 }}/>
            </ListItemIcon>
            <ListItemText id={note.id} primary={note.text}/>
          </ListItem>
      );
    });
  }

  render() {
    return (
        <List className={styles.notesList}>
          {this._renderNotes()}
        </List>
    );
  }
}