export const signUp = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5000/user",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
    });
    const data = await response.json();
    console.log(data.newUser.username);
    setter(data.newUser.username)
    } catch (error) {
        console.log("signUp error")
    }
};

export const deleteUser = async (username, email, password, deleteAccount) => {
    try {
        const response = await fetch("http://localhost:5000/delete",{
            method: "DELETE",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
    });
    const data = await response.json();
    console.log(data);
    deleteAccount(data)
    } catch (error) {
        console.log("remove user error")
    }
};

export const update = async (username, email, updateInfo) => {
    console.log(username, email, updateInfo)
    try {
        const response = await fetch("http://localhost:5000/update",{
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                // "password": password
            })
    });
    const data = await response.json();
    console.log(data);
    updateInfo(data.message)
    } catch (error) {
        console.log(error)
    }
};

export const allUsers = async (username, getter) => {
    console.log(username)
    try {
        const response = await fetch("http://localhost:5000/list",{
            method: "GET",
            headers: {"Content-Type":"application/json"}
        });
    const data = await response.json();
    console.log(data);
    getter(data.allUsers)
    } catch (error) {
        console.log(error)
    }
};

export const login = async (username, password, setUser) => {
    try {
        const response = await fetch("http://localhost:5000/login", {
        method: "POST", 
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    const data = await response.json()
    console.log(data);
    setUser(data.user.username)
    } catch(err) {
        console.log(err, "incorrect details");
    }
}