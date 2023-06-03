import React, { FC } from 'react';
import { ResponsiveAppBar } from '../components/commons/admin';

interface Props {
    children: any;
}

export const MainLayouts: FC<Props> = ({ children }) => {
    return (
        <>
            <header>
                <ResponsiveAppBar />
            </header>
            <main style={{
                margin: '20px auto',
                maxWidth: '1440px',
                padding: '0px 30px',
                minHeight: 'calc(100vh - 200px)', // Asegura que el contenido del main cubra al menos el 100% de la altura visible de la pantalla
            }}>
                {children}
            </main>
            <footer style={{
                position: 'fixed', // Establece la posición fija del footer
                left: 0,
                bottom: 0,
                width: '100%',
                backgroundColor: '#f5f5f5',
                padding: '2px',
                textAlign: 'center',
            }}>
                <h2>Tienda Online 2023</h2>
            </footer>
        </>
    );
};
