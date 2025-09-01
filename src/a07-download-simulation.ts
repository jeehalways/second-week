const downloadFile = (url: string, callback: (Message: string) => void): void => {
    setTimeout(() => {
        callback(`Downloaded data from ${url}`);
    }, 2000);
};

downloadFile("https://example.com/file", (message) => {
    console.log(message);
});