import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  members: [],
  error:null,
  loading: true,
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getMembers() {
    try {
      const res = await axios.get('/api/members');

      dispatch({
        type:'GET_MEMBERS',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type:'MEMBER_ERROR',
        payload: err.response.data.error
      })
    }
  }


  async function addMember(member) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/members', member, config)
      dispatch({
        type: 'ADD_MEMBER',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type:'MEMBER_ERROR',
        payload: err.response.data.error
      })
    }
    
  }

  return (<GlobalContext.Provider value={{
    members: state.members,
    error: state.error,
    loading: state.loading,
    getMembers,
    addMember
  }}>
    {children}
  </GlobalContext.Provider>);
}