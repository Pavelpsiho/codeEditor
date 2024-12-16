import { createServer } from 'miragejs';

export function makeServer() {
  createServer({
    routes() {
      this.post('/api/execute', (schema, request) => {
        const { language, code } = JSON.parse(request.requestBody);
        if (code.includes('error')) {
          return {
            status: 'error',
            error: `Syntax error in ${language}: an unexpected sign.`,
          };
        }
        return {
          status: 'success',
          output: `The code ran successfully: ${code}`,
        };
      });
    },
  });
}
