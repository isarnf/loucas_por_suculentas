import moment from 'moment';
const baseUrl = 'http://localhost:12345';

export const logar = async(data) => {
	return fetch(`${baseUrl}/login`,
		{
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		}).then(async response => {
		const res = await response.json();
		return res;
	}).catch(err => {
		console.log(err);
	});
};

export const findAllSuculentas = async (setData, uri, token) => {
	await fetch(`${baseUrl}/${uri}`, { 
		method: 'GET',
		headers: {
			authorization: `Bearer ${token}`,
		},
	}).then(async response => {
		console.log(response);
		const data = (await response.json());
		setData(data);
	}).catch(err => {
		console.log(err);
	});
};

export const findOneSuculenta = async (setData, id, token) => {
	await fetch(`${baseUrl}/colecao/${id}`, { 
		method: 'GET',
		authorization: `Bearer ${token}`
	})
		.then(async response => {
			console.log(response);
			const data = (await response.json());
			let suculenta = data;
			suculenta.data_aquisicao = moment(suculenta.data_aquisicao).format('YYYY-MM-DD');
			setData(suculenta);
		}).catch(err => {
			console.log(err);
		});
};

export const createSuculenta = async (data, token) => {
	fetch(`${baseUrl}/colecao/cadastrar`,
		{
			method: 'POST',
			authorization: `Bearer ${token}`,
			body: JSON.stringify(data),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		}).then(response => {
		console.log(response);
	}).catch(err => {
		console.log(err);
	});
};

export const updateSuculenta = async (id, data, token) => {
	fetch(`${baseUrl}/colecao/editar/${id}`,
		{
			method: 'PATCH',
			authorization: `Bearer ${token}`,
			body: JSON.stringify(data),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		}).then(response => {
		console.log(response);
	}).catch(err => {
		console.log(err);
	});
};

export const deleteSuculenta = async (id, token) => {
	fetch(`${baseUrl}/colecao/deletar/${id}`,
		{
			method: 'DELETE',
			authorization: `Bearer ${token}`,
		}).then(response => {
		console.log(response);
	}).catch(err => {
		console.log(err);
	});
};

export const destruirToken = async() => {
	return fetch(`${baseUrl}/logout`,
		{
			method: 'POST'
		}).then(async response => {
		const res = await response.json();
		return res;
	}).catch(err => {
		console.log(err);
	});
};



