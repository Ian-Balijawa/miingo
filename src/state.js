import { derive, subscribeKey } from "valtio/utils"
import { proxy, ref } from "valtio"

import { getTokenPayload } from './utils/getTokenPayload';

const state = proxy( {
	user: null,
	accessToken: null,
	posts: [],
	comments: [],
	socket: null,
	isLoading: false,
	wsErrors: ref( [] ),
	get isLoggedIn () {
		return !!this.user
	},
	get hasAccessToken () {
		return !!this.accessToken
	},
	get hasPosts () {
		return !!this.posts.length
	},
	get hasComments () {
		return !!this.comments.length
	},
	get hasSocket () {
		return !!this.socket
	},
	get hasWsErrors () {
		return !!this.wsErrors.length
	},
	get me () {
		const accessToken = this.accessToken
		if ( !accessToken ) return null
		const payload = getTokenPayload( accessToken )

		return {
			id: payload.sub,
			name: payload.name,
			email: payload.email,
		}
	},
} )

const actions = {
	startLoading: () => {
		state.isLoading = true
	},
	stopLoading: () => {
		state.isLoading = false
	},
	setUser: ( user ) => {
		state.user = user
		localStorage.setItem( 'user', JSON.stringify( user ) )
	},
	setAccessToken: ( accessToken ) => {
		state.accessToken = accessToken
	},
	addPost: ( post ) => {
		state.posts = [post, ...state.posts]
		state.posts.sort( ( a, b ) => new Date( b.createdAt ) - new Date( a.createdAt ) )
	},
	addPosts: ( posts ) => {
		state.posts = posts
		state.posts.sort( ( a, b ) => new Date( b.createdAt ) - new Date( a.createdAt ) )
	},
	addComment: ( comment ) => {
		state.comments = [comment, ...state.comments].sort( ( a, b ) => new Date( b.createdAt ) - new Date( a.createdAt ) )
	},
	addComments: ( comments ) => {
		state.comments = comments
		state.comments.sort( ( a, b ) => new Date( b.createdAt ) - new Date( a.createdAt ) )
	},
	setSocket: ( socket ) => {
		state.socket = socket
	},
	deletePost ( id ) {
		state.posts = state.posts.filter( post => post.id !== id )
	},
	deleteComment ( id ) {
		state.comments = state.comments.filter( comment => comment.id !== id )
	}
}

subscribeKey( state, 'accessToken', () => {
	if ( !state.accessToken ) {
		actions.setAccessToken( null )
		localStorage.setItem( 'accessToken', null )
		console.log( 'accessToken removed', state?.accessToken )

	} else {
		localStorage.setItem( 'accessToken', state?.accessToken )
		console.log( 'accessToken set', state?.accessToken )
	}
} )

export { state, actions }
