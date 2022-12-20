// librarys export
const express = require('express');
const bcript = require('bcrypt');
const {expressjwt: jwt} = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

// my modelDB export
const User = require('./user.model'); 

//  middleware to validate JWT
const validateJwt = expressjwt({SECRET: process.env.SECRET, algorithms: ['HS256']});

// must use "_" before "id or anything arguments" to be able to use the short form to create objects 
const signToken = _id => {_id, process.env.SECRET};

const findAndAssingUser = async (req, res, next ) => {
    try {
        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(401).end;
        }
        // if found user._id, replace req.user for user without encrypt 
        req.user = user;
        next();

    }
    catch(e){
        next(e);
    }
}

const isAuthenticated =  express.Router().use(validateJwt, findAndAssingUser);

// controller
const Auth = {
    login: async (req, res) => {
        // take out the body from req because be must have to take the email from the req
        const {body} = req;
        try{
            const user= await User.findOne({ email: body.email});
            if(!user){
                res.status(401).send('User and/or password invalidated');
            }
            else{
                const ismatch = await bcript.compare(body.password, user.password);
                if(ismatch){
                    const signed = signToken(user._id);
                    res.status(200).send(signed);
                }
                else{
                    res.status(401).send('User and/or password invalidated');
                }
            }
        }
        //catch error and sended error message
        catch(e){
            res.send(e.message)
        
        }
    }
    ,
    register: async (req, res) => {
        const {body} = req;
        try{
            const isUser = await User.findOne({email: body.email});
            if(isUser){
                res.send('This email already exists');
            }
            else{
                const salt = await bcript.genSalt();
                // will have make a hash from our password
                const hashed = await bcript.hash(body.password, salt);
                const user = await User.create({email: body.email, password: hashed, salt });

                const signed = signToken(user._id);
                res.status(200).send(signed);
            }
        }
        catch(err){
            res.status(500).send(err.message);
        }
    },
}

// exports function Auth and isAuthenticated
module.exports = {Auth, isAuthenticated}   