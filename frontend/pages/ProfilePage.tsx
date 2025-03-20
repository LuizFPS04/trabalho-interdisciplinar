import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Result } from '../types';
import { Trophy, Medal, Star, Calendar, Mail, LogOut } from 'lucide-react';

function ProfilePage() {
  const navigate = useNavigate();
  
  // Mock user data - will be replaced with actual user data from backend
  const user: User = {
    id: 1,
    nickname: "JohnDoe",
    email: "john@example.com",
    password: "",
    name: "John Doe",
    birth: new Date('1990-01-01'),
    role: "user",
    createdAt: new Date('2024-01-01'),
    results: [
      {
        id: 1,
        score: 8,
        createdAt: new Date('2024-03-15'),
        quiz: {
          id: 1,
          title: "Biodiversidade da Mata Atlântica",
          theme: "mata-atlantica",
          description: "Teste seus conhecimentos sobre a Mata Atlântica",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      },
      {
        id: 2,
        score: 6,
        createdAt: new Date('2024-03-16'),
        quiz: {
          id: 2,
          title: "Flora da Mata Atlântica",
          theme: "mata-atlantica",
          description: "Explore a diversidade da flora da Mata Atlântica",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      }
    ]
  };

  const handleLogout = () => {
    // TODO: Implement actual logout logic here
    navigate('/login');
  };

  const totalScore = user.results?.reduce((sum, result) => sum + result.score, 0) || 0;
  const averageScore = user.results && user.results.length > 0
    ? totalScore / user.results.length
    : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-green-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-green-600">{user.name.charAt(0)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                  <p className="text-gray-500">@{user.nickname}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 text-green-600" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-green-600" />
                    <span>Membro desde {user.createdAt?.toLocaleDateString()}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full mt-4 flex items-center justify-center space-x-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                  >
                    <LogOut size={20} />
                    <span>Sair da conta</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats and Recent Activity */}
            <div className="md:col-span-2">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Pontuação Total</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-600">{totalScore}</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-2">
                    <Medal className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Quizzes Completados</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-600">{user.results?.length || 0}</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-2">
                    <Star className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Média de Pontos</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-600">{averageScore.toFixed(1)}</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Histórico de Quizzes</h3>
                <div className="space-y-4">
                  {user.results?.map((result) => (
                    <div key={result.id} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-800">{result.quiz?.title}</h4>
                          <p className="text-sm text-gray-500">
                            Completado em {result.createdAt?.toLocaleDateString()}
                          </p>
                        </div>
                        <div className="bg-green-100 px-3 py-1 rounded-full">
                          <span className="text-green-600 font-semibold">{result.score} pontos</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;