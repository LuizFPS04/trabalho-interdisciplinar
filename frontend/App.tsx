import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizListPage from './pages/QuizListPage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import RankingPage from './pages/RankingPage';
import Navbar from './components/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Verifica se o usuário está autenticado ao carregar o app
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Função para fazer login
  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    navigate('/'); // Redireciona para a página de perfil após o login
  };

  // // Função para fazer logout
  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   setIsAuthenticated(false);
  //   navigate('/login'); // Redireciona para a página de login após o logout
  // };

  return (
    <div className="min-h-screen bg-green-700/80">
      <Navbar isAuthenticated={isAuthenticated}  />
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/quizzes/:category" element={<QuizListPage />} />
        <Route path="/quiz/:category/:quizId" element={<QuizPage />} />
        <Route path="/login" element={<LoginPage isAuthenticated={isAuthenticated} onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage onRegister={handleLogin} />} />

        {/* Rotas protegidas */}
        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <ProfilePage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/ranking"
          element={
            isAuthenticated ? (
              <RankingPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Redirecionamento para páginas não encontradas */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;