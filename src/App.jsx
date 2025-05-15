import NotesList from "./components/NotesList.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getNotesFromApi } from "./features/notes.js";
import Sibebar from "./components/Sibebar.jsx";
import SideNotes from "./components/SideNotes.jsx";
import DisplayNote from "./components/DisplayNote.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  console.log(notes);

  if (!notes.list) {
    dispatch(getNotesFromApi());
  }
  return (
    <div className="bg-slate-800 min-h-screen flex">
      <BrowserRouter>
        <Sibebar />
        <SideNotes />
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/note/:id" element={<DisplayNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
