import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="block mb-8 transform transition-transform hover:scale-105">
            <div className="relative overflow-hidden rounded-lg shadow-md">
                <img
                    src={appwriteService.getFilePreview(featuredImage)}
                    alt={title}
                    className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h2 className="text-lg font-semibold mb-2">{title}</h2>
                    <p className="text-sm opacity-75">ℝ𝕖𝕒𝕕 𝕞𝕠𝕣𝕖...</p>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
