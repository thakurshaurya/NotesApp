import React from 'react'

function Header() {
    return (
        <>
            <header className="bg-black/60 backdrop-blur-md border-b border-purple-900/40 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">

                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full "></span>
                            <h1 className="text-lg font-semibold text-white tracking-wide animate-pulse">
                                Notes
                            </h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative px-4 py-2 bg-purple-700 rounded-md text-white overflow-hidden">
                                <span className="relative z-10">Login</span>
                                <span className="absolute inset-0 bg-cyan-400/20 blur-lg "></span>
                            </button>

                        </div>

                    </div>
                </div>
            </header>

        </>
    )
}

export default Header