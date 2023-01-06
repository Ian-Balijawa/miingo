import { UserProvider, userContext } from '../context/userContext';
import { actions, state } from '../state';
import AddFriend from './AddFriend';
import axios from '../services/axios-config';
import { useContext } from 'react';
import { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useSnapshot } from 'valtio';

function FriendSuggestion() {

  const [accessToken] = useLocalStorage('accessToken');
  const [loggedInUser] = useLocalStorage('user');
  const snap = useSnapshot(state);
  useEffect(() => {
    axios
      .get('/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((res) => {
        // console.log(res.data);
        actions.addUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  const users = snap.users.filter((user) => user._id !== loggedInUser._id);
  // console.log('users: ', users);

 
  return (
    <div className="flex items-center justify-center bg-white w-full">
      <div
        id="slider3"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide p-1"
      >
        <UserProvider>
          {users.map(({ _id, name, followers, followings, image }) => (
            <AddFriend
              key={_id}
              _id={_id}
              name={name}
              followers={followers}
              followings={followings}
              image={
                image ||
                `https://ui-avatars.com/api/?name=${name}&background=random`
              }
            />
          ))}
        </UserProvider>
      </div>
    </div>
  );
}

export default FriendSuggestion;
