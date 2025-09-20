const PropertyDetails = ({ property }) => {
    return (
        <div className="property-details">
            {/* ...existing code... */}
            <div className="basic-info">
                <h3>Basic Information</h3>
                <p>Title: {property.title}</p>
                <p>Description: {property.description}</p>
                <p>Address: {property.address}</p>
                <p>Price: {property.price}</p>
            </div>
            {/* Removed User Details Section */}
        </div>
    );
};