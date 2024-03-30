import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { memo } from "react"

export type Post = { id: number; title: string; body: string }

export const PostComponent = memo(function PostComponent({
	post,
}: {
	post: Post
}) {
	return (
		<Flex
			flexDir="column"
			gap={2}
			border="1px"
			borderColor="burlywood"
			borderRadius={3}
			p={3}
		>
			<Heading size="lg">{post.title}</Heading>
			<Text noOfLines={3}>{post.body}</Text>
			<Button alignSelf="start">Read more</Button>
		</Flex>
	)
})
