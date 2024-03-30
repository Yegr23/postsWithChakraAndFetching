import { AppLayout } from "./components/AppLayout"
import { PostComponent } from "./components/Post"
import { PageChooser } from "./components/PageChooser"
import { usePosts } from "./models/usePosts"

export function App() {
	const { error, isLoading, page, posts, setPage } = usePosts()
	return (
		<AppLayout
			isLoading={isLoading}
			error={error}
			pageChoose={<PageChooser page={page} setPage={setPage} />}
			posts={posts.map((post) => (
				<PostComponent key={post.id} post={post} />
			))}
		/>
	)
}
