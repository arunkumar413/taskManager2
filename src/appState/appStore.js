import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './tasksFilterSlice'

export default configureStore({
  reducer: counterReducer
})