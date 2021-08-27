import { rest } from 'msw'

export default [
    rest.get('/message', (req, res, ctx) => {
        return res(
            ctx.json({
                message: 'mocked'
            })
        )
    }),
    rest.get('/hand-cards', (req, res, ctx) => {
        return res(
            ctx.json({
                hand: [7, 7, 3, 12]
            })
        )
    })
]