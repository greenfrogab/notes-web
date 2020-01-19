import Communicator from "../communication/Communicator";

export default class NotesService {

  constructor() {
    this.communicator = new Communicator();
    this.url = "http://localhost:4000";
    //this.url = "http://" + window.HYPERCUBE_BACKEND + "/api";
    this.notesUrl = this.url + "/notes";
  }

  createNote(note) {
    throw "Not yet implemented";
  }


  getNote(id) {
    return this.communicator.get(this.notesUrl + "/" + id)
        .then(response => {
          if (!response.ok) {
            return response.json()
                .then(body => {
                  throw body;
                });
          }
          return response.json();
        });
  }

  updateNote(note) {
    return this.communicator.put(this.notesUrl, note.id, JSON.stringify(note))
        .then(response => {
          if (!response.ok) {
            return response.json()
                .then(body => {
                  throw body;
                });
          }
          return response.json();
        });
  }

  deleteNote(id) {
    return this.communicator.delete(this.notesUrl, id)
        .then(response => {
          if (!response.ok) {
            return response.json()
                .then(body => {
                  throw body;
                });
          }
          return response.json();
        });
  }

  getNotes() {
    return this.communicator.get(this.notesUrl)
        .then(response => {
          if (!response.ok) {
            return response.json()
                .then(body => {
                  throw body;
                });
          }
          return response.json();
        });
  }
}