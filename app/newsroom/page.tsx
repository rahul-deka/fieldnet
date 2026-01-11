"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "@/components/newsroom/HeroSection";
import NewsroomTabs from "@/components/newsroom/NewsroomTabs";
import FeaturedStoryCard from "@/components/newsroom/FeaturedStoryCard";
import NewsGrid from "@/components/newsroom/NewsGrid";
import NewsroomSkeleton from "@/components/newsroom/NewsroomSkeleton";
import { fetchNewsroom, Newsroom } from "@/lib/newsroom";
// import AwardsSection from "@/components/newsroom/AwardsSection";
// import MediaLogosStrip from "@/components/newsroom/MediaLogosStrip";
// import Pagination from "@/components/newsroom/Pagination";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import BackToTopButton from "@/components/back-to-top";



const awards = [
  {
    id: "a1",
    logo: "/Resources/saas-award.png",
    title: "Best SaaS Startup",
    organization: "Global SaaS Awards",
    year: "2025",
  },
  {
    id: "a2",
    logo: "/Resources/innovation-award.png",
    title: "Innovation in Tech",
    organization: "Tech Innovators",
    year: "2024",
  },
  // ...more awards
];

const mediaLogos = [
  "/Resources/forbes-logo.png",
  "/Resources/techcrunch-logo.png",
  "/Resources/venturebeat-logo.png",
  // ...more logos
];

const tabs = [
  "All",
  "Press Releases",
  "Media Coverage",
  "Awards",
  "Announcements",
];


export default function NewsroomPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [news, setNews] = useState<Newsroom[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewsroom().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  // Sort news by date (latest first)
  const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Filter by tab
  const filteredNews =
    activeTab === "All"
      ? sortedNews
      : sortedNews.filter((item) => item.category === activeTab);

  // The latest news is the featured story
  const [featuredStory, ...restNews] = filteredNews;
  const visibleNews = restNews.slice(0, visibleCount);
  const hasMore = visibleCount < restNews.length;

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 pb-8 pt-4 sm:pt-8 md:pt-12 lg:pt-16">
          <HeroSection />
          <div className="mt-2 sm:mt-4">
            <NewsroomTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
          <div className="mt-4 sm:mt-8">
            {loading ? (
              <NewsroomSkeleton />
            ) : (
              <>
                {featuredStory && (
                  <FeaturedStoryCard
                    story={{
                      category: featuredStory.category,
                      headline: featuredStory.headline,
                      summary: featuredStory.summary,
                      description: featuredStory.summary,
                      date: featuredStory.date,
                      image:
                        typeof featuredStory.image === "string"
                          ? featuredStory.image
                          : featuredStory.image?.asset?.url || "",
                      link: featuredStory.link || "#",
                    }}
                  />
                )}
                <div className="mt-4 sm:mt-8">
                  <NewsGrid
                    news={visibleNews.map((item) => ({
                      id: item._id,
                      category: item.category,
                      headline: item.headline,
                      description: item.summary,
                      date: item.date,
                      image:
                        typeof item.image === "string"
                          ? item.image
                          : item.image?.asset?.url || "",
                      logo: undefined,
                      link: item.link || "#",
                    }))}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 sm:mt-16">
            <AwardsSection awards={awards} />
          </div>
          <div className="mt-10 sm:mt-16">
            <MediaLogosStrip logos={mediaLogos} />
          </div>
        </div> */}
        <BackToTopButton />
      </main>
      {/* CTA Section */}
      <section className="border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border border-cyan-700 bg-cyan-600 h-full flex flex-col md:flex-row p-8 items-start md:items-center md:justify-between gap-4 transition-all duration-700 opacity-100 translate-y-0">
            <div>
              <div className="uppercase text-sm font-medium text-white mb-2">Ready to Collaborate?</div>
              <h3 className="text-xl font-semibold text-white mb-1">Work with a seasoned global research team</h3>
              <p className="text-white/90 mb-4">
                Let’s apply the right methodologies and quality controls to answer your toughest questions.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center bg-white px-5 py-2.5 text-base font-bold text-cyan-600 shadow-lg transition-colors hover:bg-indigo-50 md:ml-auto whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
