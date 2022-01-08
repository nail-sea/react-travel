
export interface LanguageState {
  language: 'zh' | 'en',
  languageList: { name: string, code: string }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ]
}

export default (state = defaultState, action) => {
  if(action.type === 'language_change') {
    const newState = { ...state, language: action.key }
    return newState
  }
  return state;
}