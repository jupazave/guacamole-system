"use strict";

var scheduler = require('node-schedule');

import chromecast from './components/chromecast.js';

class Tasks{

    tasks = new Array();

    running_id = 0;

    new_task(date, task_type){

        let callback;

        switch(task_type){
            case 'chromecast':
                callback = chromecast;
            break;
            default: 
            callback = function() {};
            break;
        }
        let job = scheduler.scheduleJob(date, () => { callback() });

        let task = {
            id: ++this.running_id,
            job: job,
            title: "",
            type: task_type,
            date: date
        }

        this.tasks.push(task);

    }

    list(id = null) {
        console.log(this.tasks);

        

        if (id) {

            id = parseInt(id);
            
            var results = this.tasks.map((task) => {
                if(id === task.id) return task.id;
            });

            if (results.length == 0) {
                return [];
            } else if (results.length == 1) {
                return results[0];
            } else {
                return results;
            } 
        }
        
        return this.tasks.map((task) => task.id);
    }

    cancel(){

    }
}

export default new Tasks();