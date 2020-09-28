$(function () {

    // Initialize Cloud Firestore through Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyA5xApoPAuYlImx_Wa8mlQPl-peMFJvwC4",
        authDomain: "pswmngr-cf09b.firebaseapp.com",
        databaseURL: "https://pswmngr-cf09b.firebaseio.com",
        projectId: "pswmngr-cf09b",
        storageBucket: "pswmngr-cf09b.appspot.com",
        messagingSenderId: "961780853033",
        appId: "1:961780853033:web:f265c2d9de8e519c166f38"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  
    var db = firebase.firestore();

  
    let domain
    //chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = window.location.href;



    if (url.indexOf("://") > -1) domain = url.split('/')[2];
    else domain = url.split('/')[0];

    domain = domain.split(':')[0];

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

        // const usernameKey = domain + 'username';
        // const passwordKey = domain + 'password';
        let userField = $("#login_field") || $("#username")
        let passField = $("#password") || $("#pass")

        // chrome.storage.sync.get([usernameKey, passwordKey], function (items) {
        //     
        //     userField.val(items[usernameKey])
        //     passField.val(items[passwordKey])
        // });

        //sendResponse({status: "done"});


        // using firebase 
        db.collection("Accounts").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                const data = doc.data();   
               // alert("Content from cloud: "+ JSON.stringify(data))
              // if(domain === data.url){
                userField.val(data.accountN)
                passField.val(data.accountPas)
              // }
            });
        });

    });

})