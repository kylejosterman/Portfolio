module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                blue: {
                    lightest: "#59c6f3",
                    lighter: "#51a9dd",
                    light: "#3685d5",
                    dark: "#1f5bba",
                    darker: "#194eab",
                    darkest: "#0f3fa5",
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
