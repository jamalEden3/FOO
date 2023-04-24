import React from 'react';

import TopHeader from '../TopHeader/TopHeader';
import BottomHeader from '../BottomHeader/BottomHeader';

function Layout({ children }) {
  return (
    <>
        <TopHeader />
        <main>
            {children}
        </main>
        <BottomHeader />
    </>
  )
}

export default Layout