import React from 'react';
import { Layout } from 'antd';

import CustomSidebar from './sidebar';
import CustomHeader from './header';
import CustomContent from './content';
import CustomFooter from './footer';

export default function LayoutElement() {
    return (
        <Layout className='vh-100'>
            <CustomSidebar />
            <Layout >
                <CustomHeader />
                <CustomContent />
                <CustomFooter />
            </Layout>
        </Layout>
    )
}
