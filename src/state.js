import { proxy } from "valtio"

export const state = proxy( {
	user: null,
	accessToken: null,
	posts: [],
	comments: [],
	socket: null,
	setUser ( user ) {
		state.user = user
		localStorage.setItem( 'user', JSON.stringify( user ) )
	},
	removeUser () {
		state.user = null
		localStorage.clear()
	},
	removeAccessToken () {
		state.accessToken = null
		localStorage.clear()
	},
	setAccessToken ( token ) {
		state.accessToken = token
		localStorage.setItem( 'accessToken', JSON.stringify( state.accessToken ) )
	},
	addPosts ( posts ) {
		state.posts = [...posts].sort( ( a, b ) => new Date( b.createdAt ) - new Date( a.createdAt ) )
	},
	addPost ( post ) {
		state.posts.push( post )
	},
	deletePost ( postId ) {
		state.posts = state.posts.filter( p => p._id !== postId )
	},
	updatePost ( post ) {
		state.posts = state.posts.map( p => p._id === post._id ? post : p )
	},
	addComments ( comments ) {
		state.comments.concat( [...comments] )
	},
	addComment ( comment ) {
		state.comments.push( comment )
	},
	deleteComment ( comment ) {
		state.comments = state.comments.filter( c => c._id !== comment._id )
	},
	updateComment ( comment ) {
		state.comments = state.comments.map( c => c._id === comment._id ? comment : c )
	},

} )
