import http from "http";
import { TodoListService } from "./todolist-service.mjs";

const service = new TodoListService();
const server = http.createServer((request, response) => {

    response.setHeader("content-type", "application/json")

    if (request.method === "GET") {
        service.getTodoList(request, response);
    }

    if (request.method === "POST") {
        service.createTodo(request, response);
    }

    if (request.method === "PUT") {
        service.updateTodo(request, response);
    }

    if (request.method === "DELETE") {
        service.deleteTodo(request, response);
    }
});

server.listen(3000);