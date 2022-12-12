import { derive, subscribeKey } from "valtio/utils"
import { proxy, ref } from "valtio"

import { getTokenPayload } from './utils/getTokenPayload';
import { socketUrl, createSocket } from './socket'


const state = proxy( {
	user: null,
	accessToken: null,
	posts: [],
	comments: [],
	socket: null,
	isLoading: false,
	wsErrors: ref( [] ),

} );

derive( {
	isLoggedIn: ( get ) => get( state ).user,
	hasAccessToken: ( get ) => get( state ).accessToken,
	hasPosts: ( get ) => get( state ).posts.length,
	hasComments: ( get ) => get( state ).comments?.length,
	hasSocket: ( get ) => get( state ).socket,
	hasWsErrors: ( get ) => get( state ).wsErrors.length,
	me: ( get ) => {
		const accessToken = get( state ).accessToken
		if ( !accessToken ) return null
		const payload = getTokenPayload( accessToken )

		return {
			id: payload.sub,
			name: payload.name,
			email: payload.email,
		}
	},
},

	{
		proxy: state,
	}
);


const actions = {
	initSocket: () => {
		if (!state.socket) {
			state.socket = ref(createSocket({ socketUrl, state, actions }));
		} else {
			state.socket.connect();
		}

	},
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
		const currentComments = [...state.comments]
		if ( !currentComments.length === 0 ) {
			state.comments = [comment]
			state.comments.sort( ( a, b ) => new Date( b.createdAt ) - new Date( a.createdAt ) )
			return
		}
		const index = currentComments.findIndex( c => c._id === comment._id )
		if ( index === -1 ) {
			state.comments = [comment, ...currentComments]

		} else {
			state.comments = [
				...currentComments.slice( 0, index ),
				comment,
				...currentComments.slice( index + 1 ),
			]

		}
		state.comments.sort( ( a, b ) => new Date( b.createdAt ) - new Date( a.createdAt ) )
	},
	addComments: ( comments ) => {
		const currentComments = [...state.comments]
		currentComments.forEach( ( comment ) => {
			const index = comments.findIndex( ( c ) => c._id === comment._id )
			if ( index !== -1 ) {
				comments[index] = comment
			}
		} )
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
	},
	likePost ( likes, id ) {
		const likedPost = state.posts.find( post => post._id === id )
		likedPost.likes = likes

		const currentPosts = [...state.posts]
		const index = currentPosts.findIndex( post => post._id === id )
		currentPosts[index] = likedPost
		state.posts = currentPosts

	},
	incrementCommentsCountForPost ( id ) {
		const post = state.posts.find( post => post._id === id )
		post.commentCounts += 1

		const currentPosts = [...state.posts]
		const index = currentPosts.findIndex( post => post._id === id )
		currentPosts[index] = post
		state.posts = currentPosts
	}
}

subscribeKey( state, 'accessToken', () => {
	if ( state.accessToken ) {
		//actions.setAccessToken( null )
		localStorage.setItem( 'accessToken', state.accessToken )
		console.log('accessToken set', state.accessToken)

	} else {
		localStorage.removeItem('accessToken')
		localStorage.removeItem('me');
	}
	
})

subscribeKey(state, 'me', () => {
	if (state.me) {
		localStorage.setItem('me', JSON.stringify(state.me));
	} else {
		localStorage.removeItem('me');
	}
})

export { state, actions }
