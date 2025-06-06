import edit from "../assets/edit.svg";
import folder from "../assets/folder.svg";
import { Link } from "react-router-dom";

const Sibebar = () => {
  return (
    <div className="shrink-0 bg-slate-800 w-[100px] flex flex-col items-center pt-10">
      <div className="flex justify-center mb-12">
        <div className="w-4 h-4 rounded-full bg-red-500 mx-1"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-500 mx-1"></div>
        <div className="w-4 h-4 rounded-full bg-green-500 mx-1"></div>
      </div>
      <Link to ="/">
        <img className="w-10 h-10 mb-10" src={folder} alt="Voir les notes" />
      </Link>
      <Link to = "/editer">
        <img className="w-10 h-10 mb-10" src={edit} alt="Ecrire une note" />
      </Link>
    </div>
  );
};

export default Sibebar;
