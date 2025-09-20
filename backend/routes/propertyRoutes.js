router.get('/properties', async (req, res) => {
    try {
        const properties = await Property.find(); // Assuming Property is your model
        res.json(properties.map(property => ({
            ...property.toObject(),
            imageUrl: property.imageUrl // Ensure imageUrl is included
        })));
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch properties' });
    }
});
