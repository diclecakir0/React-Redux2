import React from 'react'
import { useSelector } from 'react-redux';
import store from '../redux/store';

const ListUsers = () => {
	// Subscribe to the store
	const storeData = useSelector((store) => store.userReducer);


  return (
	<div>
		{storeData.loading && <p>Loading...</p>}
	  {storeData.users.map((user) => (<p key={user.id}>{user.name}</p>))}
	</div>
  );
};

export default ListUsers;
