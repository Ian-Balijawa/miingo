import { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import { actions, state } from './../state';
import axios from '../services/axios-config';
import { compressImage } from '../services/compressor';
import useLocalStorage from '../hooks/useLocalStorage';
import { useSnapshot } from 'valtio';

function InputBox() {
  const [accessToken] = useLocalStorage('accessToken');
  const [document, setDocument] = useState(null);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [postDescription, setPostDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { me: user } = useSnapshot(state);

  const handlePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('postDesc', postDescription);
    if (document) formData.append('document', document);
    if (image) {
      const compressedImage = await compressImage(image);
      formData.append('image', compressedImage);
    }
    if (video) {
      if (video.size > 2500000) {
        setErrorMessage(
          'Video size should be less than 2.5MB \n Please Select a smaller video'
        );
        setVideo(null);
        return;
      }

      formData.append('video', video);
    }

    formData.append('user', user.id);
    try {
      setIsUploading(true);

      const response = await axios.post('/post', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      setSuccessMessage(response.data.message);
      actions.addPost(response.data);
      setIsUploading(false);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setIsUploading(false);
    } finally {
      setIsUploading(false);
      setDocument(null);
      setImage(null);
      setVideo(null);
      setPostDescription('');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 10000);
    return () => clearTimeout(timer);
  }, [errorMessage, successMessage]);

  return (
    <div className="bg-white flex flex-col p-2 shadow-md text-gray-500 font-medium mt-6 ">
      <div className="flex space-x-4  p-4 items-center ">
        <div className=" w-10 h-10 hidden md:flex">
          <img
            className="w-full h-full rounded-full object-cover "
            src={`https://ui-avatars.com/api/name=${user?.name}&background=random`}
            alt="profile"
          />
        </div>
        <form className="flex flex-col space-y-2 w-full">
          <textarea
            id="postDescription"
            name="postDescription"
            rows="8"
            cols="50"
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
            className="font-sans text-gray-600 resize-none flex-grow bg-gray-100  h-20 w-full  px-5 py-3 focus:outline-none rounded-lg border"
            placeholder="Share what you are thinking here......."
            maxLength="200"
          />
        </form>
      </div>

      <div className="  flex items-center  justify-between p-3 border-t">
        <div className=" flex items-center space-x-2">
          <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer">
            <label htmlFor="upload" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <span className="upload fa fa-upload hidden md:inline-flex">
                video
              </span>
            </label>
            <input
              type="file"
              id="upload"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>

          <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer ">
            <label
              htmlFor="image-upload"
              className="flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <span className="upload fa fa-upload hidden md:inline-flex ">
                Photo
              </span>
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 hover:rounded-lg cursor-pointer">
            <label
              htmlFor="file-upload"
              className="flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
              </svg>

              <span className="upload fa fa-upload hidden md:inline-flex">
                File
              </span>
            </label>
            <input
              type="file"
              id="file-upload"
              accept="application/*"
              onChange={(e) => setDocument(e.target.files[0])}
            />
          </div>
        </div>

        <div className=" flex items-center justify-center" onClick={handlePost}>
          <h4> Post </h4>
          <span className="flex items-center justify-center ml-2 cursor-pointer active:scale-90 transition ease-in-out duration-300">
            <button className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </button>
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        {errorMessage && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <p className="text-red-500">{errorMessage}</p>
          </div>
        )}
        {successMessage && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <p className="text-green-500">{successMessage}</p>
          </div>
        )}

        {isUploading && (
          <div style={{ padding: '2rem' }}>
            <Spinner size={'lg'} color="blue" />{' '}
          </div>
        )}
        {!isUploading && video && (
          <div className="flex flex-col items-center justify-center">
            <video
              src={URL.createObjectURL(video)}
              alt="video"
              width="150"
              height="200"
              controls
            />
            <button
              className="bg-red-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => setVideo(null)}
            >
              Delete
            </button>
          </div>
        )}

        {!isUploading && image && (
          <img
            src={URL.createObjectURL(image)}
            width="150"
            height="200"
            alt={image.name}
          />
        )}
        {!isUploading && document && (
          <iframe
            src={URL.createObjectURL(document)}
            width="150"
            height="200"
            controls
            title="document"
          />
        )}

        {!isUploading && !isUploading && video && (
          <button
            className="bg-red-500 text-white bg-red font-bold rounded"
            onClick={() => setVideo(null)}
            style={{
              alignSelf: 'flex-start',
              margin: '0 0.4rem',
              padding: '0.4rem 0.8rem'
            }}
          >
            Discard
          </button>
        )}

        {!isUploading && image && (
          <button
            className="bg-red-500 text-white bg-red font-bold rounded"
            onClick={() => setImage(null)}
            style={{
              alignSelf: 'flex-start',
              margin: '0 0.4rem',
              padding: '0.4rem 0.8rem'
            }}
          >
            Discard
          </button>
        )}

        {!isUploading && document && (
          <button
            className="bg-red-500 text-white bg-red font-bold rounded"
            onClick={() => setDocument(null)}
            style={{
              alignSelf: 'flex-start',
              margin: '0 0.4rem',
              padding: '0.4rem 0.8rem'
            }}
          >
            Discard
          </button>
        )}
      </div>
    </div>
  );
}

export default InputBox;
