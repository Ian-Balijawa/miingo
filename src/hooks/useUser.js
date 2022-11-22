export const useUser = () => {
	const [user, setUser] = useLocalStorage( "user", null );

	return [user, setUser];
}
