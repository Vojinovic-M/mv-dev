import { HTMLAttributes, useEffect, useState } from "react";

import WaveReveal from "@/components/text/wave-reveal";
import { cn } from "@/lib/utils";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
    item: {
        name: string;
        image: string;
        type: string;
        technologies: string[];
        description: string;
        links: {
            label: string;
            url: string;
        }[];
    };
    index: number;
    activeItem: number;
}

interface ExpandableProps {
    list?: { name: string;
        image: string;
        type: string;
        technologies: string[];
        description: string;
        links: {
            label: string;
            url: string;
        }[];
    }[];
    autoPlay?: boolean;
    className?: string;
    onClick?: (index: number) => void;
}

const List = ({ item, className, index, activeItem, onClick, ...props }: ImageProps & {onClick: () => void}) => {
    return (
        <div
            className={cn(
                "relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
                {
                    "flex-grow": index === activeItem,
                },
                className,
            )}
            onClick={onClick}
            {...props}
        >
            <img
                src={item.image}
                alt={item.name}
                className={cn("h-full w-full object-cover", {
                    "blur-[2px]": index !== activeItem,
                })}
            />
            {index === activeItem && (
                <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
                    <WaveReveal
                        duration="1000ms"
                        className="items-start justify-start text-xl sm:text-2xl md:text-4xl"
                        text={item.name}
                        direction="up"
                    />
                </div>
            )}
        </div>
    );
};

export const projects = [
    {
        name: "Pet Shop (Angular + Spring Boot)",
        image: "/petshop.png",
        type: "Website",
        technologies: ["Angular", "Spring Boot", "Tailwind CSS", "MySQL"],
        description: "A fully functional pet shop e-commerce platform with user authentication, a shopping cart, and order management.",
        links: [
            { label: "GitHub (Angular Frontend)", url: "https://github.com/Vojinovic-M/angular-pet-shop" },
            { label: "GitHub (Spring Backend)", url: "https://github.com/Vojinovic-M/spring-pet-shop" },
            { label: "Live Demo", url: "https://angular-pet-shop.vercel.app/" }
        ]
    },
    {
        name: "Snake Game (Functional Oriented Programming)",
        image: "/snakegame.png",
        type: "Game",
        technologies: ["JavaScript", "HTML", "CSS", "Functional programming"],
        description: "A classic Snake game implemented using HTML Canvas and JavaScript. " +
            "It includes food mechanics, Supabase database hosting a leaderboard, and collision detection.",
        links: [
            { label: "GitHub", url: "https://github.com/Vojinovic-M/zmijica" },
            { label: "Live Demo", url: "https://zmijica.vercel.app/" }
        ]
    },
    {
        name: "Real Estate Pricing Analysis - Amsterdam",
        image: "/realestate.png",
        type: "Data Analytics",
        technologies: ["Python", "Pandas", "Jupyter Notebook", "Matplotlib"],
        description: "An analysis of real estate price trends using Python, visualizing price fluctuations and predicting trends based on historical data.",
        links: [
            { label: "GitHub", url: "https://github.com/Vojinovic-M/python-predicting-real-estate-prices-amsterdam"},
            { label: "Google Colab Presentation", url: "https://colab.research.google.com/github/Vojinovic-M/python-predicting-real-estate-prices-amsterdam/blob/main/Amsterdam.ipynb"}
        ]
    }
];

export default function Expandable({ list = projects, autoPlay = true, className, onClick }: ExpandableProps) {
    const [activeItem, setActiveItem] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (!autoPlay) {
            return;
        }

        const interval = setInterval(() => {
            if (!isHovering) {
                setActiveItem((prev) => (prev + 1) % list.length);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [autoPlay, list.length, isHovering]);

    return (
        <div className={cn("flex h-96 w-full gap-1", className)}>
            {list.map((item, index) => (
                <List
                    key={item.name}
                    item={item}
                    index={index}
                    activeItem={activeItem}
                    onClick={() => (onClick ? onClick(index) : setActiveItem(index))}
                    onMouseEnter={() => {
                        setActiveItem(index);
                        setIsHovering(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovering(false);
                    }}
                />
            ))}
        </div>
    );
}
