
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

export const register = async (registrationData) => {

    try {
        let response = await fetch(`${baseUrl}register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registrationData)
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

export const logout = async (accessToken) => {
    try {
        let response = await fetch(`${baseUrl}logout`, {
            method: 'GET',
            headers: {
                "X-Authorization": accessToken
            }
        });

        if (response.status !== 200) {
            throw new Error('Unauthorized');
        }

    } catch (error) {
        console.error('Logout error:', error);
        throw error;
    }
};
