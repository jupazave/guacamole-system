"use strict";

import tasker from './tasks.service';


export function index(req, res) {
    res.json(tasker.all())
}

export function create(req, res) {
    tasker.new(req.body.title, req.body.date, req.body.type);
    res.json({status: 'ok'})
}

export function show(req, res) {
    res.json(tasker.find(req.params.id))
}

export function cancel(req, res) {
    res.json(tasker.delete(req.params.id))
}