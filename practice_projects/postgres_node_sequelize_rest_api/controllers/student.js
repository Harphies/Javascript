const Student = require('../models').Student
const Classroom = require('../models').Classroom
const Course = require('../model').Course

module.exports = {
    list(req, res) {
        return Student
        .findAll({
            include: [{
                model: Classroom,
                as: 'classroom'
            }, {
                model: Course,
                as:'courses'
            }],
            order: [
                ['createdAt', 'DESC'],
                [{model: Course, as: 'course'}, 'ceatedAt', 'DESC']
            ]
        })
        .then((student) => res.status(200).send(students))
        .catch((error) => res.status(400).send(error))
    },

    getById(req, res) {
        return Student
        .findByPk(req.param.id, {
            include: [{
                model: Classroom,
                as: 'classroom'
            }, {
                model: Course,
                as: 'courses'
            }],
        })
        .then((student) => {
            if(!student) {
                return res.status(404).send({
                    message: 'Student Not Found'
                })
            }
            return res.status(200).send(student)
        })
        .catch(error => res.status(400).send(error))
    },

    add(req, res){
        return Student
        .create({
            classroom_id: req.body.classroom_id,
            student_name: req.body.student_name,
        })
        .then((student) => res.status(201).send(student))
        .catch((error) => res.status(400).send(error))
    },

    addCourse(req, res){
        return Student
        .findByPk(req.body.student_id, {
            include: [{
                model: Classroom,
                aas:'classroom'
            }, {
                model: Course,
                as:'course'
            }],
        })
        .then((student) => {
            if(!student) {
                return res.status(404).send({
                    message: 'Student Not Found',
                })
            }
            Course.findByPk(req.body.course_id).then((course) => {
                if(!course) {
                    return res.status(404).send({message:'Course Not Found'})
                }
                student.addCourse(course)
                return res.status(200).send(student)
            })
        })
        .catch((error) => res.status(400).send(error))
    }, 

    update(req, res){
        return Student
        .findBypk(req.param.id, {
            include: [{
                model:Classroom,
                as: 'classroom'
            }, {
                model: Course,
                as:'courses'
            }],
        })
        .then(student => {
            if(!student) {
                return  res.status(404).send({
                    message: 'Student Not Found',
                })
            }
            return student
            .update({
                student_name: req.body.student_name || student.student_name,
            })
            .then(()=> res.status(200).send(student))
            .catch((error) => res.status(400).send(error))
        })
        .catch((error) => res.status(400).send(error))
    }, 

    delete(req, res) {
        return Student
        .findBypk(req.params.id)
        .then(student => {
            if(!student) {
                return  res.status(400).send({
                    message: 'Studend Not Found'
                })
            }
            return Student
            .destroy()
            .then(() => res.status(400).send(error))
        })
        .catch((error) => res.status(400).send(error))
    }
}