import React from "react";

function Layout() {
    return (
        <div className="flex text-white  h-screen">
            <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll">
                {[...Array(30)].map((_, i) => (
                    <div className="bg-white w-12 h-12 flex justify-center items-center text-gray-500 rounded-full">
                        {i}
                    </div>
                ))}
            </div>
            <div className="bg-gray-700 w-60 flex flex-col">
                <div className="p-4 shadow-md">Tailwind CSS</div>
                <div className="p-4 flex-1">Channels</div>
            </div>
            <div className="bg-gray-600 flex-1  flex flex-col">
                <div className="p-4 shadow-md">General</div>
                <div className="p-4 flex-1">Messages</div>
            </div>
        </div>
    );
}

export default Layout;
