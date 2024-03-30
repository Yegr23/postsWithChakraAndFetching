import { Button, Flex, Input } from "@chakra-ui/react"
import { memo } from "react"
import { usePageChoose } from "../models/usePageChoose"

export const PageChooser = memo(function PageChose({
	page,
	setPage,
}: {
	page: number
	setPage: React.Dispatch<React.SetStateAction<number>>
}) {
	const {
		goToNextPage,
		goToPrevPage,
		handleOnChangeInput,
		handleOnKeyDownInput,
		inputValue,
	} = usePageChoose(page, setPage)
	return (
		<Flex gap={2}>
			<Button onClick={goToPrevPage}>prev</Button>
			<Input
				w="60px"
				value={inputValue}
				onChange={handleOnChangeInput}
				onKeyDown={handleOnKeyDownInput}
			/>
			<Button onClick={goToNextPage}>next</Button>
		</Flex>
	)
})
