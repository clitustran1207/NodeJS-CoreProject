const Tasks = require('../models/Tasks');

module.exports = {
    
    insert: (req, res) => {
        const task_name = req.body.name;
        const task_level = req.body.level;
    
        const newTask = new Tasks(
            {
                name: task_name,
                level: task_level
            }
        );
        newTask.save(err => {
            if(err) throw err;
            console.log("Insert successfully");
        });
        res.send("Insert Done");
    },
    find: (req, res) => {
        Tasks.find({
            name: 'Task 2'
        }, (err, docs) => {
            if(err) throw err;
            console.log(docs);
        });
        res.send("Find Done");
    }, 
    findByIdAndRemove: (req, res) => {
        Tasks.findByIdAndRemove('5bc59dc1540ed50110c3bed1', (err, docs) => {
            if(err) throw err;
            console.log(docs);
            //req.session.docs = docs;
        });
        res.send("Remove Done");
        // res.setHeader('Content-Type', 'text/html')
        // res.write('<p>Session: ' + req.session.docs + '</p>')
        // res.write('<p>Expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        // res.end();
    }
}