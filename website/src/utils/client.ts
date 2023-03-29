const base_url = window.location.port == "5173" ? "http://localhost:8080/api" : "/api";
// const base_url = "/api";

//#region | Requests
const post = async (route="/", body={})=>{
    const res = await fetch(base_url + route, {
        method: "POST",
        // mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(body),
    });

    let data = null;

    try {
        data = await res.json();
    } catch {}

    return { ok: res.ok, status: res.status, data }
}

const get = async (route="/")=>{
    const res = await fetch(base_url + route, {
        credentials: "include",
        // mode: "no-cors",
    });

    let data = null;

    try {
        data = await res.json();
    } catch {}

    return { ok: res.ok, status: res.status, data }
}
//#endregion

//#region | Setup user
const login = async (uid): Promise<GoogleAuthResponse> =>{
    return await post("/user/login", { uid });
}

const setName = async (username): Promise<MessageAndData> =>{
    return await post("/user/set-name", { username });
}

const getSelf = async (): Promise<GetSelf>=>{
    return await get("/user/self");
}
//#endregion

//#region | Logs
const getLogs = async (): Promise<ClientResult<{ logs: { date: string, content: string }[] }>>=>{
    return await get("/user/logs");
}
//#endregion

//#region | Art Stuff
const publishArt = async (data: string)=>{
    return await post("/art/publish-art", { data });
}

const artExists = async (data: string): Promise<ClientResult<{ exists: boolean, for_sale: boolean, cost: number, owner: string }>>=>{
    return await get(`/art/exists/${data}`);
}

const authGallery = async (): Promise<ClientResult<{ gallery: ArtData[] }>> =>{
    return await get(`/art/auth-gallery`);
}

const getArtByFilter = async (filter: string, page_size: number, page: number): Promise<ClientResult<{ result: ArtData[] }>> =>{
    return await get(`/art/filter-by/${filter}/${page_size}/${page}`);
}

const rateArt = async (type: string, data: string): Promise<ClientResult<{ swap_rating: boolean }>> =>{
    return await post("/art/rate-art", { type, data });
}

const purchaseArt = async (data: string): Promise<ClientResult<{}>> =>{
    return await post("/art/purchase", { data });
}

const setArtCost = async (data: string, cost: number): Promise<ClientResult<{}>> =>{
    return await post("/art/set-cost", { data, cost });
}

const getUserGallery = async (username: string): Promise<ClientResult<{ gallery: ArtData[], following: boolean }>> =>{
    return await get(`/art/gallery/${username}`);
}

const showArt = async (data: string): Promise<ClientResult<{ art: ArtData }>> =>{
    return await get(`/art/`)
}

const threeRandom = async (): Promise<ClientResult<{ result: ArtData[] }>> =>{
    return await get("/art/three-random");
}
//#endregion

//#region | Following Stuff
const toggleFollow = async (username: string): Promise<ClientResult<{ type: ("follow"|"unfollow") }>> =>{
    return await post("/follow/toggle-follow", { username });
}

const getFollowingPopular = async (): Promise<ClientResult<{ results: FollowingTopThree[] }>> =>{
    return await get("/follow/following-popular");
}
//#endregion

export default {
    login,
    setName,
    getSelf,
    publishArt,
    artExists,
    authGallery,
    getArtByFilter,
    rateArt,
    purchaseArt,
    setArtCost,
    getUserGallery,
    toggleFollow,
    getFollowingPopular,
    threeRandom,
    getLogs
}