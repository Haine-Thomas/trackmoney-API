import React, { useContext, useEffect } from 'react';
import { Member } from './Member';

import { GlobalContext } from '../context/GlobalState';

export const MemberList = () => {
  const { members, getMembers } = useContext(GlobalContext);

  useEffect(() => {
    getMembers();
  }, [])

  return (
    <>
      <h2>Membres de l'équipage</h2>
      <section class="member-list">
        <ul className="list">
            {members.map(member => (<Member key={member.id} member={member} />))}
        </ul>
      </section>
   </>
  )
}