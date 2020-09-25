import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddMember = () => {
  const [name, setName] = useState('');

  const { addMember } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newMember = {
      id: Math.floor(Math.random() * 100000000),
      name,
    }
    addMember(newMember);
  }

  return (
    <>
     <h2>Ajouter un(e) Argonaute</h2>
      <form class="new-member-form" onSubmit={onSubmit}>
        <label for="name">Nom de l&apos;Argonaute</label>
        <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" />
        <button type="submit">Envoyer</button>
      </form>
    </>
  )
}