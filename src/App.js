import { HashRouter as Router } from 'react-router-dom'
import RouterView from './Router'
import GlobalStyle from './globalStyles'
import { useTitle } from './useHooks'
function App() {
  const path = window.location.hash.split('/')[1]
  const title = {
    week1: 'The F2E 活動網站設計',
    week2: '今晚，我想來點點簽',
    week3: 'Scrum 新手村',
  }
  useTitle(title[path])
  return (
    <Router hashType="slash">
      <GlobalStyle />
      <RouterView />
    </Router>
  )
}

export default App
