
const baseUrl = 'http://localhost:3030/users/';

export const login = async (credentals) => {

    try {
        let response = await fetch(`${baseUrl}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentals)
        })

        if (response.ok) {
            let result = await response.json();
            console.log(result);
            return result;
        }

    } catch (error) {
        console.log(error);
    }

}