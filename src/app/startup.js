import PricesEs from './api/prices_es';
import store from './redux/store';
import { pricesUpdate } from './redux/modules/price';

const startup = () => {
    PricesEs.onMessage(message => {
        store.dispatch(pricesUpdate(message))
    });
};

export default startup;