function handle_GET_request(response){
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
	response.end('Accion GET fue solicitada');
}

function handle_POST_request(response){
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
	response.end('Accion POST fue solicitada');
}

function handle_PUT_request(response){
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
	response.end('Accion PUT fue solicitada');
}

function handle_HEAD_request(response){
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
	response.end('Accion HEAD fue solicitada');
}

function handle_DELETE_request(response){
	response.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
	response.end('Accion DELETE fue solicitada');
}

function handle_bad_request(response){
	response.writeHead(400, {
		'Content-Type' : 'text/plain'
	});
	response.end('Solicitud incorrecta');
}

exports.handle_request = function (request, response) {
	switch(request.method){
		case 'GET':
			handle_GET_request(response);
			break;
		case 'POST':
			handle_POST_request(response);
			break;
		case 'PUT':
			handle_PUT_request(response);
			break;
		case 'DELETE':
			handle_DELETE_request(response);
			break;
		case 'HEAD':
			handle_HEAD_request(response);
			break;
		default:
			handle_bad_request(response);
			break;
	}
	console.log('Procesamiento peticion por http-module finalizado');
};