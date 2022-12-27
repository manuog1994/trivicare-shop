const middleware = {}

middleware['authentication'] = require('../middleware/authentication.js')
middleware['authentication'] = middleware['authentication'].default || middleware['authentication']

middleware['role'] = require('../middleware/role.js')
middleware['role'] = middleware['role'].default || middleware['role']

export default middleware
