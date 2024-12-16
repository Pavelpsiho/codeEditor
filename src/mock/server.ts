import { createServer, Model } from 'miragejs';
import { executeCode } from './handlers.ts';

export function makeServer() {
  createServer({
    routes() {
      this.namespace = 'api';

      this.post('/execute', (schema, request) => {
        const requestBody = JSON.parse(request.requestBody);
        return executeCode(requestBody);
      });
    },
  });
}