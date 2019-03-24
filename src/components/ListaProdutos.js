import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as itensActions from '../actions/itens';
import { bindActionCreators } from 'redux';

class ListaProduto extends Component {

    salvar = (e) => {
        e.preventDefault();
        let obj = {
            nome: this.nome.value,
            preco : this.preco.value,
            id: Math.random(),
        }
        this.props.addNovoItem(obj);
    }

    render() {
        return(
            <div>
                <div>
                    <ul>
                        {this.props.listaItens.map(item => 
                            <li key={item.id}> {item.nome} </li>
                        )}
                    </ul>
                </div>
                <form onSubmit={this.salvar}>
                    <input type="text" ref={(input => this.nome = input)} />
                    <input type="text" ref={(input => this.preco = input)} />
                    <input type="submit" value="salvar" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(itensActions, dispatch)

const mapStateToProps = state => ({
    listaItens: state.itens
})
export default connect(mapStateToProps, mapDispatchToProps)(ListaProduto);