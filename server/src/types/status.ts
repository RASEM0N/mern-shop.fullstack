export enum STATUS_SUCCESS {
    OK = 200, // хорошо
    CREATED = 201, // создано
    ACCEPTED = 202, // чето принято
}

export enum STATUS_CLIENT_ERROR {
    BAD = 400, // плохой запрос
    UNAUTHORIZED = 401, // не авторизован
    FORBIDDEN = 403, // нет прав
}

export enum STATUS_SERVER_ERROR {
    INTERNAL_ERROR = 500, // внутренняя ошибка сервера
}
