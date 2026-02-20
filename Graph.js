const cy = cytoscape({
    // Container element
    container: document.getElementById("cy"),

    // Elements in the graph (nodes and edges)
    elements: [
        // Sample data
        { data: { id: "a" } }, // Node a
        { data: { id: "b" } }, // Node b
        { data: { id: "ab", source: "a", target: "b" } }, // Edge from a to b
    ],

    // Style definitions
    style: [
        {
        selector: "node",
        style: {
            "background-color": "#666",
            label: "data(id)",
        },
        },
        {
        selector: "edge",
        style: {
            width: 2,
            "line-color": "#999",
            "curve-style": "bezier", // Important: set edge curve style
        },
        },
    ],

    // Layout configuration
    layout: {
        name: "grid", // Grid layout
        rows: 2, // Optional: specify number of rows
        cols: 2, // Optional: specify number of columns
    },

    // Performance-related configuration
    minZoom: 0.1, // Minimum zoom level
    maxZoom: 10, // Maximum zoom level
    wheelSensitivity: 0.2, // Mouse wheel sensitivity
    pixelRatio: "auto", // Pixel ratio, can be a number or 'auto'
});