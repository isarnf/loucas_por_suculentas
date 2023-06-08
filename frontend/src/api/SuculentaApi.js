const baseUrl = 'http://localhost:12345';


export const findAllSuculentas = async (setData, uri) => {
	await fetch(`${baseUrl}/${uri}`, { method: 'GET' })
		.then(async response => {
			console.log(response);
			const data = (await response.json());
			setData(data);
		}).catch(err => {
			console.log(err);
		});
};

export const findOneSuculenta = async (setData, id) => {
	fetch(`${baseUrl}/colecao/${id}`, { method: 'GET' })
		.then(async response => {
			console.log(response);
			const data = (await response.json());
			setData(data);
		}).catch(err => {
			console.log(err);
		});
};

export const createSuculenta = async (data) => {
	fetch(`${baseUrl}/colecao/cadastrar`,
		{
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		}).then(response => {
		console.log(response);
	}).catch(err => {
		console.log(err);
	});
};

export const updateSuculenta = async (id, data) => {
	fetch(`${baseUrl}/'colecao'/editar/${id}`,
		{
			method: 'PATCH',
			body: JSON.stringify(data),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		}).then(response => {
		console.log(response);
	}).catch(err => {
		console.log(err);
	});
};

export const deleteSuculenta = async (id) => {
	fetch(`${baseUrl}/colecao/deletar/${id}`,
		{
			method: 'DELETE',
		}).then(response => {
		console.log(response);
	}).catch(err => {
		console.log(err);
	});
};

