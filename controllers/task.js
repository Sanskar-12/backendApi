import Task from "../models/task.js";
import Errorhandler from "../utils/errorclass.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    await Task.create({
      title: title,
      description: description,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "Task Created SuccessFully",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTask = async (req, res, next) => {
  try {
    const userid = req.user._id;
    const tasks = await Task.find({ user: userid });

    res.status(201).json({
      success: true,
      tasks: tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (!task) {
      return next(new Errorhandler("Task not Found", 404));
    }
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(201).json({
      success: true,
      message: "Task Updated",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    let task = await Task.findById(id);
    if (!task) {
      return next(new Errorhandler("Task not Found", 404));
    }
    await task.deleteOne();
    res.status(201).json({
      success: true,
      message: "Task Deleted",
    });
  } catch (error) {
    next(error);
  }
};
