import _ from 'lodash'

export async function getAllEmployees(){
	const url = 'http://namegame.willowtreemobile.com:2000/'
	const data = await fetch(url)
	return data.json()
}

export function selectNumEmployees(employees, num = 5){
	return _.sampleSize(employees, num)
}