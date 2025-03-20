import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Quiz } from '../types';

function QuizListPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const quizzes: Record<string, Quiz[]> = {
    'mata-atlantica': [
      {
        id: 1,
        title: 'Biodiversidade da Mata Atlântica',
        theme: 'mata-atlantica',
        description: 'Teste seus conhecimentos sobre a Mata Atlântica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'Flora da Mata Atlântica',
        theme: 'mata-atlantica',
        description: 'Explore a diversidade da flora da Mata Atlântica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    'fauna': [
      {
        id: 3,
        title: 'Mamíferos Brasileiros',
        theme: 'fauna',
        description: 'Descubra mais sobre nossa fauna',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    'flora': [
      {
        id: 4,
        title: 'Árvores Nativas',
        theme: 'flora',
        description: 'Explore a diversidade da nossa flora',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    'biomas': [
      {
        id: 5,
        title: 'Amazônia',
        theme: 'biomas',
        description: 'Conheça os diferentes biomas brasileiros',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    'sustentabilidade': [
      {
        id: 6,
        title: 'Reciclagem',
        theme: 'sustentabilidade',
        description: 'Aprenda sobre práticas sustentáveis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  };

  const categoryTitles: Record<string, string> = {
    'mata-atlantica': 'Mata Atlântica',
    'fauna': 'Fauna Brasileira',
    'flora': 'Flora Brasileira',
    'biomas': 'Biomas do Brasil',
    'sustentabilidade': 'Sustentabilidade',
  };

  const currentQuizzes = quizzes[category as keyof typeof quizzes] || [];
  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles] || category;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-green-800/50 rounded-lg p-8 backdrop-blur-sm">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-white hover:text-green-200 transition-colors mr-4"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-4xl font-bold text-white">Quizzes sobre {categoryTitle}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentQuizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${quiz.id}?auto=format&fit=crop&q=80&w=800`}
                  alt={quiz.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">{quiz.title}</h3>
                <p className="text-gray-600 mb-4">{quiz.description}</p>
                <button 
                  onClick={() => navigate(`/quiz/${category}/${quiz.id}`)}
                  className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Iniciar Quiz
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizListPage;