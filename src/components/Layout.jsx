import React from "react";

function Layout() {
    return (
        <div className="flex h-screen text-white">
            <div className="p-3 bg-gray-700">
                <div className="flex justify-center w-12 h-12 bg-white item-center">
                    HW
                </div>
            </div>
            <div className="flex flex-col bg-gray-600 w-60">
                <div className="p-4 shadow-md">Tailwind CSS</div>
                <div className="flex-1 p-4">Channels</div>
            </div>
            <div className="flex-1 bg-gray-500">Message</div>
        </div>
    );
}

/**
 *
 *  <div className="flex h-screen text-white">
            <div className="p-3 space-y-2 overflow-y-scroll bg-gray-800">
                {[...Array(30)].map((_, i) => (
                    <div className="flex items-center justify-center w-12 h-12 text-gray-500 bg-white rounded-full">
                        {i}
                    </div>
                ))}
            </div>
            <div className="flex flex-col bg-gray-700 w-60">
                <div className="p-4 shadow-md">Tailwind CSS</div>
                <div className="flex-1 p-4">Channels</div>
            </div>
            <div className="flex flex-col flex-1 bg-gray-600">
                <div className="p-4 shadow-md">General</div>
                <div className="flex-1 p-4">Messages</div>
            </div>
        </div>
 */

export default Layout;
