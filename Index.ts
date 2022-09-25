// Fastify
// Фастифай
import fastify, { FastifyInstance } from 'fastify';
import fastifyNext from '@fastify/nextjs';

// Utilitioes
// Утилиты
import handle from './Webserver/Utilities/RouteHandler';

// Configs
// Конфиги
import fastifyConfig from './Webserver/Configs/General/Fastify.json';
import nextConfig from './Webserver/Configs/General/Next.json';
import websiteConfig from './Webserver/Configs/General/Website.json';


const server: FastifyInstance = fastify(fastifyConfig);

server.register(handle)

server
    .register(fastifyNext, nextConfig)
    .after(() => {
        server.next('/*');
    });

server.listen(websiteConfig, (err: any) => {
    if (err) {
        server.log.error(err);
    }
});