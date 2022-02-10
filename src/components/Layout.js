import { BrowserRouter, Routes, Route } from 'react-router-dom';
import YearSelect from './YearSelect';
import YearContent from './YearContent';

const Layout = () => {
  return (
    <main className="sm:w-96 sm:m-auto sm:py-16 sm:h-screen flex flex-col">
      <div className='w-full sm:h-screen sm:overflow-y-auto sm:rounded-xl no-scrollbar'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<YearSelect />} />
            <Route path="/:year" element={<YearContent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
};

export default Layout;
