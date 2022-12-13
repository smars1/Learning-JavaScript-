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
