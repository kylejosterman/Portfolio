module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                blue: {
                    lighter: "#4DA8DA",
                    light: "#007CC7",
                    dark: "#12232E",
                    shadowDark: "#203647",
                    shadowLight: "#EEFBFB",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
