import { useState, Suspense } from 'react';

import { useServerResponse } from './Cache.client';
import { LocationContext } from './LocationContext.client';

export default function App() {
    return (
        <Suspense fallback={null}>
        <Content/>
        </Suspense>
    )
}

function Content(){
    const [location, setLocation] = useState({
        selectedId: null,
        page: 1,
        pageNo: 'home',
        isLoading: false
      });
      const response = useServerResponse(location);
      return (
        <LocationContext.Provider value={[location, setLocation]}>
          <h1>From App.client</h1>
          {response.readRoot()}
        </LocationContext.Provider>
      );
}

// function Content() {
//     const [location, setLocation] = useState({
//         selectedId: null
//     });
//     const response = useServerResponse(location);
//     return (
//         <LocationContext.Provider value={[location, setLocation]}>
//             CLIENT COMPONENT !!!
//             {response.readRoot()}
//         </LocationContext.Provider>
//     );
// }
