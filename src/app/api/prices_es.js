import config from '../config/config';

const PricesEventSourceApi = {
  _init: () => new EventSource(`${config.hostFull}/example`),

  onMessage: callback => {
    const connection = PricesEventSourceApi._init();

    connection.addEventListener('message', sseMessage => callback(JSON.parse(sseMessage.data)));

    connection.addEventListener('error', err => {
      console.error('Server disconnected', err);
      connection.close()
    })
  }

};

export default PricesEventSourceApi;

