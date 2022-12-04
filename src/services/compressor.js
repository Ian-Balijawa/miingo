import Compressor from 'compressorjs';
import imageCompression from 'browser-image-compression';

export const compressImage = async ( image ) => {
	console.log( "conpressing...." );

	const controller = new AbortController();
	const compressedFile = await imageCompression( image, {
		maxSizeMB: 0.3,
		maxWidthOrHeight: 1920,
		useWebWorker: true,
		signal: controller.signal,
	} );
	console.log( "conpressing completed...." );

	return compressedFile;
}


export const compressFile = ( file ) => {
	let compressedFile;
	console.log( "conpressing...." );
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

	console.log( "compressed...." );
	return compressedFile;
}
