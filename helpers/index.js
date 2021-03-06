import jwtDecode from 'jwt-decode'
import cookieparser from 'cookieparser'

export function getUserFromCookie (req) {
    if (req && req.headers && !req.headers.cookie) return

    if (req && req.headers && req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie)
        const accessTokenCookie = parsed.access_token
        if (!accessTokenCookie) return

        const decodedToken = jwtDecode(accessTokenCookie)
        if (!decodedToken) return

        return decodedToken
    }
}
