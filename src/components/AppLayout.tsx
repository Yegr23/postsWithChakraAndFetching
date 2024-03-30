import {
	Box,
	Center,
	Container,
	Flex,
	Heading,
	SimpleGrid,
	Spinner,
} from "@chakra-ui/react"
import { ReactNode } from "react"

export function AppLayout({
	error,
	posts,
	pageChoose,
	isLoading,
}: {
	error: string | undefined
	posts: ReactNode
	pageChoose?: ReactNode
	isLoading: boolean
}) {
	return (
		<>
			<Box as="header" bg="blanchedalmond" mb={3}>
				<Container maxW="6xl">
					<Flex
						px={3}
						maxW="6xl"
						alignItems="center"
						minH={[15, null, 20]}
					>
						<Heading>Posts</Heading>
					</Flex>
				</Container>
			</Box>
			<Box as="main">
				<Container maxW="6xl">
					<Center>{pageChoose}</Center>
					<SimpleGrid columns={[1, null, 2, 3]} p={3} spacing={3}>
						{isLoading ? <Spinner /> : error ? error : posts}
					</SimpleGrid>
				</Container>
			</Box>
		</>
	)
}
