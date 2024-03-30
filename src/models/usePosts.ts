import { useEffect, useRef, useState } from "react"
import { BASE_URL, POSTS_LIMIT } from "../constants"
import { Post } from "../components/Post"

export function usePosts() {
	const [posts, setPosts] = useState<Post[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | undefined>()
	const [page, setPage] = useState(0)

	const abortControllerRef = useRef<AbortController | null>(null)

	useEffect(() => {
		const fetchPosts = async () => {
			abortControllerRef.current = new AbortController()

			setError(undefined)
			setIsLoading(true)
			try {
				const response = await fetch(
					`${BASE_URL}/posts?_limit=${POSTS_LIMIT}&_page=${page}`,
					{
						signal: abortControllerRef.current.signal,
					},
				)
				if (!response.ok) {
					throw new Error("can't load posts, server error")
				}
				const data = (await response.json()) as Post[]
				setPosts(data)
			} catch (e) {
				if (e.name === "AbortError") {
					console.log("aborted")
					return
				}
				setError(e.message)
			} finally {
				setIsLoading(false)
			}
		}
		fetchPosts()
		return () => {
			abortControllerRef.current?.abort()
		}
	}, [page])
	return {
		posts,
		isLoading,
		error,
		setPage,
		page,
	}
}
