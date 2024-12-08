import React from 'react'
import { WorldMap } from './ui/world-map'
import { LampDemo } from './ui/lamp';

const Header = () => {
    const dots = [
        {
          start: { lat: 37.7749, lng: -122.4194 }, 
          end: { lat: 48.8566, lng: 2.3522 }, 
        },
        {
          start: { lat: 28.6139, lng: 77.209 },
          end: { lat: -33.8688, lng: 151.2093 }, 
        },
        {
          start: { lat: 34.0522, lng: -118.2437 }, 
          end: { lat: 35.6895, lng: 139.6917 }, 
        },
      ];

      return (
        <div>
          <LampDemo />
          <div className="py-2">
            {/* Reduced padding with Tailwind (e.g., 2 units = 0.5rem) */}
            <WorldMap dots={dots} lineColor="#FF5733" theme="dark" />
          </div>
        </div>
      );
      
}

export default Header
