import axios from 'axios';

const axiosClient = axios.create( {
	baseURL: 'https://api1.miingoapp.com',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem( 'accessToken' )}`,
	},
} );

export const signin = async ( email, password ) => {
	const { data } = await axiosClient.post( '/auth/signin', { email, password } );
	localStorage.setItem( 'accessToken', data.accessToken );
	localStorage.setItem( 'user', JSON.stringify( data.user ) );
	return data;
};

export const signup = async ( email, password, name, dob, gender ) => {
	const { data } = await axiosClient.post( '/auth/signup', { email, password, name, dob, gender } );
	localStorage.setItem( 'accessToken', data.accessToken );
	localStorage.setItem( 'user', JSON.stringify( data.user ) );
	return data;
};

export const getPosts = async () => {
	const response = await axiosClient.get( '/post' );
	return response.data;
}

export const getPost = async ( _id ) => {
	const response = await axiosClient.get( `/posts/${_id}` );
	return response.data;
}

export const createPost = async ( post ) => {
	const response = await axiosClient.post( '/posts', post );
	return response.data;
}

export const updatePost = async ( _id, post ) => {
	const response = await axiosClient.put( `/posts/${_id}`, post );
	return response.data;
}

export const deletePost = async ( _id ) => {
	const response = await axiosClient.delete( `/posts/${_id}` );
	return response.data;
}

export const likePost = async ( _id ) => {
	const response = await axiosClient.put( `/posts/${_id}/like` );
	return response.data;
}

export const getComments = async ( _id ) => {
	const response = await axiosClient.get( `/posts/${_id}/comments` );
	return response.data;
}

export const createComment = async ( postId, comment ) => {
	const response = await axiosClient.post( `/posts/${postId}/comments`, comment );
	return response.data;
}


export const updateComment = async ( postId, commentId, comment ) => {
	const response = await axiosClient.put( `/posts/${postId}/comments/${commentId}`, comment );
	return response.data;
}

export const deleteComment = async ( postId, commentId ) => {
	const response = await axiosClient.delete( `/posts/${postId}/comments/${commentId}` );
	return response.data;
}
