import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import { HomePage, PeoplePage, CVCarlosFranco, CongressPaperPage, PapersPage } from './components/pages';
import './utils/languages/i18n';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/laboratorio_sistemas' element={ <HomePage/> } />
        <Route path='/papers' element={ <PapersPage/> } />
        <Route path='/people' element={ <PeoplePage/> } />
        <Route path='/conference_papers' element={ <CongressPaperPage/> } />
        <Route path='/carlos_franco' element={ <CVCarlosFranco/> } />
        <Route path='*' element={ <Navigate to='/laboratorio_sistemas' replace /> } />
      </Routes>
    </BrowserRouter>
  )
}
