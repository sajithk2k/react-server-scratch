import { useState, Suspense } from 'react';

import { useServerResponse } from './Cache.client';
import { LocationContext } from './LocationContext.client';

export default function Root() {
    return (
        <Suspense fallback={null}>
            <Content />
        </Suspense>
    );
}

function Content() {
    const [location, setLocation] = useState({
        selectedId: null,
        page: 'home',
        pageNo: 1
    });
    const response = useServerResponse(location);
    return (
        <LocationContext.Provider value={[location, setLocation]}>
            {/* CLIENT COMPONENT !!! */}
            {response.readRoot()}
        </LocationContext.Provider>
    );
}
