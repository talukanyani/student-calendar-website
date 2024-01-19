import { Route, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/home/Home';
import AccountDeletionPage from './pages/help/AccountDeletion';
import TermsPage from './pages/legal/Terms';
import PrivacyPage from './pages/legal/Privacy';
import PageNotFound from './pages/error/PageNotFound';

export const routes = createRoutesFromElements(
    <Route path='/'>
        <Route index element={<HomePage />} />
        <Route
            path='help/account-deletion'
            element={<AccountDeletionPage />}
        />
        <Route path='terms' element={<TermsPage />} />
        <Route path='privacy' element={<PrivacyPage />} />
        <Route path='*' element={<PageNotFound />} />
    </Route>
)
