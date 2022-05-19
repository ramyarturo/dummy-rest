import { createContext, useContext } from "react";
import { ToastContainer } from "react-toastify";
import { NotificationAction } from '../types/notification'
import { getNotifier } from "../utils/notifier";

const NotificationContext = createContext({} as NotificationAction)



export const useNotificationHandler = () => {
    return useContext(NotificationContext)
}
export default function NotificationProvider({ children }) {
    let toastDismiss = null
    const contextValue: NotificationAction = {
        show: (notification) => {
            const notifier = getNotifier(notification)
            toastDismiss = notifier.notify()
        },
        dismiss: () => {
            toastDismiss?.()
        }
    }

    return <NotificationContext.Provider value={contextValue}>
        {children}
        <ToastContainer />
    </NotificationContext.Provider>
}