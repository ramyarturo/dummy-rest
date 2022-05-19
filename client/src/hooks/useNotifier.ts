import { useNotificationHandler } from "../providers/NotificationProvider";
import { notificationBuilder } from "../types/notification";



export default function useNotifier() {
    const { show, dismiss } = useNotificationHandler()
    return {
        showError: (message: string) => {
            const notification = notificationBuilder()
                .message(message)
                .toastMode()
                .errorType()
                .build()
            show(notification)
        },
        showLoading: (message: string) => {
            const notification = notificationBuilder()
                .message(message)
                .toastMode()
                .loadingType()
                .build()
            show(notification)
        },
        dismiss
    }
}
