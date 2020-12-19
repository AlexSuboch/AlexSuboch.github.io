import { createStore } from 'redux'
import { dataReducer } from './reducer'
import { devTools } from './devTools'

export const store = createStore(dataReducer, devTools)