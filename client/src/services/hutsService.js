const serverUrl = "http://localhost:3030/data/huts";

const buildOptions = (methodType, data, xAuth) => {
    const options = {};

    options.method = methodType;

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            "Content-Type": "application/json"
        }
    }

    if (xAuth) {
        options.headers = {
            ...options.headers,
            "X-Authorization": xAuth
        }

    }
    return options;

}

export const getHuts = async () => {
    try {
        const response = await fetch(serverUrl);
        if (response.ok) {
            const result = await response.json();
            const hutsList = Object.values(result);
            console.log(hutsList);
            return hutsList;
        }

    } catch (error) {
        console.log(error)
    }

}

export const getChoosenHut = async (id) => {
    try {
        let uri = `${serverUrl}/id_${id.toString()}`;
        if (id.length > 4) {
            uri = uri.replace("id_", "");
        }
        const response = await fetch(uri);
        if (response.ok) {
            const choosenHut = await response.json();
            console.log(choosenHut);
            return choosenHut;
        }

    } catch (error) {
        console.log(error)
    }
}

export const postHut = async (methodType, publication, accessToken) => {
    try {
        const response = await fetch(serverUrl, buildOptions(methodType, publication, accessToken));
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            return result;
        }
    } catch (error) {
        console.log(error);
    }
}