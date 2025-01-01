import { BrowserRouter, Routes, Route } from 'react-router';

import { HomePage, PeoplePage, CVCarlosFranco, CongressArticlePage } from './components/pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/people' element={ <PeoplePage/> } />
        <Route path='/congress_articles' element={ <CongressArticlePage/> } />
        <Route path='/carlos_franco' element={ <CVCarlosFranco/> } />
      </Routes>
    </BrowserRouter>
  )
}
