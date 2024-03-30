import { useState } from "react"

export const usePageChoose = (
	page: number,
	setPage: React.Dispatch<React.SetStateAction<number>>,
) => {
	const [inputValue, setInputValue] = useState(page)

	const goToPrevPage = () => {
		setPage((prev) => {
			setInputValue(Math.max(prev - 1, 1))
			return Math.max(prev - 1, 1)
		})
	}
	const goToNextPage = () => {
		setPage((prev) => {
			setInputValue(prev + 1)
			return prev + 1
		})
	}
	const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const num = Number(e.target.value)
		if (isNaN(num) || num < 0) return
		setInputValue(num)
	}
	const handleOnKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.keyCode === 13) {
			if (inputValue === 0) {
				setInputValue((prev) => {
					setPage(prev + 1)
					return prev + 1
				})
			} else {
				setPage(inputValue)
			}
		}
	}

	return {
		inputValue,
		goToPrevPage,
		goToNextPage,
		handleOnChangeInput,
		handleOnKeyDownInput,
	}
}
