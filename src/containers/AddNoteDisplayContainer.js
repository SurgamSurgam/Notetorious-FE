import AddNoteDisplay from "../components/notes/AddNoteDisplay.js";
import { connect } from "react-redux";
import { fetchNotebooks } from "../actions/NotebooksActions.js";
import { fetchNotes } from "../actions/NotesActions.js";
import { withRouter } from "react-router";
import { toggleNewNote } from "../actions/NotesActions.js";
import { fetchAllNotesFromSingleNotebook } from "../actions/NotesActions.js";
import { receiveIdForSelectedNoteFromFavorites } from "../actions/FavoritesActions.js";

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    notebooks: state.notebooks.notebooks,
    notesFromNB: state.notes.notesFromNB,
    noteIdForSelectedNoteFromNotebook:
      state.notebooks.noteIdForSelectedNoteFromNotebook,
    noteIdForSelectedNoteFromFavorites:
      state.favorites.noteIdForSelectedNoteFromFavorites,
    setCurrentNotetoFirstNote: ownProps.setCurrentNotetoFirstNote,
    toolbarOptions: state.notes.toolbarOptions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotes: () => dispatch(fetchNotes()),
    toggleNewNote: value => dispatch(toggleNewNote(value)),
    fetchAllNotesFromSingleNotebook: notebook_id =>
      dispatch(fetchAllNotesFromSingleNotebook(notebook_id)),
    receiveIdForSelectedNoteFromFavorites: note_id =>
      dispatch(receiveIdForSelectedNoteFromFavorites(note_id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddNoteDisplay)
);
