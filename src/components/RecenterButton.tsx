import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

interface RecenterButtonProps {
    onRecenter: () => void;
}

const RecenterButton: React.FC<RecenterButtonProps> = ({ onRecenter }) => {
    return (
        <button 
            onClick={onRecenter} 
            style={{
                position: 'absolute',
                bottom: '20%',  // Adjusted to align with Mapbox controls
                left: '10px',     // Keeps it near default controls
                width: '32px',    
                height: '32px',  
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white', 
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '4px', 
                cursor: 'pointer',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                transition: 'background 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f3f3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
        >
            <FontAwesomeIcon icon={faGlobe} style={{ color: '#333', fontSize: '16px' }} />
        </button>
    );
};

export default RecenterButton;
