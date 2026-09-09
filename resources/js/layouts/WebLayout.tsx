import { ReactNode } from 'react';
import Header from '@/components/Web/Header';
import Footer from '@/components/Web/Footer';

interface Props {
    children: ReactNode;
}

export default function WebLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}