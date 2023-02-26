import { FastifyReply, FastifyRequest } from 'fastify'
import {server} from '../../'
import Stripe from 'stripe'

server.post('/payment/checkout', async (req: FastifyRequest, rep: FastifyReply) => {
    let stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2022-11-15'
    })


    let session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: '',
                quantity: 1
            }
        ],
        success_url: `${req.headers.origin}/payment/success`,
        cancel_url: `${req.headers.origin}/payment/cancel`
    })

    rep.redirect(303, session.url!)


})