import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return <p> A quantidade de itens na lista : {this.props.itens.length}</p>
    }
}

const mapStateToProps = state => ({
    itens: state.itens
})

export default connect(mapStateToProps, null )(Counter);