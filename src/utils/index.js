export const AllTypes = {
	Mines: 'Mines',
	Number: 'Number',
	Empty: 'Empty',
}

// 生成 map 的一项具体的数据结构
const createMapItem = (type, value) => {
	return {
		type,
		value,
	}
}

// 生成一个不在 arr 数组中，大小在 min - max 之间的数字
const randomNumNotInArr = (arr, max, min) => {
	const curNum = Math.floor(Math.random() * (max - min)) + min // 生成一个大小在 min - max 之间的数字
	if (arr.includes(curNum)) {
		// 如果已经存在于数组中，便递归再次生成
		return randomNumNotInArr(arr, max, min)
	}

	return curNum
}

// 生成一个每项数字大小在 min - max 之间，长度为len的数组
const randomArraySorted = (len, max, min) => {
	const arr = []
	for (let i = 0; i < len; i++) {
		const curNum = randomNumNotInArr(arr, max, min)
		arr.push(curNum)
	}
	return arr.sort((a, b) => a - b) // 排序方便使用
}

export const createMap = (rows, cols, minesCount) => {
	const map = [] // 保存生成 map 的数组

	const targetMinesIndex = randomArraySorted(minesCount, rows * cols, 0) // 生成 minesCount 个大小在 0 ~ rows * cols 之间的数字
	let curRandomIndex = targetMinesIndex.shift() // 取出第一项作为首个要放地雷的 index

	for (let i = 0; i < rows; i++) {
		map[i] = []
		for (let j = 0; j < cols; j++) {
			const curIndex = i * 10 + j // 当前格子 index
			if (curIndex === curRandomIndex) {
				// 如果和当前要放地雷的 index 相等则生成地雷
				map[i][j] = createMapItem(AllTypes.Mines, '💣')
				curRandomIndex = targetMinesIndex.shift()
			} else {
				// 不相等就先置为空格子
				map[i][j] = createMapItem(AllTypes.Empty, '')
			}
		}
	}

	return map
}
