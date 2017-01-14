"use strict";

import tasker from './tasks.service';


export function index(req, res) {

    res.json(tasker.list())
}


export function create(req, res) {
    tasker.new_task(new Date(2017, 1, 9, 23, 20, 0), 'chromecast');
    res.json({status: 'ok'})
}


export function show(req, res) {
    res.json(tasker.list(1))
}

export function cancel(req, res) {
    res.json(tasker.cancel(1))
}