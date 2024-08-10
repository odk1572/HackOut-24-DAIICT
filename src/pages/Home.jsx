import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-12 bg-gradient-to-b from-blue-600 via-blue-200 to-yellow-100 text-center text-blue-900">
                <Container>
                    <div className="flex flex-col items-center justify-center min-h-screen p-6">
                        <h1 className="text-3xl font-bold mb-4">Welcome to SpaceTheme HackOut'24 DAIICT</h1>
                        <p className="text-lg mb-6">
                            Please Login to read space theme related posts<br />Or Signup to create an Account
                        </p>
                    </div>
                </Container>
            </div>
        );
    }
    return (
        <div className="w-full py-8 bg-gradient-to-b from-blue-600 via-blue-200 to-yellow-100">
            <Container>
                <div className="flex flex-wrap justify-center">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
