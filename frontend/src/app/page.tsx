'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Play, MoreVertical, CheckCircle2, UploadCloud, Image as ImageIcon, Eye, Sun, Moon } from 'lucide-react';

const MOCK_VIDEOS = [
  {
    id: 'm1',
    title: "100 Boys Vs 100 Girls For $500,000",
    channel: "MrBeast",
    views: "145M views",
    time: "2 days ago",
    thumb: "https://i.ytimg.com/vi/0e3GPea1Tyg/maxresdefault.jpg",
    duration: "14:20",
    avatar: "MB",
    verified: true
  },
  {
    id: 'm2',
    title: "iPhone 15 Pro Review: The Good, The Bad, & The Ugly!",
    channel: "Marques Brownlee",
    views: "4.2M views",
    time: "4 days ago",
    thumb: "https://i.ytimg.com/vi/IS0SItAzEXg/maxresdefault.jpg",
    duration: "21:28",
    avatar: "M",
    verified: true
  },
  {
    id: 'm3',
    title: "How I Manage My Time - 10 Time Management Tips",
    channel: "Ali Abdaal",
    views: "1.7M views",
    time: "1 day ago",
    thumb: "https://i.ytimg.com/vi/iONDebHX9qk/maxresdefault.jpg",
    duration: "18:08",
    avatar: "AA",
    verified: true
  },
  {
    id: 'm4',
    title: "I Survived 50 Hours In Antarctica",
    channel: "MrBeast",
    views: "188M views",
    time: "7 months ago",
    thumb: "https://i.ytimg.com/vi/7IKab3HcfFk/maxresdefault.jpg",
    duration: "13:49",
    avatar: "MB",
    verified: true
  },
  {
    id: 'm5',
    title: "Backyard Squirrel Maze 1.0- Ninja Warrior Course!",
    channel: "Mark Rober",
    views: "123M views",
    time: "3 years ago",
    thumb: "https://i.ytimg.com/vi/hFZFjoX2cGg/maxresdefault.jpg",
    duration: "21:39",
    avatar: "MR",
    verified: true
  }
];

export default function ViralTubePreviewer() {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setThumbnail(imageUrl);
      setShowPreview(false);
    }
  };

  const handlePreview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !thumbnail) return;

    setLoading(true);
    setShowPreview(false);

    setTimeout(() => {
      setLoading(false);
      setShowPreview(true);
    }, 1200);
  };

  if (!mounted) return null;

  const activeVideo = {
    id: 'user',
    title: title,
    channel: "My Channel",
    views: "0 views",
    time: "Just now",
    thumb: thumbnail || '',
    duration: "08:15",
    avatar: "MC",
    isUser: true,
    verified: false
  };

  // Simulating realistic feed mixes
  const desktopVideos = [MOCK_VIDEOS[0], activeVideo, MOCK_VIDEOS[1], MOCK_VIDEOS[2], MOCK_VIDEOS[3], MOCK_VIDEOS[4]];
  const sidebarVideos = [MOCK_VIDEOS[1], activeVideo, MOCK_VIDEOS[3], MOCK_VIDEOS[0], MOCK_VIDEOS[2], MOCK_VIDEOS[4]];
  const mobileVideos = [MOCK_VIDEOS[2], activeVideo, MOCK_VIDEOS[1], MOCK_VIDEOS[3]];

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans selection:bg-purple-500/30 relative overflow-hidden pb-32 ${isDark ? 'bg-[#050505] text-white' : 'bg-[#f4f6f8] text-slate-900'
      }`}>

      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-3 rounded-full flex items-center justify-center backdrop-blur-md transition-all border ${isDark
            ? 'bg-white/[0.05] border-white/[0.1] hover:bg-white/[0.1] text-yellow-300'
            : 'bg-white/80 border-slate-200 hover:bg-slate-50 text-slate-700 shadow-md'
            }`}
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <main className="relative max-w-[1400px] mx-auto px-6 py-16 z-10 w-full">

        {/* Header Section */}
        <header className="text-center mb-14 space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm mb-4 backdrop-blur-md transition-colors ${isDark
            ? 'bg-white/[0.03] border-white/[0.08] text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.1)]'
            : 'bg-white border-purple-200 text-purple-600 shadow-sm'
            }`}>
            <Sparkles className="w-4 h-4" />
            <span className="font-medium tracking-wide">Premium YouTube Previewer</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${isDark ? 'from-white via-purple-100 to-gray-500' : 'from-slate-900 via-purple-600 to-slate-500'
            }`}>
            ViralTube Engine
          </h1>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Test how your thumbnail and title will actually look on YouTube before publishing.
            Upload your cover, enter your title, and preview the layout everywhere.
          </p>
        </header>

        {/* Action Panel: Upload & Title */}
        <form onSubmit={handlePreview} className="max-w-3xl mx-auto mb-20 relative group z-20">
          <div className={`absolute -inset-1 rounded-3xl blur-md opacity-50 transition duration-700 ${isDark ? 'bg-gradient-to-r from-purple-500/30 to-blue-500/30' : 'bg-gradient-to-r from-purple-400/20 to-blue-400/20'
            }`}></div>

          <div className={`relative backdrop-blur-2xl rounded-3xl p-8 border flex flex-col gap-8 transition-colors ${isDark ? 'bg-[#0d0d0d]/80 border-white/[0.1] shadow-2xl' : 'bg-white/90 border-slate-200 shadow-xl'
            }`}>

            {/* Title Input */}
            <div className="space-y-2">
              <label className={`text-sm font-semibold ml-1 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                Video Title
              </label>
              <input
                type="text"
                placeholder="Enter your eye-catching video title..."
                className={`w-full rounded-xl px-5 py-4 text-lg outline-none transition-all focus:ring-2 focus:ring-purple-500/30 border ${isDark
                  ? 'bg-white/[0.03] border-white/[0.1] text-white placeholder-gray-500 focus:bg-white/[0.05]'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-purple-300'
                  }`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Thumbnail Upload Zone */}
            <div className="space-y-2">
              <label className={`text-sm font-semibold ml-1 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                Thumbnail Image
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`w-full border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all ${thumbnail
                  ? (isDark ? 'border-purple-500/50 bg-purple-500/5 p-4' : 'border-purple-400 bg-purple-50 p-4')
                  : (isDark ? 'border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.02] p-10' : 'border-slate-300 hover:border-slate-400 hover:bg-slate-50 p-10')
                  }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />

                {thumbnail ? (
                  <div className="flex flex-col items-center gap-4 w-full">
                    <div className="relative w-full max-w-sm aspect-video rounded-lg overflow-hidden border shadow-lg border-black/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={thumbnail} alt="Uploaded thumbnail" className="object-cover w-full h-full" />
                    </div>
                    <span className={`text-sm font-medium flex items-center gap-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                      <CheckCircle2 className="w-4 h-4" /> Thumbnail Uploaded (Click to change)
                    </span>
                  </div>
                ) : (
                  <div className={`flex flex-col items-center gap-3 py-4 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${isDark ? 'bg-white/[0.03]' : 'bg-slate-100'
                      }`}>
                      <UploadCloud className={`w-8 h-8 ${isDark ? 'text-gray-300' : 'text-slate-400'}`} />
                    </div>
                    <p className={`text-lg font-medium ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>Click or drag image to upload</p>
                    <p className="text-sm opacity-80">Optimal size 1280x720 (16:9)</p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !title || !thumbnail}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 ${isDark
                ? 'bg-white text-black hover:bg-gray-200 shadow-[0_0_30px_rgba(255,255,255,0.15)]'
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
                }`}
            >
              {loading ? (
                <>
                  <div className={`w-5 h-5 border-2 border-t-transparent rounded-full animate-spin ${isDark ? 'border-black' : 'border-white'}`} />
                  Generating Previews...
                </>
              ) : (
                <>
                  <Eye className="w-5 h-5" /> Let's Preview
                </>
              )}
            </button>
          </div>
        </form>

        {/* Premium Previews Area */}
        {showPreview && thumbnail && (
          <div className="w-full mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-16">

            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                How it looks on YouTube
              </h2>
              <p className={isDark ? 'text-gray-400' : 'text-slate-500'}>
                Compare your video naturally against the competition
              </p>
            </div>

            {/* SECTION 1: DESKTOP HOME (Grid of 6) */}
            <div className="space-y-6">
              <div className="flex justify-between items-center px-1 border-b border-white/[0.05] pb-4">
                <h3 className={`text-xl font-semibold flex items-center gap-2 ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                  <ImageIcon className="w-6 h-6" /> Desktop Home View
                </h3>
                <span className="text-sm text-gray-500 uppercase tracking-widest font-bold hidden sm:block">Standard Layout</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4">
                {desktopVideos.map((video) => (
                  <DesktopCard key={`desk-${video.id}`} video={video} isDark={isDark} />
                ))}
              </div>
            </div>

            {/* Layout for Sidebar and Mobile App */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-white/[0.05]">

              {/* SECTION 2: MOBILE APP (5 cols) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex justify-between items-center px-1">
                  <h3 className={`text-xl font-semibold flex items-center gap-2 ${isDark ? 'text-pink-300' : 'text-pink-600'}`}>
                    <Youtube className="w-6 h-6" /> Mobile Device
                  </h3>
                </div>

                <div className={`max-w-[360px] mx-auto border overflow-hidden rounded-[2.5rem] pt-6 px-0 relative shadow-2xl ${isDark ? 'bg-[#0f0f0f] border-white/[0.1]' : 'bg-white border-slate-300'
                  }`}>
                  {/* Fake Notification Bar (Notch) */}
                  <div className="w-32 h-6 bg-black absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[1rem] z-20 flex items-center justify-center">
                    <div className="w-12 h-1 bg-gray-800 rounded-full mt-1"></div>
                  </div>

                  <div className={`h-[580px] w-full overflow-y-auto ${isDark ? 'bg-[#0f0f0f]' : 'bg-[#f0f0f0]'
                    } no-scrollbar`}>
                    <div className="py-2">
                      {mobileVideos.map((video) => (
                        <MobileCard key={`mobile-${video.id}`} video={video} isDark={isDark} />
                      ))}
                    </div>
                  </div>

                  {/* Bottom nav simulation */}
                  <div className={`h-12 w-full border-t flex justify-around items-center px-4 ${isDark ? 'bg-[#0f0f0f] border-white/[0.1]' : 'bg-white border-slate-200'}`}>
                    <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-white/[0.1]' : 'bg-slate-200'}`}></div>
                    <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-white/[0.1]' : 'bg-slate-200'}`}></div>
                    <div className={`w-10 h-10 rounded-full ${isDark ? 'bg-white/[0.1]' : 'bg-slate-200'} border border-current flex items-center justify-center`}>+</div>
                    <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-white/[0.1]' : 'bg-slate-200'}`}></div>
                    <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-white/[0.1]' : 'bg-slate-200'}`}></div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: SUGGESTED SIDEBAR (7 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex justify-between items-center px-1">
                  <h3 className={`text-xl font-semibold flex items-center gap-2 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                    <MoreVertical className="w-6 h-6" /> Suggested Sidebar
                  </h3>
                </div>

                <div className={`p-4 xl:p-6 rounded-[2rem] border overflow-hidden ${isDark ? 'bg-[#0f0f0f] border-white/[0.05]' : 'bg-white border-slate-200 shadow-xl'
                  }`}>
                  <div className="flex flex-col gap-3">
                    {sidebarVideos.map((video) => (
                      <SidebarCard key={`side-${video.id}`} video={video} isDark={isDark} />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// ------ REUSABLE YOUTUBE CARDS ------

function DesktopCard({ video, isDark }: { video: any, isDark: boolean }) {
  return (
    <div className={`p-0 rounded-2xl transition-colors group cursor-pointer ${isDark ? 'bg-transparent' : 'bg-transparent'
      }`}>
      <div className={`relative aspect-video rounded-xl overflow-hidden mb-3 bg-black border ${video.isUser && isDark ? 'border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.4)] ring-1 ring-purple-500/50' : (video.isUser && !isDark ? 'border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)] ring-1 ring-purple-400' : (isDark ? 'border-white/[0.05]' : 'border-slate-200'))}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={video.thumb} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[12px] font-semibold px-1.5 py-0.5 rounded backdrop-blur-md">
          {video.duration}
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-14 h-14 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm scale-75 group-hover:scale-100 transition-all">
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          </div>
        </div>
      </div>

      <div className="flex gap-3 pr-4 relative">
        <div className="flex-shrink-0 pt-0.5">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md ${video.isUser ? 'bg-gradient-to-tr from-purple-500 to-blue-500' : (isDark ? 'bg-white/[0.1]' : 'bg-slate-300')
            }`}>
            <span className={`text-xs font-bold ${video.isUser ? 'text-white' : (isDark ? 'text-gray-300' : 'text-slate-600')}`}>
              {video.avatar}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className={`font-semibold text-[16px] line-clamp-2 leading-tight ${isDark ? 'text-[#f1f1f1] group-hover:text-blue-400' : 'text-[#0f0f0f] group-hover:text-blue-600'
            }`}>
            {video.title}
          </h4>
          <div className={`text-[14px] flex flex-col mt-1 ${isDark ? 'text-[#aaaaaa]' : 'text-[#606060]'}`}>
            <span className="flex items-center gap-1">
              {video.channel} {video.verified && <CheckCircle2 className="w-[13px] h-[13px] opacity-70" />}
            </span>
            <span>{video.views} • {video.time}</span>
          </div>
        </div>

        <button className={`absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity ${isDark ? 'text-white' : 'text-black'
          }`}>
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function SidebarCard({ video, isDark }: { video: any, isDark: boolean }) {
  return (
    <div className={`p-2 rounded-xl flex gap-2 cursor-pointer transition-colors group ${video.isUser ? (isDark ? 'bg-purple-500/10 border border-purple-500/30' : 'bg-purple-50 border border-purple-300') : (isDark ? 'bg-transparent hover:bg-white/[0.05]' : 'bg-transparent hover:bg-slate-50')
      }`}>
      <div className={`relative w-[168px] aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-black ${video.isUser ? 'shadow-[0_0_10px_rgba(168,85,247,0.3)]' : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={video.thumb} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[12px] font-semibold px-1 py-[1px] rounded backdrop-blur-md">
          {video.duration}
        </div>
      </div>

      <div className="flex flex-col py-0.5 pr-4 relative w-full">
        <h4 className={`font-semibold text-[14px] line-clamp-2 leading-snug ${isDark ? 'text-[#f1f1f1]' : 'text-[#0f0f0f]'
          }`}>
          {video.title}
        </h4>
        <div className={`text-[12px] flex flex-col mt-1 space-y-[1px] ${isDark ? 'text-[#aaaaaa]' : 'text-[#606060]'
          }`}>
          <span className="flex items-center gap-1">{video.channel} {video.verified && <CheckCircle2 className="w-3 h-3 opacity-70" />}</span>
          <span>{video.views} • {video.time}</span>
        </div>
        <button className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
        </button>
      </div>
    </div>
  );
}

function MobileCard({ video, isDark }: { video: any, isDark: boolean }) {
  return (
    <div className={`w-full relative cursor-pointer border-b pb-3 mb-3 shrink-0 ${video.isUser ? (isDark ? 'bg-purple-500/5' : 'bg-purple-50/50') : (isDark ? 'bg-transparent border-white/[0.08]' : 'bg-transparent border-slate-200')
      }`}>
      <div className={`relative w-full aspect-video bg-black ${video.isUser && isDark ? 'shadow-[0_4px_20px_rgba(168,85,247,0.2)]' : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={video.thumb} alt={video.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[12px] font-semibold px-1.5 py-0.5 rounded backdrop-blur-md">
          {video.duration}
        </div>
        {video.isUser && <div className="absolute bottom-0 left-0 h-[3px] bg-red-600 w-1/3"></div>}
      </div>

      <div className="p-3 pb-1 flex gap-3 relative">
        <div className="flex-shrink-0 pt-1">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${video.isUser ? 'bg-gradient-to-tr from-purple-500 to-blue-500 shadow-md' : (isDark ? 'bg-white/[0.1]' : 'bg-slate-300')
            }`}>
            <span className={`text-[12px] font-bold ${video.isUser ? 'text-white' : (isDark ? 'text-gray-300' : 'text-slate-600')}`}>
              {video.avatar}
            </span>
          </div>
        </div>
        <div className="flex flex-col pr-6">
          <h4 className={`font-semibold text-[15px] line-clamp-2 leading-tight ${isDark ? 'text-[#f1f1f1]' : 'text-[#0f0f0f]'
            }`}>
            {video.title}
          </h4>
          <div className={`text-[12px] mt-1 flex flex-col space-y-[1px] ${isDark ? 'text-[#aaaaaa]' : 'text-[#606060]'}`}>
            <span className="flex items-center gap-1">{video.channel} {video.verified && <CheckCircle2 className="w-[11px] h-[11px] opacity-70" />}</span>
            <span>{video.views} • {video.time}</span>
          </div>
        </div>
        <button className="absolute top-4 right-2">
          <MoreVertical className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
        </button>
      </div>
    </div>
  );
}

// Just an inline mock icon if lucide doesn't load Youtube
function Youtube(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
