import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    Search,
    BookOpen,
    Key,
    Send,
    Mail,
    Settings,
    Database as DatabaseIcon,
    Github,
    Hexagon,
    ChevronRight
} from 'lucide-react';

const SidebarItem = ({ to, icon: Icon, children, onClick }) => (
    <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 text-[13px] font-medium transition-colors rounded-sm ${isActive
                ? 'bg-[#F2EDED]/10 text-[#F2EDED] border border-[#B7B1B1]/20'
                : 'text-[#B7B1B1] hover:text-[#F2EDED] hover:bg-[#F2EDED]/5 border border-transparent'
            }`
        }
    >
        <Icon size={16} className="shrink-0" />
        {children}
    </NavLink>
);

const DocsLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();

    useEffect(() => {
        setIsSidebarOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    const menuItems = [
        { to: '/', icon: BookOpen, label: 'Introduction' },
        { to: '/auth', icon: Key, label: 'Authentication' },
        { to: '/send', icon: Send, label: 'Sending Emails' },
        { to: '/read', icon: Mail, label: 'Reading Emails' },
        { to: '/api', icon: Settings, label: 'API Reference' },
        { to: '/database', icon: DatabaseIcon, label: 'Database Structure' },
    ];

    const filteredItems = menuItems.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#131010] text-[#F2EDED] flex flex-col selection:bg-[#B7B1B1] selection:text-[#131010]">
            {/* Dot Pattern Background */}
            <div className="fixed inset-0 z-0 h-full w-full bg-[#131010] pointer-events-none">
                <div className="absolute h-full w-full bg-[radial-gradient(#B7B1B1_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.07]"></div>
            </div>

            {/* Top Navbar */}
            <header className="sticky top-0 z-30 w-full bg-[#131010]/90 backdrop-blur-md border-b border-[#B7B1B1]/20">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between h-14 px-6">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden p-2 text-[#B7B1B1] hover:text-[#F2EDED] transition-colors"
                        >
                            <Menu size={18} />
                        </button>
                        <a href="/" className="flex items-center gap-2 cursor-pointer">
                            <div className="w-5 h-5 bg-[#F2EDED] flex items-center justify-center rounded-[2px]">
                                <img src="https://0.email/white-icon.svg" alt="logo" className="w-6 h-6 brightness-0" />
                            </div>
                            <span className="font-bold text-sm tracking-tight text-[#F2EDED]">0utmail</span>
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#222] text-[#B7B1B1] border border-[#B7B1B1]/20 ml-1">DOCS</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative hidden md:block w-56">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B7B1B1]" size={14} />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-4 py-1.5 text-[13px] bg-transparent border border-[#B7B1B1]/20 text-[#F2EDED] placeholder:text-[#B7B1B1]/50 focus:border-[#F2EDED] focus:outline-none transition-colors rounded-[2px] font-mono"
                            />
                        </div>
                        <a
                            href="https://www.npmjs.com/package/0utmail"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[13px] text-[#B7B1B1] hover:text-[#F2EDED] transition-colors hidden sm:block"
                        >
                            npm
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 text-[#B7B1B1] hover:text-[#F2EDED] transition-colors"
                        >
                            <Github size={16} />
                        </a>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 relative z-10 max-w-[1400px] mx-auto w-full border-x border-[#B7B1B1]/20">
                {/* Mobile Sidebar Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-[#131010]/80 backdrop-blur-sm lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <aside
                    className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#131010] border-r border-[#B7B1B1]/20 transition-transform duration-300 lg:sticky lg:top-14 lg:h-[calc(100vh-56px)] lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="flex flex-col h-full overflow-y-auto p-5 space-y-6">
                        {/* Mobile close */}
                        <div className="lg:hidden flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-[#F2EDED] flex items-center justify-center rounded-[2px]">
                                    <Hexagon className="w-3 h-3 text-[#131010]" />
                                </div>
                                <span className="font-bold text-sm">0utmail</span>
                            </div>
                            <button onClick={() => setIsSidebarOpen(false)} className="p-1 text-[#B7B1B1] hover:text-[#F2EDED]">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Mobile search */}
                        <div className="relative md:hidden">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B7B1B1]" size={14} />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-4 py-1.5 text-[13px] bg-transparent border border-[#B7B1B1]/20 text-[#F2EDED] placeholder:text-[#B7B1B1]/50 focus:border-[#F2EDED] focus:outline-none transition-colors rounded-[2px] font-mono"
                            />
                        </div>

                        <div className="space-y-1">
                            <p className="px-3 text-[10px] font-bold text-[#B7B1B1] font-mono uppercase tracking-widest mb-3">Getting Started</p>
                            {filteredItems.map((item) => (
                                <SidebarItem key={item.to} to={item.to} icon={item.icon} onClick={() => setIsSidebarOpen(false)}>
                                    {item.label}
                                </SidebarItem>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-[#B7B1B1]/10">
                            <p className="px-3 text-[10px] font-bold text-[#B7B1B1] font-mono uppercase tracking-widest mb-3">Links</p>
                            <a href="https://www.npmjs.com/package/0utmail" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 text-[13px] text-[#B7B1B1] hover:text-[#F2EDED] transition-colors">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" alt="Npm Package" className="w-6 h-6" />
                                Npm Package
                                <ChevronRight size={12} className="ml-auto opacity-50" />
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-x-hidden min-h-screen">
                    <Outlet />

                    {/* Footer */}
                    <footer className="border-t border-[#B7B1B1]/20 py-8 px-6">
                        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B7B1B1] font-mono">
                            <p>© 2026 0utmail. All rights reserved.</p>
                            <div className="flex gap-6">
                                <a href="#" className="hover:text-[#F2EDED] transition-colors">License</a>
                                <a href="#" className="hover:text-[#F2EDED] transition-colors">npm</a>
                                <a href="#" className="hover:text-[#F2EDED] transition-colors">GitHub</a>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default DocsLayout;
