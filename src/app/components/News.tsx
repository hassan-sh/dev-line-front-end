"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Article {
  id: number
  type: "featured" | "small"
  image: string
  title: string
  description?: string
  tags: string[]
}

export default function News() {
    const featuredNews: Article = {
        id: 1,
        type: "featured",
        image: "/blog/blog-01.webp",
        title: "We specialize in fostering effective partnerships with supportive companies to drive mutual success.",
        description: "We are committed to building effective partnerships with supporting companies, contributing to the advancement, development, and expansion of the sector through diverse capabilities, expertise, and technological innovation.",
        tags: ["Company", "Contracts"],
    }

    const newsData: Article[] = [
        {
            id: 2,
            type: "small",
            image: "/blog/blog-02.webp",
            title: "We incorporate the formation of public partnerships as a core aspect of our operations.",
            tags: ["Company", "Contrasts"],
        },
        {
            id: 3,
            type: "small",
            image: "/blog/blog-03.webp", 
            title: "we incorporate the formation of public partnerships as a core aspect of our operations.",
            tags: ["Company", "Contrasts"],
        },
        {
            id: 4,
            type: "small",
            image: "/blog/blog-04.webp",
            title: "we incorporate the formation of public partnerships as a core aspect of our operations.",
            tags: ["Company", "Contrasts"],
        },
    ];

    // const NewsCard = ({ article }) => {
  const NewsCard: React.FC<{ article: Article  }> = ({ article }) => {
    
    return (
      <div className='flex gap-6'>
          <Image 
            src={article.image} 
            alt={article.title}
            width={221}
            height={246}
            className='w-full object-cover h-48 rounded-lg'
          />
        
        <div className='flex flex-col gap-6'>
          
          <h3 className='font-semibold  leading-tight text-base'>
            {article.title}
          </h3>
          
           <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-white border-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="mx-2 md:mx-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className=" text-3xl font-semibold">News</h2>
          <Button 
            className="hidden md:block bg-primary px-6 py-2 rounded-full cursor-pointer"
          >
            View all news
          </Button>
        </div>

        {/* News Grid - Desktop Layout */}
        <div className=" flex flex-col lg:flex-row gap-8">
            {/* Featured Article - Left Side */}
            <div className="flex flex-col gap-8">
                <div className="">
                    <Image 
                        src={featuredNews.image} 
                        alt={featuredNews.title}
                        width={696}
                        height={460}
                        className='w-full object-cover h-64 md:h-80 rounded-lg'
                    />
                </div>
                
                <div className="flex flex-wrap gap-2">
                    {featuredNews.tags.map((tag, index) => (
                    <Badge 
                        key={index} 
                        variant="outline" 
                        className="bg-white border-gray-300 text-[#1D1F1E] text-xs px-3 py-1 rounded-full"
                    >
                        {tag}
                    </Badge>
                    ))}
                </div>
                
                <h3 className='font-semibold  leading-tight text-xl md:text-2xl'>
                    {featuredNews.title}
                </h3>
                
                {featuredNews.description && (
                    <p className="text-[#646A69] text-sm">
                    {featuredNews.description}
                    </p>
                )}
            </div>
            
            {/* Small Articles Grid */}
            <div className="flex flex-col gap-6">
                {newsData.map((article) => (
                <NewsCard 
                    key={article.id} 
                    article={article}
                />
                ))}
            </div>
            <Button 
                className="md:hidden bg-primary px-6 py-2 h-[55px] rounded-full text-lg"
            >
                Show all news
            </Button>
        </div>
      </div>
    </section>
  );
}