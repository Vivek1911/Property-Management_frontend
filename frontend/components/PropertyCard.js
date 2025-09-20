import React from 'react';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <img src={property.imageUrl} alt={property.name} className="property-image" />
        </div>
    );
};

export default PropertyCard;