const middleware = {}

middleware['role'] = require('../middleware/role.js')
middleware['role'] = middleware['role'].default || middleware['role']

middleware['token'] = require('../middleware/token.js')
middleware['token'] = middleware['token'].default || middleware['token']

export default middleware
