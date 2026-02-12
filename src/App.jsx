import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocsLayout from './layouts/DocsLayout';
import Introduction from './pages/Introduction';
import Authentication from './pages/Authentication';
import SendingEmails from './pages/SendingEmails';
import ReadingEmails from './pages/ReadingEmails';
import ApiReference from './pages/ApiReference';
import Database from './pages/Database';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocsLayout />}>
          <Route index element={<Introduction />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="send" element={<SendingEmails />} />
          <Route path="read" element={<ReadingEmails />} />
          <Route path="api" element={<ApiReference />} />
          <Route path="database" element={<Database />} />
          <Route path="*" element={<Introduction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
