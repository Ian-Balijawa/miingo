import { useEffect, useState } from "react"

import axios from "../services/axios-config"
export const useRequest = ( { route, body, method } ) => {
	const [data, setData] = useState( null )
	const [error, setError] = useState( null )
	const [loading, setLoading] = useState( false )
	useEffect( () => {
		const fetchData = async () => {
			setLoading( true )
			try {
				const response = await axios[method]( route, body )
				setData( response.data )
				setLoading( false )
			} catch ( error ) {
				setError( error )
				setLoading( false )
			}
		}
		fetchData()
	}, [route, body, method] )
	return { data, error, loading }

}
