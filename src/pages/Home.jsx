import Boards from "../components/Boards";
import { DropzoneArea } from "material-ui-dropzone";
import Feed from "../components/Feed";
import ModalWrapper from "../components/modal/ModalWrapper";
import React, { useEffect, useState } from "react";
import SideFeed from "../components/SideFeed";
import Statuses from "../components/Statuses";
import { actions } from "../state";

function Home({ contentType }) {
  
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState("");
 

  /**
   * This effect is used to connect first time users to a socket
   */
  useEffect(() => {
    actions.initSocket();
    console.log('WEBSOCKET USE EFFECT')
  });

  return (
      <div className=" h-screen w-full bg-miingo-gray  font-serif overflow-y-auto overflow-x-hidden scrollbar-hide ">
       
        <Statuses handlePostStatus={() => setShowModal(true)} />

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
                    filesLimit={120000}
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

        <main className="relative flex space-x-2 pr-3 pb-10 ">
          {/* chat */}

          {/* <Widgets /> */}
          <SideFeed />

          {/* Feed */}

          <Feed />

          {/* Boards */}

          <Boards />
        </main>
      </div>
    
  );
}

export default Home;
