import Note from '../models/Note.js';

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // ORDER BY key DESC
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error in getAllNotes controller', { error });
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const getNote = async (req, res) => {
  try {
    const { id } = req?.params;

    if (!id) {
      return res.status(404).json({ message: 'ID was not provided' });
    }

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({
      message: 'Note was found!',
      note,
    });
  } catch (error) {
    console.error('Error in getAllNotes controller', { error });
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const createNote = async (req, res) => {
  try {
    const { content, title } = req.body;
    const note = new Note({ content, title });

    const newest = await note.save();

    res.status(201).json({
      message: 'Note created successfully',
      newest,
    });
  } catch (error) {
    console.error('Error in createNote controller', { error });
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const updateNote = async (req, res) => {
  try {
    // si en el request un valor no se pasó, ese no se va a actualizar, no falla
    const { content, title } = req.body;
    // es req.params.id porque la ruta fue definida como /:id, deben concordar
    const updated = await Note.findByIdAndUpdate(
      req.params.id,
      {
        content,
        title,
      },
      {
        new: true,
      }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({
      message: 'Note updated successfully',
      updated,
    });
  } catch (error) {
    console.error('Error in updateNote controller', { error });
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req?.params;

    if (!id) {
      return res.status(404).json({ message: 'ID was not provided' });
    }

    const deleted = await Note.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Invalid ID' });
    }

    // if no status is defined, 200 will be by default
    res.json({
      message: 'Note deleted succesfully',
      deleted,
    });
  } catch (error) {
    console.error('Error in deleteNote controller', { error });
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
  /*   res.status(200).json({
    message: 'Note deleted successfully',
  }); */
};

export { getAllNotes, getNote, createNote, updateNote, deleteNote };
