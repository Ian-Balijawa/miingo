/* eslint-disable import/no-anonymous-default-export */
import { Navigate} from 'react-router-dom';
import { useSnapshot } from 'valtio';
import { state } from '../state';
import { SigninForm } from './../components/auth/SigninForm';

export default () => {
  const { me } = useSnapshot(state);
  
  return me? <Navigate to ='/feed' />: <SigninForm />;
};
