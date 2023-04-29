interface GoogleAuthResponse {
    ok: boolean
    status: number
    data?: {
        msg: string
        set_username?: boolean
        username?: string
        coins?: number
    }
}

type AlertTheme = ("success" | "error" | "info")

interface Alert {
    theme: AlertTheme
    msg?: string
}

interface User {
    username: string
    coins: number
}

interface MessageAndData {
    ok: boolean
    status: number
    data?: {
        msg: string
        username?: string
        coins?: number
    }
}

interface ClientResult<T> {
    ok: boolean
    status: number
    data: {
        msg: string
    } & T
}

interface ArtData {
    data: string
    artist: string
    owner: string
    cost: number
    likes: number
    dislikes: number
    user_rating?: ("likes" | "dislikes")
    palette?: string
}

interface FollowingTopThree {
    username: string
    top_three: ArtData[]
}

type GetSelf = ClientResult<{ username: string; coins: number; daily_gain: number; hours_to_bonus: number; palettes?: Palettes }>

type Palette = [string, string, string];

type Palettes = {
    [name: string]: number
}

type PaletteEdit = {
    on: boolean
    art_data: ArtData
}