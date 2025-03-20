import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { Leaf, TreePine, Bird, Sprout, Recycle, Trees , Flower2} from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sobreImg from '../assets/imgs/sobre.jpg';
import biomasImg from '../assets/imgs/biomas.jpg';
import faunaImg from '../assets/imgs/fauna.png';
import floraImg from '../assets/imgs/flora.jpg';

function HomePage() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const quizzes = [
    {
      title: "Fauna Brasileira",
      image: faunaImg,
      description: "Descubra mais sobre nossa fauna",
      category: "fauna",
      icon: Bird
    },
    {
      title: "Flora Brasileira",
      image: floraImg,
      description: "Explore a diversidade da nossa flora",
      category: "flora",
      icon: Flower2
    },
    {
      title: "Biomas do Brasil",
      image: biomasImg,
      description: "Conheça os diferentes biomas brasileiros",
      category: "biomas",
      icon: Sprout
    },
    {
      title: "Sustentabilidade",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      description: "Aprenda sobre práticas sustentáveis",
      category: "sustentabilidade",
      icon: Recycle
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      <section className="bg-green-800/50 rounded-lg p-8 backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Nossos quizes!</h1>
        <div className="carousel-container">
        <Slider {...carouselSettings}>
            {quizzes.map((quiz, index) => (
              <QuizCard
                key={index}
                title={quiz.title}
                image={quiz.image}
                description={quiz.description}
                category={quiz.category}
                Icon={quiz.icon}
              />
            ))}
          </Slider>
        </div>
      </section>

      <section id="about-section" className="relative">
        <div className="absolute inset-0 bg-green-800/30 backdrop-blur-sm rounded-lg"></div>
        <div className="relative bg-white/90 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-full">
              <img 
                src={sobreImg}
                alt="Natureza" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent flex items-center">
                <h2 className="text-4xl font-bold text-white p-8">
                  Sobre o<br />BioGenius
                </h2>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                O BioGenius é uma plataforma educacional dedicada a promover o conhecimento sobre a biodiversidade brasileira e conscientização ambiental através de quizzes interativos e envolventes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-green-800">Nossa Missão</h3>
                  <p className="text-gray-600">Tornar o aprendizado sobre meio ambiente divertido e acessível para todos.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-green-800">Nosso Objetivo</h3>
                  <p className="text-gray-600">Conscientizar sobre a importância da preservação ambiental através do conhecimento.</p>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Por que BioGenius?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Leaf className="text-green-600" size={20} />
                    Quizzes educativos e interativos
                  </li>
                  <li className="flex items-center gap-2">
                    <TreePine className="text-green-600" size={20} />
                    Conteúdo sobre biodiversidade brasileira
                  </li>
                  <li className="flex items-center gap-2">
                    <Sprout className="text-green-600" size={20} />
                    Aprendizado gamificado
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface QuizCardProps {
  title: string;
  image: string;
  description: string;
  category: string;
  Icon: React.ElementType;
}

function QuizCard({ title, image, description, category, Icon }: QuizCardProps) {
  const navigate = useNavigate();

  return (
    <div className="quiz-card-wrapper">
      <div className="quiz-card bg-white rounded-lg overflow-hidden shadow-lg h-[400px] flex flex-col">
        <div className="h-48 overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
            <Icon className="text-green-600" size={24} />
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
          <p className="text-gray-600 flex-grow">{description}</p>
          <button 
            onClick={() => navigate(`/quizzes/${category}`)}
            className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Ver quizzes
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;