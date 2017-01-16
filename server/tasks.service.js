"use strict";

var scheduler = require('node-schedule');

import chromecast from './components/chromecast.js';

class Tasks{

    tasks = new Array();

    running_id = 0;

    new(title, date, type){

        let callback;

        if (!title || !date) {
            return false;
        }

        switch(type){
            case 'chromecast':
                callback = chromecast;
            break;
            default: 
                callback = function() {};
            break;
        }
        
        let job = scheduler.scheduleJob(new Date(date), () => { callback() });

        let task = {
            id: ++this.running_id,
            job: job,
            title: type,
            type: type,
            date: new Date(date)
        }

        console.log(task.job);

        this.tasks.push(task);

    }

    all() {
        
        return this.tasks.map(task => {
            return {
                id: task.id, 
                type: task.type, 
                title: task.title,
                date: task.date
            }
        });
    }

    find(id) {
        return this.tasks.find((task) => (task.id === id))
    }

    delete(id){

        let index = this.tasks.indexOf(this.tasks.find((task) => (task.id === id)));
        this.tasks[index].job.cancel();
        delete this.tasks[index];

    }

}

export default new Tasks();