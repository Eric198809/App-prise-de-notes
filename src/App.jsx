import NotesList from "./components/NotesList.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getNotesFromApi } from "./features/notes.js";
import Sibebar from "./components/Sibebar.jsx";
import SideNotes from "./components/SideNotes.jsx";
import DisplayNote from "./components/DisplayNote.jsx";
import Edit from "./components/Edit.jsx";
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
          <Route path="/editer" element={<Edit />} />
          <Route path="/editer/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
