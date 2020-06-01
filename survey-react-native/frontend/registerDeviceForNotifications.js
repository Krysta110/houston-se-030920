import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

export async function registerDeviceForNotifications() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

    if (status == 'granted') {
        let push_token_id = await Notifications.getExpoPushTokenAsync();

        fetch(`${process.env.REACT_NATIVE_BACKEND_URL}/profile/devices`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                push_token_id: push_token_id
            })
        })

        if (Platform.OS === 'android') {
            Notifications.createChannelAndroidAsync('default', {
                name: 'default',
                sound: true,
                priority: 'max',
                vibrate: [0, 250, 250, 250],
            });
        }

    }
}