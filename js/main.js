var CONTACT_TEMPLATE = {name: "", email: "", description: "", errors: null};

function updateNewContact(contact) {
    setState({ newContact: contact });
}

function submitNewContact(){
    var contact = Object.assign({}, state.newContact, {key: state.contacts.length + 1, errors: {}});
    if (!contact.name) {
        contact.errors.name = ["Please enter your new contact's name"];
    }
    if (!/.+@.+\..+/.test(contact.email)) {
        contact.errors.email = ["Please enter your new contact's email"];
    }

    setState(
      Object.keys(contact.errors).length === 0 ? {
                newContact: Object.assign({}, CONTACT_TEMPLATE),
                contacts: state.contacts.slice(0).concat(contact),
              } : { newContact: contact }
    );

}

var state = {
    contacts: [
        { key: '1', name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn" },
        { key: '2', name: "Jim", email: "jim@example.com" },
    ],
    newContact: {name: "", email: "", description: ""},
    location: null
};

// Make the given changes to the state and perform any required housekeeping
function setState(changes) {
    var component;

    Object.assign(state, changes);
    if (!state.transitioning) {
        ReactDOM.render(
            React.createElement(Application, state),
            document.getElementById('react-app')
        );
    }

}



navigated();
