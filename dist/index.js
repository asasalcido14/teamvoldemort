$(document).ready(function () {
  const a = $("form.login"),
    b = $("#user-input"),
    c = $("#password-input");
  let d,
    e = "";
  $("#submit").on("click", function () {
    (e = { userName: b.val().trim(), password: c.val().trim() }),
      console.log(e.userName),
      console.log(e.password),
      $.ajax({ url: "/api/allusers", method: "GET" })
        .then(function (a) {
          console.log("should be all data", a);
          for (let b = 0; b < a.length; b++)
            e.userName === a[b].user_name && e.password === a[b].pwd
              ? (console.log("matches"), (d = 1))
              : console.log("go to sign up");
          1 === d
            ? (console.log(d), window.location.replace("/home"))
            : alert("Incorrect Username or Password!");
        })
        .catch(function (a) {
          console.log(a);
        });
  });
});
