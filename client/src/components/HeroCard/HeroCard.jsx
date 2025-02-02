import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import wave from '../../assets/wave Gif.gif';
import Yoga from '../../assets/meditation.jpg';
import Exercise from '../../assets/exercise.jpg';
import Games from '../../assets/games.jpg';
import Books from '../../assets/books.avif';
import Diary from '../../assets/diary.jpg';
import Video from '../../assets/videos.png';






const ServiceData = [
    {
        title: "Breathing and Meditation",
        content: "Breathing technique",
        description: "Practicing mindful breathing and meditation helps reduce stress, enhance focus, and bring a sense of calm to daily life.",
        img: Yoga,
        aosDelay: "300",
        link: "/breathing",
    },
    {
        title: "Exercises",
        content: "Physical exercises",
        description: "Regular physical activity strengthens the body, improves flexibility, and supports mental well-being.",
        img: Exercise,
        aosDelay: "700",
        link: "/exercises",
    },
    {
        title: "Games for Fun",
        content: "Play games to release your stress",
        description: "Engaging in short, fun games offers a quick mental break and boosts creativity.",
        img: Games,
        aosDelay: "700",
        link: "/Bubble",
    },
    {
        title: "Books and Thoughts",
        content: "Read books to gain knowledge",
        description: "Reading expands perspectives and inspires thoughtful reflection.",
        img: Books,
        aosDelay: "700",
        link: "/books",
    },
    {
        title: "Community and  Blogs",
        content: "community to share experiences",
        description: "Writing in a blogs provides a  space to express emotions and reflect.",
        img: Diary,
        aosDelay: "700",
        link: "https://repo-frontend-0ixl.onrender.com/",
    },
    {
        title: "Videos for Relief",
        content: "Watch videos to release stress",
        description: "Discover stress-relief techniques to bring calm and balance.",
        img: Video,
        aosDelay: "700",
        link: "https://youtube.com/playlist?list=PLi7xA3cpIGd3p6E-YKRVozq2l51H0AE9S&si=rBPAVRzp2CP9_Aob",
    },
];

const HeroCard = ({ onCardClick }) => {
    return (
        <section className="bg-blue-500">
            <div className="container">
                <div className="min-h-[400px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                        {ServiceData.map((data, index) => (
                            <Link
                                key={index}
                                to={data.link}
                                onClick={onCardClick} // Trigger event on click
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                className="cursor-pointer min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                            >
                                <img src={data.img} alt={data.title} className="text-7xl" />
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className="text-sm">{data.description}</p>
                            </Link>
                        ))}
                    </div>

                    <img
                        src={wave}
                        alt=""
                        className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroCard;


