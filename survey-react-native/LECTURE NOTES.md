# React Native

**Time: 1:30** 

**FormativeEducation Deck:** <https://formative.education/projects/47/edit>


### Learning Goals:
- Describe React Native and Expo in the context of cross-platform application development
- Use React Native to build a Native UI
- Send Push Notifications to a React Native Application



### Activation 

##### Time: 0:00
- React Native Testimonials?



### Learning Goal 1: Describe React Native and Expo in the context of cross-platform application development

##### Time: 0:20

##### Demonstrate 
- Define Cross-Platform development
- Apache Cordova 
  - Bundled a JavaScript app with a browser (bad performance, ugly)
- React Native 
  - Call's on Native Code (better performance)



### Learning Goal 2: Use React Native to build a Native UI

##### Time: 0:30

##### Demonstrate
- We don't have html elements
- So we use React Native Elements
  - View
  - Text
  - Image
  - Button

> views/Login.js

```
 <View>
            <Text>Login</Text>
            <View>
                <Text>Username</Text>
                <TextInput value={form.username} onChangeText={ username => changeForm({ ...form, username: username })} />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput value={form.password} onChangeText={ password => changeForm({ ...form, password: password })} />
            </View>
            <Button  title="Login" onPress={handleSubmit} />
        </View>
```





### Learning Goal 3: Send Push Notifications to a React Native Application

##### Time: 0:50

##### Demonstrate

- The over-arching lifecycle of a push notification
- Getting permission
- Saving the token
  - frontend

> registerDeviceForNotifications.js

```
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
```

* Sending the notifications

> dogs_controller.rb

```
dog.user.devices.each do |device|
      message = {
        to: device.push_token_id,
        channelId: "default",
        sound: "default",
        title: "Someone liked your dog #{dog.name}",
        body: "They have been liked #{dog.likes} time(s)"
      }
      RestClient.post("https://exp.host/--/api/v2/push/send", message.to_json(), {
        Accept: "application/json",
        'Accept-encoding': "gzip, deflate",
        'Content-Type': "application/json",
      })
    end
```





##### Vocabulary

- 