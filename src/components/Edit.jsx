import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNoteFromUser } from "../features/notes.js";


const Edit = () => {
  const dispactch = useDispatch();
  const [inputsStates, setInputsStates] = useState({
    title: "",
    subtitle: "",
    bodyText: "",
  });
  const [showValidation, setShowValidation] = useState({
    title: false,
    subtitle: false,
    bodyText: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputsStates.title === "" || inputsStates.subtitle === "" || inputsStates.bodyText === "") {
      setShowValidation({
        title: true,
        subtitle: true,
        bodyText: true,
      })}
else{
    dispactch(addNoteFromUser({...inputsStates, id:nanoid(8) }));

    setInputsStates({
    title: "",
    subtitle: "",
    bodyText: "",
  })}
    

  }

  return (
    <div className="w-full p-10">
      <p className="text-slate-100 text-xl mb-4">Ajouter une note</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="mb-2 block text-slate-100 uppercase">
          Titre
        </label>
        <input
          type="text"
          value={inputsStates.title}
          className="p-2 text-md block w-full rounded bg-slate-200"
          id="title"
          onChange={(e) => {
            setInputsStates({
              ...inputsStates,
              title: e.target.value,
            });
          }}
        />
        {showValidation.title && (
          <p className="text-red-500 text-sm mt-2">
            Veuillez ajouter un titre
          </p>
        )}
        <label
          htmlFor="subtitle"
          className="mb-2 mt-2 block text-slate-100 uppercase"
        >
          Sous-titre
        </label>
        <input
          type="text"
          value={inputsStates.subtitle}
          className="p-2 text-md block w-full rounded bg-slate-200"
          id="subtitle"
          onChange={(e) => {
            setInputsStates({
              ...inputsStates,
              subtitle: e.target.value,
            });
          }}
        />
        {showValidation.subtitle && (
          <p className="text-red-500 text-sm mt-2">
            Veuillez ajouter un sous-titre
          </p>
        )}
        <label
          htmlFor="bodyText"
          className="mb-2 mt-4 block text-slate-100 uppercase"
        >
          Note
        </label>

        <textarea
          className="w-full min-h-[300px] p-2 rounded bg-slate-200"
          name=""
          id="bodyText"
          value={inputsStates.bodyText}
          onChange={(e) => {
            setInputsStates({
              ...inputsStates,
              bodyText: e.target.value,
            });
          }}
        ></textarea>
        {showValidation.bodyText && (
          <p className="text-red-500 text-sm mt-2">
            Veuillez ajouter du contenu
          </p>
        )}
        <button className="mt-4 px-3 py-1 bg-slate-100 rounded">
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default Edit;
