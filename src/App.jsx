import { useEffect } from 'react';
import axios from 'axios';
import './App.css'
import {useDispatch} from 'react-redux';
import ListUsers from './components/ListUsers';
import actionTypes from './redux/constants/actionTypes';
import {getUsers2, setLoading, setUsers} from './redux/actions/userActions';

function App() {
const dispatch = useDispatch();

  useEffect(() => {
    // Update the loading value in the store
    dispatch(setLoading(true));

    // Fetch data from the API
    dispatch(getUsers2());
  }, []);

  return (
    <>
      <h1>Redux / API</h1>
      <ListUsers /> 
    </>
  )
}

export default App
