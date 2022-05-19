import {Id, toast, ToastOptions} from "react-toastify";
import {Notification, NotificationMode, NotificationType} from "../types/notification"

abstract class NotificationHandler {
    notification: Notification;

    constructor(notification: Notification) {
        this.notification = notification;
    }

    public abstract notify(): () => void
}

class ToastNotifier extends NotificationHandler {
    public notify() {
        if (this.notification.message == null) {
            return
        }

        const toastOptions: ToastOptions = {
            position: 'top-center',
            autoClose: 5000
        }
        let id: Id
        if (this.notification.type == NotificationType.Success) {
            id = toast.success(this.notification.message, toastOptions)
        } else if (this.notification.type == NotificationType.Error) {
            id = toast.error(this.notification.message, toastOptions)
        } else if (this.notification.type == NotificationType.Info) {
            id = toast.info(this.notification.message, toastOptions)
        } else if (this.notification.type == NotificationType.Loading) {
            id = toast.loading(this.notification.message, toastOptions)
        }
        return () => toast.dismiss(id)

    }
}

export const getNotifier = (notification: Notification): NotificationHandler => {
    const notifiers = {
        [NotificationMode.Toast]: new ToastNotifier(notification),
    }
    return notifiers[notification.mode]
}
