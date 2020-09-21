import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Ajoutez nouvelle transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Texte</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Entrez texte..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Montant <br />
            (negatif - dépense, positif - revenue)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Entrez montant..." />
        </div>
        <button className="btn">Ajoutez transaction</button>
      </form>
    </>
  )
}