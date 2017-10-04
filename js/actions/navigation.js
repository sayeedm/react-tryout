function navigated() {
alert('here');
    normalizedHash = window.location.hash.replace(/^#\/?|\/$/g, '');

    alert(normalizedHash);
    if (normalizedHash == '') {
        alert('here');
        startNavigating('/contacts')
    } else {
      alert('here');
        setState({location: normalizedHash.split('/'), transitioning: false});
    }

}

function startNavigating(newURI) {
    var currentURI = window.location.hash.substr(1);

    if (currentURI != newURI) {
        setState({transitioning: true});

        window.location.replace(
          window.location.pathname + window.location.search + '#' + newURI
        );
    }
}

window.addEventListener('hashchange', navigated, false);
