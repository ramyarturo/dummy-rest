export enum NotificationType {
    Success, Error, Info, Loading
}
export enum NotificationMode {
    Toast
}
export interface Notification {
    message: string,
    type: NotificationType,
    mode: NotificationMode
}
export interface NotificationAction {
    show: (notification: Notification) => void,
    dismiss: () => void
}

export class NotificationBuilder {
    private _notification = {} as Notification

    message(message: string) {
        this._notification.message = message
        return this
    }
    successType() {
        this._notification.type = NotificationType.Success
        return this
    }
    errorType() {
        this._notification.type = NotificationType.Error
        return this
    }
    infoType() {
        this._notification.type = NotificationType.Info
        return this
    }
    loadingType() {
        this._notification.type = NotificationType.Loading
        return this
    }
    toastMode() {
        this._notification.mode = NotificationMode.Toast
        return this
    }
    build() {
        return this._notification
    }
}
export const notificationBuilder = () => new NotificationBuilder()