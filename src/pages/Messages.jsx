import { useLocation } from 'react-router-dom';
import Boards from '../components/Boards';
import Chat from '../components/Chats/Chat';
import { DropzoneArea } from 'material-ui-dropzone';
import ModalWrapper from '../components/modal/ModalWrapper';
import SideFeed from '../components/SideFeed';
import Statuses from '../components/Statuses';
import { useState } from 'react';


export default function Messages() {
  const location = useLocation();
  const { src, online, name } = location.state;
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState('');

  return (
    <div className="relative lg:h-screen bg-miingo-gray overflow-y-auto overflow-x-hidden scrollbar-hide">

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

      <main className="flex space-x-2 pr-3">
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
