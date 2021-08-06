const express = require('express');
const {
  GetNotes,
  CreateNote,
  GetNoteById,
  UpdateNote,
  DeleteNote,
} = require('../controllers/noteController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(protect, GetNotes);
router.route('/create').post(protect, CreateNote);
router
  .route('/:id')
  .get(GetNoteById)
  .put(protect, UpdateNote)
  .delete(protect, DeleteNote);

module.exports = router;
