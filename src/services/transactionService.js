const STORAGE_PATH = 'transactions'

const get = () => {
	return JSON.parse(localStorage.getItem(STORAGE_PATH)) || []
}

const set = (list = []) => {
	localStorage.setItem(STORAGE_PATH, JSON.stringify(list))
}

const getAll = () => {
    return get()
}

const save = (data) => {
	const list = getAll();
	list.unshift(data)
	set(list)
}

export default {
	getAll,
	save
}
