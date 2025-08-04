const imageLoaded = (url: string) => {
    return new Promise((res, rej) => {
        try {
            const image = new Image();

            image.onload = () => {
                res(image);
            }

            image.src = url;
        } catch (error) {
            rej(error)
        }
    })

}

export default imageLoaded;
