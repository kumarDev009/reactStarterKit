import React, { useContext, useEffect } from 'react';
import { Layout } from 'antd';

import CustomSidebar from './sidebar';
import CustomHeader from './header';
import CustomContent from './content';
import CustomFooter from './footer';

import { CustomLoadingIcon } from '../../Components/FormFields/CustomLoadingIcon';
import { AppContext } from '../../services/context/appContext';

export default function LayoutElement() {
    const { hasLoading, setHasLoading } = useContext(AppContext);

    useEffect(()=>{
        setTimeout(()=>{
            setHasLoading(false)
        }, 3000)
    },[hasLoading])

    return (
        <CustomLoadingIcon loading={hasLoading} size = "large" className="text-center" message="Saving">
        <Layout className='vh-100'>
            <CustomSidebar />
            <Layout >
                <CustomHeader />
                <CustomContent />
                <CustomFooter />
            </Layout>
        </Layout>
        </CustomLoadingIcon>
    )
}
