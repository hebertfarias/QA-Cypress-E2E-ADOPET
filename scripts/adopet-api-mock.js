const http = require("node:http");

const profileId = "d6c3d667-257e-415c-b294-da2b47d29ae2";

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json; charset=utf-8");

  if (request.method === "GET" && request.url === "/health") {
    response.writeHead(200);
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }

  if (request.method === "GET" && request.url === `/adotante/perfil/${profileId}`) {
    response.writeHead(200);
    response.end(JSON.stringify({ perfil: { nome: "Ana Maria" } }));
    return;
  }

  if (request.method === "GET" && request.url === `/mensagem/${profileId}`) {
    response.writeHead(200);
    response.end(JSON.stringify({ msg: "Mock de mensagens disponível para testes automatizados." }));
    return;
  }

  response.writeHead(404);
  response.end(JSON.stringify({ message: "Endpoint não encontrado no mock de testes." }));
});

const port = Number(process.env.PORT || 4177);
server.listen(port, "127.0.0.1", () => {
  console.log(`Adopet API mock listening on http://127.0.0.1:${port}`);
});
