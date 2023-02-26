import {server} from '../../'

import CreateUser from './create'

server.post('/user/create', CreateUser)