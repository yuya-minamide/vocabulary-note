import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentQuestionIndex: 0,
	selectedAnswers: [],
};

const examSlice = createSlice({
	name: "exam",
	initialState,
	reducers: {
		goToNextQuestion: (state) => {
			state.currentQuestionIndex++;
		},
		selectAnswer: (state, action) => {
			const { questionIndex, answer } = action.payload;
			state.selectedAnswers[questionIndex] = answer;
		},
		clearAll: (state) => {
			state.currentQuestionIndex = 0;
			state.selectedAnswers = [];
		},
	},
});

export const { goToNextQuestion, selectAnswer, clearAll } = examSlice.actions;
export default examSlice.reducer;
