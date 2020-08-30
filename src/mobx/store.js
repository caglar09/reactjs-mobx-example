import { observable, action } from 'mobx';

class MainStore {
    @observable state = {
        tabList: [],
        currentTab: 0,
        products: [],
    }



    @action changeTab(tab) {
        this.state.currentTab = tab;
    }

    @action setTabList(tabList = []) {
        this.state.tabList = tabList
    }

    @action setProducts(products = []) {
        this.state.products = products
    }
}

const store = new MainStore();

export default store;