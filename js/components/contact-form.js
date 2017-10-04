var ContactForm = React.createClass({
    propTypes: {
        value: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired
    },
    onNameChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}));
    },

    onEmailChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.value, {email: e.target.value}));
    },

    onDescriptionChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.value, {description: e.target.value}));
    },

    onSubmit: function(e){
        e.preventDefault();
        this.props.onSubmit();
    },

    render: function(){
        var errors = this.props.value.errors || {};


        return(
            React.createElement('form', {
                    onSubmit: this.onSubmit,
                    className: 'ContactForm'
                },
                React.createElement('input', {
                    id: 'name',
                    type: 'text',
                    llassName: errors.name && 'ContactForm-error',
                    placeholder: 'name (required)',
                    value: this.props.value.name,
                    onChange: this.onNameChange
                }),
                React.createElement('input', {
                    id: 'email',
                    type: 'text',
                    className: errors.email && 'ContactForm-error',
                    placeholder: 'email',
                    value: this.props.value.email,
                    onChange: this.onEmailChange
                }),
                React.createElement('textarea', {
                    id: 'description',
                    placeholder:'description',
                    value: this.props.value.description,
                    onChange: this.onDescriptionChange
                }),
                React.createElement('button', { type: 'submit'}, 'submit'))

        );
    }
});
