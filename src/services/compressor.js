import Compressor from 'compressorjs';
import imageCompression from 'browser-image-compression';

export const compressImage = async ( image ) => {

	const controller = new AbortController();
	const compressedFile = await imageCompression( image, {
		maxSizeMB: 0.3,
		maxWidthOrHeight: 1920,
		useWebWorker: true,
		signal: controller.signal,
	} );
	return compressedFile;
}


export const compressFile = ( file ) => {
	let compressedFile;
	new Compressor( file, {
		quality: 0.3,
		maxWidth: 1920,
		maxHeight: 1920,
		resize: {
			enabled: true,
		},
		success: ( result ) => {
			compressedFile = result;
		},
		error ( err ) {
			console.log( err.message );
		},
	} );

	return compressedFile;
}
