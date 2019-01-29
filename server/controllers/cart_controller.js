const swag = require('../models/swag')

module.exports = {
    add: (req, res, next) => {
        const {id} = req.query
        const {cart} = req.session.user;

        const index = cart.findIndex( val => val.id === id );

        if(index === -1){
            const selectSwag = val.find( val => val.id === id );

            cart.push(selectSwag)
            req.session.user.total += selectSwag.price
        }
        res.status(200).send( req.session.user )
        
    },
    delete: (req, res, next) => {
        const {id} = req.query;
        const {cart} = req.session.user;

        const identifySwag = swag.find(val => val.id === id);
        if (identifySwag) {
            const i = cart.findIndex(value => value.id === id)
            cart.splice(i,1);
        req.session.user.total -=  selectSwag.price
        }
        res.status(200).send( req.session.user)
    },
    checkout: (req, res, next) => {
        const {user} = req.session;
        user.cart = []
        user.total = 0;
        res.status(200).send(req.session.user);
    }
}