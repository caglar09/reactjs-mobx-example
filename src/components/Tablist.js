import React from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap'
import { inject, observer } from 'mobx-react';
import { db } from '../firebase';

@inject('MainStore')
@observer
class TabListComponent extends React.Component {
    componentDidMount() {
        db.collection("tabLists")
            .get()
            .then((snapshot) => {
                const _tabLists = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    _tabLists.push(data);
                });
                this.props.MainStore.setTabList(_tabLists);
                _tabLists.length > 0 && this.props.MainStore.changeTab(_tabLists[0].id);
            })
            .catch((error) => console.log(error));
    }
    render() {

        return (<div>
            <Nav tabs>
                {this.props.MainStore.state.tabList.length > 0 && this.props.MainStore.state.tabList.map((val, index) => {
                    return (
                        <NavItem key={index} className={this.props.MainStore.state.currentTab === val.id ? "active" : ""}
                            onClick={() => this.props.MainStore.changeTab(val.id)}
                        >
                            <NavLink>
                                {val.tabName}
                            </NavLink>
                        </NavItem>
                    )
                })}


            </Nav>
        </div>
        )
    }
}
export default TabListComponent;