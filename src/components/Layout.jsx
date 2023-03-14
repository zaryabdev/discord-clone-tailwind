import React from "react";

function Layout() {
    return (
        <div className="flex h-screen text-gray-100">
            <div className="p-3 space-y-2 overflow-y-scroll bg-gray-900">
                {[...Array(40)].map((_, i) => (
                    <div className="flex items-center justify-center w-12 h-12 text-gray-100 bg-white rounded-full">
                        {i}
                    </div>
                ))}
            </div>
            <div className="flex flex-col bg-gray-800 w-60">
                <div className="flex items-center h-12 px-3 shadow-md">
                    Tailwind CSS
                </div>
                <div className="flex-1 p-3 space-y-2 overflow-y-scroll text-gray-300">
                    <p className="text-white">channel (unread) </p>
                    <p className="text-white">channel (unread) </p>
                    {[...Array(40)].map((_, i) => (
                        <p> Channels {i} </p>
                    ))}
                </div>
            </div>
            <div className="flex flex-col flex-1 bg-gray-700 ">
                <div className="flex items-center p-3 shadow-md">General</div>
                <div className="flex-1 p-3 space-y-2 overflow-y-scroll">
                    {[...Array(40)].map((_, i) => (
                        <p>
                            {" "}
                            Message {i}. Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Illum nam alias unde labore ad
                            aperiam, inventore quasi rerum minima dolore hic
                            consectetur error sunt in aspernatur totam porro
                            dolorem aliquid?{" "}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Layout;
