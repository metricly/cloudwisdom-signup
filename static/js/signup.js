document.getElementById("companyError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  var queryStr = window.location.search;
  var paramPairs = queryStr.substr(1).split('&');
  var params = {};
  for (var i = 0; i < paramPairs.length; i++) {
    var parts = paramPairs[i].split('=');
    params[parts[0]] = parts[1];
  }
  if (params.error) {
    if (params.error == 1) {
      document.getElementById("companyError").innerHTML = "(Whoops, that company name is taken!)";
    }
    if (params.error == 2) {
      document.getElementById("emailError").innerHTML = "(An account with that email already exists)";
    }
    if (params.error == 3) {
      document.getElementById("nameError").innerHTML = "(Please enter your first and last name)";
      document.getElementById("nameError").classList.remove("d-none");
    }
    if (params.error == 4) {
      document.getElementById("captchaError").innerHTML = "Complete the captcha below. Disable ad-blocking if you aren't able to see it!";
    }
    if (params.error == 5) {
      $('#errorMessage').html('There was an error submitting the form. If it persists, please chat with us.');
      $('#errorModal').modal('show');
    }
    if (params.error == 6) {
      $('#errorMessage').html('Unfortunately in order to comply with US laws and regulations, we don’t allow sign-ups from your location.');
      $('#errorModal').modal('show');
    }
  }

  function addFields() {
    var form = document.getElementById("signupForm");
    var input = document.createElement("input");
    input.hidden = "true";
    input.type = "text";
    input.name = "fullName";
    input.value = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    form.appendChild(input);
    var input = document.createElement("input");
    input.hidden = "true";
    input.type = "text";
    input.name = "utmCampaign";
    input.value = getCookie('utm_campaign');
    form.appendChild(input);
    var input = document.createElement("input");
    input.hidden = "true";
    input.type = "text";
    input.name = "utmKeyword";
    input.value = getCookie('utm_keyword');
    form.appendChild(input);
    var input = document.createElement("input");
    input.hidden = "true";
    input.type = "text";
    input.name = "utmMedium";
    input.value = getCookie('utm_medium');
    form.appendChild(input);
    var input = document.createElement("input");
    input.hidden = "true";
    input.type = "text";
    input.name = "utmSource";
    input.value = getCookie('utm_source');
    form.appendChild(input);
    var input = document.createElement("input");
    input.hidden = "true";
    input.type = "text";
    input.name = "fullStorySessionUrl";
    input.value = FS ? FS.getCurrentSessionURL() : '';
    form.appendChild(input);
  }