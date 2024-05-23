import Navbar from './components/Navbar';
import Sidebar from '../sidebar';
import Container from './components/Container';

function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="flex h-full pt-20 border-2 border-solid border-red-800">
                <Sidebar />
                <Container>{children}</Container>
            </div>
        </>
    );
}

export default HomeLayout;
