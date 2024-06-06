import { useClerk, useUser } from '@clerk/clerk-react';
// import { useEffect } from 'react';
import HomeLayout from '@/features/home';

function Home() {
    const { session } = useClerk();
    // useEffect(() => {
    //     const test = async () => {
    //         const token = await session?.getToken();
    //         console.log(token);
    //     };
    //     test();
    // }, [session]);
    return <HomeLayout>Hello world</HomeLayout>;
}

export default Home;
