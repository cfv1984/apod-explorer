import("../css/main.scss");

onload = () => {
    const removeLoader = () => {
        const loader = document.querySelector(".loader");
        if (loader) {
            loader.parentNode.removeChild(loader);
        }
    };

    import("./reactInit.jsx").then(({default: ok}) => ok());

    removeLoader();
};
