import { base_url, truncateText } from '../utils'

export const repoData = async (username: string, repo: string) => {
	const url = `${base_url}/repos/${username}/${repo}`
	const response = await fetch(url)
	const { name, description, stargazers_count, forks_count } =
		await response.json()
	return {
		name,
		description: truncateText(description),
		stars: stargazers_count,
		forks: forks_count,
	}
}
