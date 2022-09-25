export const AllTypes = {
	Mines: 'Mines',
	Number: 'Number',
	Empty: 'Empty',
}

const createMapItem = (type, value) => {
	return {
		type,
		value,
	}
}

const randomNumNotInArr = (arr, max, min) => {
	const curNum = Math.floor(Math.random() * (max - min)) + min
	if (arr.includes(curNum)) {
		return randomNumNotInArr(arr, max, min)
	}

	return curNum
}

const randomArray = (len, max, min) => {
	const arr = []
	for (let i = 0; i < len; i++) {
		const curNum = randomNumNotInArr(arr, max, min)
		arr.push(curNum)
	}
	return arr.sort((a, b) => a - b)
}

export const createMap = (rows, cols, minesCount) => {
	const map = []
	const targetMinesIndex = randomArray(minesCount, rows * cols, 0)
	let curRandomNum = targetMinesIndex.shift()
	for (let i = 0; i < rows; i++) {
		map[i] = []
		const curRowMinesCount = Math.floor(Math.random() * cols)
		for (let j = 0; j < cols; j++) {
			const curIndex = i * 10 + j
			if (curIndex === curRandomNum) {
				map[i][j] = createMapItem(AllTypes.Mines, '💣')
				curRandomNum = targetMinesIndex.shift()
			} else {
				map[i][j] = createMapItem(AllTypes.Empty, '')
			}
		}
	}
	return map
}
