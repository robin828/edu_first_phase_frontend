import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './slice/loginSlice';
import { teacherLoginSlice } from './slice/teacherLoginSlice';
// import { studentDataSlice } from './slice/studentDataSlice';
// import { teacherDataSlice } from './slice/teacherDataSlice';
import { announcementSlice } from './slice/announcementSlice';
import { questionSlice } from './slice/questionSlice';
import { resultSlice } from './slice/resultSlice';

const store = configureStore({
    reducer: {
        userLogin: loginSlice.reducer,
        teacherLogin: teacherLoginSlice.reducer,
        // studentData: studentDataSlice.reducer,
        // teacherData: teacherDataSlice.reducer,
        announcement: announcementSlice.reducer,
        questions: questionSlice.reducer,
        resultQuestions: resultSlice.reducer,

    },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;
