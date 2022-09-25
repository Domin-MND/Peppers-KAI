export default function(server: any, opts: object, done: any) {

	server.get('/', (req: any, res: any) => {
		res.code(400).send({
			message: "В разработке",
			statusCode: 400
		});
	});
    
    done();
}