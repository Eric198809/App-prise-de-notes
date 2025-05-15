import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  return (
    <div className="p-10 w-full">
      <p className="text-xl text-slate-200 mb-6 uppercase">Bienvenue</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6 ">
        {notes.list &&
          notes.list.map((note) => (
            <div key={note.id} className="bg-slate-100 hover:bg-slate-50 rounded cursor-pointer p-4">
              <Link to={`/note/${note.id}`}>
              <p className="text-lg font-semibold uppercase">{note.title}</p>
              <p className="text-grey-700">{note.subtitle}</p>
              </Link>
              
            </div>
          ))}

      </div>
    </div>
  );
};

export default NotesList;
