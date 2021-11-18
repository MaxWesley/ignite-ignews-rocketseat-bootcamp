import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, nome: 'Max Wesley' },
        { id: 2, nome: 'Diego Fernandes' },
        { id: 3, nome: 'Breno Rodrigues' }
    ]

    return response.json(users);
}