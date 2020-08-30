import React, { Component } from 'react'
import TabListComponent from './components/Tablist'
import ProductsListCompoent from './components/ProductsListCompoent'
import { inject, observer } from 'mobx-react';


@inject('MainStore')
@observer
export class Home extends Component {
    render() {
        return (
            <div>
                <TabListComponent />
                <ProductsListCompoent />
            </div>
        )
    }
}

export default Home
