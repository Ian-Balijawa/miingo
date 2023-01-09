/* eslint-disable import/no-anonymous-default-export */

import { DropzoneArea } from 'material-ui-dropzone';
import ModalWrapper from './modal/ModalWrapper';
import axios from '../services/axios-config';
import { compressImage } from '../services/compressor';
import { state } from '../state';
import useLocalStorage from '../hooks/useLocalStorage';
import { useSnapshot } from 'valtio';
import { useState } from 'react';

export default ({ handler }) => {
  const [files, setFiles] = useState('');
  const snap = useSnapshot(state);
  const token = snap.accessToken;
  const [loggedInuser] = useLocalStorage('user');
  const me = snap.users.find((user) => user._id === loggedInuser._id);
  console.log('DERIVED ME: ', me._id);

  const handleUploadStatus = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (!files) return alert('Please select a file to upload!');
    if (files[0]) {
      const image = await compressImage(files[0]);
      formData.append('media', image);
    }

    try {
      await axios.patch(`/user/status/${me._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(`Submitting ${files[0]}`);
    } catch (err) {
      console.log(err);
    }
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
              onChange={(files) => setFiles(files)}
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
            onClick={handleUploadStatus}
          >
            Submit
          </button>
        </>
      }
    />
  );
};
