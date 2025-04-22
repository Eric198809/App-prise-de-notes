
import NotesList from './components/NotesList.jsx';
import { useSelector, useDispatch } from "react-redux";
import { getNotesFromApi } from './features/notes.js';

const App = () => {
  const dispatch =useDispatch()
  const notes= useSelector(state=> state.notes)
  console.log(notes);
  

  if (!notes.list) {
    dispatch(getNotesFromApi())
  }
  return (
    <div className="bg-slate-800 min-h-screen flex">
      
      <NotesList />
    </div>
  );
};

export default App;
