import axios from 'axios'
import md5 from 'md5'

export async function getAgentes() {
	const timestamp = new Date().getTime()
	return await axios
		.get(
			`https://gateway.marvel.com/v1/public/characters?limit=5&ts=${timestamp}&apikey=${
				import.meta.env.VITE_MARVEL_PUBLIC_KEY
			}&hash=${md5(
				timestamp +
					import.meta.env.VITE_MARVEL_PRIVATE_KEY +
					import.meta.env.VITE_MARVEL_PUBLIC_KEY
			)}`
		)
		.then(response => response.data.data.results)
		.catch(error => console.log(error))
}
