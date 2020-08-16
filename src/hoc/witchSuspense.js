import React, { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader';

export const witchSuspense = (Component) => {
    return (props) => {
       return  <Suspense fallback={<Preloader />}>
                 <Component {...props} />
               </Suspense>                             
            }
}