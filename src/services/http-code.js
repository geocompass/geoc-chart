const statusCode = code => {
  const codes = {
    202: '202 Accepted',
    204: '204 No Content',
    400: '400 Bad Request',
    401: '401 Unauthorized',
    403: '403 Forbidden',
    404: '404 Not Found',
    408: '408 Request Time-out',
    422: '422 Unprocessable Entity',
    429: '429 Too Many Requests',
    500: '500 Internal Server Error',
    502: '502 Bad Gateway'
  }
  return codes[code]
}

export default statusCode
