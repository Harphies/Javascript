const Classroom = require('../models').Classroom
const Student = require('../models').Student

module.exports = {
    list(req, res){
        return Classroom
        .findAll({
            include:[{
                model: Student,
                as: 'students'
            }],
            order: [
                ['createdAt', 'DESC'],
                [{model:Student, as: 'student'}, 'createdAt', 'DESC']
            ],
        })
        .then((classrooms) => res.status(200).send(classrooms))
        .catch((err) => {res.status(400).send(err)})
    },

    getById(req, res){
        return Classroom
        .findByPk(req.params.id, {
            include: [{
                model: Student,
                as: 'students'
            }],
        })
        .then((classroom) => {
            if (!classroom) {
                return res.status(404).send({message:'Classroom not found'})
            }
            return res.status(200).send(classroom)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send(err)
        })
    },

    add(req, res){
        return Classroom
        .create({
            class_name: req.body.class_name,
        })
        .then((classroom) => res.status(201).send(classroom))
        .catch(err => res.status(400).send(err))
    },

    addWithStudents(req, res){
        return Classroom
        .create({
            class_name: req.body.class_name,
            students: req.body.students,
        }, {
            include: [{
                model: Student,
                as: 'students'
            }]
        })
        .then((classroom) => res.status(201).send(classroom))
        .catch((err) => res.status(400).send(err))
    },

    update(req, res) {
        return Classroom
        .findByPk(req.params.id, {
           include: [{
               model: Student,
               as: 'students'
           }],
        })
        .then(classroom => {
            if(!classroom){
                return res.status(400).send({message: 'Classroom Not Found'})
            }
            return classroom
            .update({ 
                class_name: req.body.class_name || classroom.class_name,
            })
            .then(() => res.status(200).send(classroom))
            .catch((err) => res.status(400).send(err))
        })
        .catch((err) => res.status(400).send(err))
    },

    delete(req, res){
        return Classroom
        .findByPk(req.params.id)
        .then(classroom => {
            if(!classroom) {
                return res.status(400).send({message: 'Classroom Not Found'})
            }
            return classroom
            .destroy()
            .then(() => res.status(204).send())
            .catch((err) => res.status(400).send(err))
        })
        .catch((err) => res.status(400).send(err))
    }
}