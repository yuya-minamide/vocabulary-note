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
	},
});

export const { goToNextQuestion, selectAnswer } = examSlice.actions;
export default examSlice.reducer;
