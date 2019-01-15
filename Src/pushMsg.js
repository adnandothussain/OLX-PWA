//=====================================================================//
//===================HANDLE ALL PUSH NOTIFICATIONS HERE=================//
//=====================================================================//
firebase.messaging().onMessage(payload => {
  const { notification } = payload;
  iziToast.show({
    title: notification.title,
    message: notification.body,
    theme: "light",
    iconUrl: null,
    backgroundColor: "#ffffff",
    transitionIn: "fadeInUp",
    transitionOut: "fadeOut",
    transitionInMobile: "fadeInUp",
    transitionOutMobile: "fadeOutDown",
    progressBarColor: "#72bc83",
    timeout: 5000
  });
});
//=====================================================================//
//===================***********************************=================//
//=====================================================================//
