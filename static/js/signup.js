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
    // Fire Google Ads conversion tag
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = url;
        }
      };
      gtag('event', 'conversion', {
          'send_to': 'AW-973191113/eWu6CIHM2LsBEMnvhtAD',
          'event_callback': callback
      });
      return false;
    }

    // Fill out the form details
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
    input.value = Cookies.get('utm_campaign', { domain: 'virtana.com' });
    form.appendChild(input);
    var input = document.createElement("input");
    input.hidden = "true";
    input.type = "text";
    input.name = "utmKeyword";
    input.value = Cookies.get('utm_keyword', { domain: 'virtana.com' });
    form.appendChild(input);
    var input = document.createElement("input");
    input.hidden = "true";
    input.type = "text";
    input.name = "utmMedium";
    input.value = Cookies.get('utm_medium', { domain: 'virtana.com' });
    form.appendChild(input);
    var input = document.createElement("input");
    input.hidden = "true";
    input.type = "text";
    input.name = "utmSource";
    input.value = Cookies.get('utm_source', { domain: 'virtana.com' });
    form.appendChild(input);
    var input = document.createElement("input");
    input.hidden = "true";
    input.type = "text";
    input.name = "fullStorySessionUrl";
    input.value = FS ? FS.getCurrentSessionURL() : '';
    form.appendChild(input);
  }