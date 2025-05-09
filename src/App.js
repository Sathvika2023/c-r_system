// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import FloatingNews from './components/FloatingNews';
import HomeContent from './components/HomeContent';
import CSEClubsPage from './components/CSEClubsPage';
import Admin from './components/Admin';
import Academics from './components/Academics';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Research from './components/Research';
import Library from './components/Library';

const AppContent = () => {
  const location = useLocation();

  // return (
  //   // <Router>
  //     <NavBar />
  //     {location.pathname === '/' ? (
  //       <div className="flex flex-col items-center space-y-8 p-4">
  //         <div className="w-1/2">
  //           <FloatingNews />
  //         </div>
  //         <div className="w-full max-w-6xl">
  //           <HomeContent />
  //         </div>
  //       </div>
  //     ) : (
  //       <Routes>
  //         <Route path="/admin" element={<Admin />} />
  //         <Route path="/academics" element={<Academics />} />
  //         <Route path="/faculty" element={<Faculty />} />
  //         <Route path="/students" element={<Students />} />
  //         <Route path="/research" element={<Research />} />
  //         <Route path="/library" element={<Library />} />
  //         <Route path="/CSEClubsPage" element={<CSEClubsPage/>}/>
  //       </Routes>
  //     )}
  //     {location.pathname !== '/' && (
  //       <Routes>
  //         {/* <Route path="/" element={<HomeContent />} /> */}
  //       {/* </Routes>
  //       <Routes> */}
  //       <Route path="/" element={<div><FloatingNews /><HomeContent /></div>} />
  //       <Route path="/cse-clubs" element={<CSEClubsPage />} />
  //     </Routes>
  //     )}
  //   //  </Router>
  // );
      
  
  // );

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col items-center space-y-8 p-4">
            <div className="w-1/2">
              <FloatingNews />
            </div>
            <div className="w-full max-w-6xl">
              <HomeContent />
            </div>
          </div>
        } />
        <Route path="/admin" element={<Admin />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/research" element={<Research />} />
        <Route path="/library" element={<Library />} />
        <Route path="/cse-clubs" element={<CSEClubsPage />} />
      </Routes>
    </>
  );



};


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
