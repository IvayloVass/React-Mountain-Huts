const serverUrl = "http://localhost:3030/jsonstore/huts";

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

export const postHut = async (publication) => {
    try {
        const response = await fetch(serverUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(publication)
        });
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            return result;
        }
    } catch (error) {
        console.log(error);
    }
}