import Session from '../models/session.model.js';
import { errorHandler } from '../utils/error.js';

// Create a new session
export const createSession = async (req, res, next) => {
  if (!req.body.name || !req.body.title || !req.body.room_no || !req.body.date || !req.body.time) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }

  const newSession = new Session({
    ...req.body,
  });

  try {
    const savedSession = await newSession.save();
    res.status(201).json(savedSession);
  } catch (error) {
    next(error);
  }
};

// Get sessions with optional filters
export const getSessions = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;

    const sessions = await Session.find({
      ...(req.query.title && { title: req.query.title }),
      ...(req.query.room_no && { room_no: req.query.room_no }),
      ...(req.query.date && { date: new Date(req.query.date) }),
    })
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalSessions = await Session.countDocuments();

    res.status(200).json({
      sessions,
      totalSessions,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a session by ID
export const deleteSession = async (req, res, next) => {
  try {
    await Session.findByIdAndDelete(req.params.sessionId);
    res.status(200).json('The session has been deleted');
  } catch (error) {
    next(error);
  }
};

// Update a session by ID
export const updateSession = async (req, res, next) => {
  try {
    const updatedSession = await Session.findByIdAndUpdate(
      req.params.sessionId,
      {
        $set: {
          name: req.body.name,
          title: req.body.title,
          room_no: req.body.room_no,
          date: req.body.date,
          time: req.body.time,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedSession);
  } catch (error) {
    next(error);
  }
};
