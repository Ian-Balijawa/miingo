import { Link, useLocation } from 'react-router-dom';
import Boards from '../components/Boards';
import Chat from '../components/Chats/Chat';
import Header from '../components/Header';
import { HiOutlineLogout } from 'react-icons/hi';
import { DropzoneArea } from 'material-ui-dropzone';
import ModalWrapper from '../components/modal/ModalWrapper';
import SideFeed from '../components/SideFeed';
import Statuses from '../components/Statuses';
import axios from '../services/axios-config';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Messages() {
  const location = useLocation();
  const { src, online, name } = location.state;
  const [logout, setLogout] = useState(false);
  const [user] = useLocalStorage('user');
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState('');
  const [userName] = useState(user.name.split(' '));

  const navigate = useNavigate();

  const showDropdown = () => {
    setLogout(!logout);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.patch('/auth/logout');
    } catch (error) {
      if (error) {
      }
    }

    localStorage.removeItem('token');

    navigate('/');
  };

  return (
    <div className="relative h-screen bg-miingo-gray overflow-y-auto overflow-x-hidden">
      {/* Header */}

      <Header onPress={showDropdown} />

      { logout && (
        <div className="absolute top-16 right-14 z-50 bg-white shadow-xl rounded-lg h-auto w-28 p-2">
          <div className="py-1">
            <div className="w-4 h-4 right-3 md:left-3 absolute mt-1 bg-white -top-3  rotate-45"></div>
          </div>

          <p className="text-sm hover:bg-gray-200 cursor-pointer border-b mb-2 sm:hidden">
            {userName[0]}
          </p>

          <Link
            to={`/profile/${user._id}`}
            className="text-sm hover:bg-gray-200 cursor-pointer border-b mb-2 text no-underline "
          >
            {' '}
            Profile{' '}
          </Link>
          <p
            onClick={handleLogout}
            className="text-sm hover:bg-gray-200 cursor-pointer flex items-center space-x-3"
          >
            <span className="">
              <HiOutlineLogout className="w-5 h-5 hover:scale-105 transition ease-out duration-300 " />
            </span>
            <span>Logout</span>
          </p>
        </div>
      )}

      <Statuses handlePostStatus = {() => setShowModal(true)} />
        
        {showModal ? (
          <ModalWrapper
            title="Upload Status"
            closeModal={() => setShowModal(false)}
            bodyContent={
              <div className="pt-6">
                <div>
                  <label className="font-semibold text-textparagraph text-sm">
                    UPLOAD
                  </label>
                  <DropzoneArea
                    className="g-lightgraybg"
                    filesLimit={1}
                    // useChipsForPreview={
                    //   contentType.toLowerCase === 'photo' ? false : true
                    // }
                    showAlerts={false}
                    showFileNames
                    maxFileSize={200000000} // 200mb limit
                    // acceptedFiles={fileType()}
                    onChange={(files) => setContent(files)}
                  />
                </div>
              </div>
            }
            footer={true}
            footerContent={
              <>
                <button
                  className="w-full h-14 falsefocus:shadow-outline  bg-regal-orange text-white font-semibold font-display text-xl px-6 py-3 rounded-md shadow hover:bg-navyblue outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
                  type="submit"
                  // onClick={(e) => handleSubmit(e)}
                  // disabled={loading}
                >
                  {/* {loading ? <PuffLoader color='white' /> : 'Submit'} */}
                  Submit
                </button>
              </>
            }
          />
        ) : null}

      <main className="flex space-x-2 pr-3 pb-10">
        {/* chats */}

        <SideFeed />

        {/* Messages */}

        <Chat name={ name } src={ src } online={ online } />

        {/* Boards */}

        <Boards />

      </main>
    </div>
  );
}
