import { useSelector } from "react-redux";

const NotesList = () => {
  const notes= useSelector(state=> state.notes)
  return (
    <div>
      <h1 className="text-red-700">hello</h1>
    </div>
  );
};

export default NotesList;