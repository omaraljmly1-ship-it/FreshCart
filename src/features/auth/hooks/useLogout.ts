import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { clearToken } from "../server/auth.action"
import { setAuthInfo } from "../store/auth.slice"
import { toast } from "react-toastify"

export default function useLogout() {
    const dispatch = useDispatch()
    const router = useRouter()
    const logout = async () => {
        await clearToken()
        dispatch(setAuthInfo({ isAuthenticated: false, userInfo: null }))
        router.push("/signin");
        router.refresh()
        toast.success("Logout successfully")
    }

    return { logout }
}