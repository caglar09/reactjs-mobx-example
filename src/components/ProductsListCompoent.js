import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { TabContent, TabPane, Row, Col, CardText, Card, CardTitle, CardImg } from 'reactstrap';
import { db } from '../firebase';

@inject('MainStore')
@observer
export default class ProductsListCompoent extends Component {
    componentDidMount() {
        db.collection("products")
            .get()
            .then((snapshot) => {
                const _products = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    _products.push(data);
                });
                this.props.MainStore.setProducts(_products);
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (

            <div>
                <TabContent activeTab={this.props.MainStore.state.currentTab}>
                    {
                        this.props.MainStore.state.tabList.map((val, index) => {
                            return (

                                <TabPane tabId={val.id} key={val.id}>
                                    {this.props.MainStore.state.products.filter(s => s.tabId == val.id).map((_val, _index) => {
                                        return (
                                            <Row key={_val.id}>
                                                <Col sm="12">
                                                    <Card body>
                                                        <CardImg src={_val.productImage} style={{ width: "100%", height: 300 }} />
                                                        <CardTitle>{_val.productTitle}</CardTitle>
                                                        <CardText>
                                                            {_val.productText}
                                                        </CardText>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        )
                                    })}

                                </TabPane>
                            )


                        })
                    }

                </TabContent>
            </div>
        )
    }
}
