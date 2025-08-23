import type { Menu } from "../Menu"

export type MenuContextType = {
    menu: Menu,
    handler: (callback: (prev: Menu) => Menu) => void,
    SaveChange: () => void,
    LeaveAccount: () => void,
    Initialize: () => void,
}