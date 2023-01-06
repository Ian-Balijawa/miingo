/* eslint-disable import/no-anonymous-default-export */
import { DropzoneArea } from 'material-ui-dropzone';
import ModalWrapper from './modal/ModalWrapper';
import { useState } from 'react';

export default ({ handler }) => {
  const [files, setFiles] = useState('');
  console.log('FILE: ', files);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMITED: ', files);
  };
  return (
    <ModalWrapper
      title="Upload Status"
      closeModal={() => handler(false)}
      bodyContent={
        <div className="pt-6">
          <div>
            <label className="font-semibold text-textparagraph text-sm">
              UPLOAD
            </label>
            <DropzoneArea
              className="g-lightgraybg"
              acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
              showPreviews={true}
              maxFileSize={5000000}
              onClose={() => handler(false)}
              showAlerts={false}
              showFileNames
              onDragEnter={() => console.log('drag enter')}
              onDrop={(files) => setFiles(files)}
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </>
      }
    />
  );
};
