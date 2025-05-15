import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const DisplayNote = () => {
  const notes = useSelector((state) => state.notes);
  const { id } = useParams();
  const note = notes.list.find((note) => note.id === id);
  return (
    <div className="p-10">
      <Link
        to="/"
        className="px-2 py-2 text-slate-800 bg-slate-300 rounded mr-2"
      >
        Note
      </Link>

      <Link
        to={`/editer/${id}`}
        className="px-2 py-2 text-slate-200 bg-green-600 rounded mr-2"
      >
        Mettre à jour
      </Link>
      <button className="px-2 py-2 text-slate-200 bg-red-600 rounded mr-2">
        Supprimer
      </button>

      <h2 className="text-slate-100 text-4xl mb-2 mt-8">{note.title}</h2>
      <p className="text-slate-200 text-xl mb-4">{note.subtitle}</p>
      <p className="text-slate-300">{note.bodyText}</p>
    </div>
  );
};

export default DisplayNote;
