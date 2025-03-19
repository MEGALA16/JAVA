const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json()); // Replaces body-parser
app.use(cors());
mongoose.connect('mongodb://localhost:27017/quiz-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Database connection error:', err));

const QuizSchema = new mongoose.Schema({
    question: String,
    options: [String],
    answer: String,
});

const Quiz = mongoose.model('Quiz', QuizSchema);

app.post('/api/quizzes', async (req, res) => {
    try {
        const quiz = new Quiz(req.body);
        await quiz.save();
        res.status(201).send(quiz);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.get('/api/quizzes', async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).send(quizzes);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


