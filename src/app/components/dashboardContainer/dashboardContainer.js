// src/app/dashboard/page.js
"use client";
import React, { useEffect } from 'react';
import {useUserStore} from "./../../../stores/userStore";

function DashboardContainer({content}) {
    const setUserToken = useUserStore((state) => state.setUserToken);
    const setUserId = useUserStore((state) => state.setUserId);
    useEffect(() => {
        const storageToken = localStorage.getItem('token');
        const storageUserId = localStorage.getItem('userId');
        if (storageToken) {
            setUserToken(storageToken);
        }
        if (storageUserId) {
            setUserId(storageUserId);
        }
    })
    return (
        <div className="h-screen">
            <div className="bg-white p-4 shadow-md w-full">
                <h2 className="text-lg font-bold">Welcome, John Doe</h2>
                <p className="text-gray-600">john.doe@example.com</p>
            </div>
            <div className='flex h-[calc(100vh-79.5px)]'>
                {/* Menu */}
                <div className="bg-gray-800 text-white w-64 p-4">
                    <h2 className="text-lg font-bold mb-4">Menu</h2>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="text-gray-300 hover:text-white">
                                Dashboard
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-300 hover:text-white">
                                Customers
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-300 hover:text-white">
                                Orders
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Main Content */}
                <div className="flex-1">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default DashboardContainer;