"use strict";

import tasker from './tasks.service';


export function index(req, res) {

    res.json(tasker.list())
}


export function create(req, res) {
    tasker.new_task(req.params.date, req.params.item);
    res.json({status: 'ok'})
}


export function show(req, res) {
    res.json(tasker.list(req.params.id))
}

export function cancel(req, res) {
    res.json(tasker.cancel(req.params.id))
}