import nock from 'nock';
import { TsModuleBase, TsModule } from '../src';
function setupResponses(client, responses) {
  const configureResponse = () => {
    const response = responses.shift();
    if (response) {
      response();
    }
  };
  client.interceptors.response.use(
    (result) => {
      configureResponse();
      return result;
    },
    (error) => {
      configureResponse();
      return Promise.reject(error);
    }
  );
  configureResponse();
}

describe('axiosRetry(axios, { retries, retryCondition })', () => {
  beforeEach(() => {
    nock.disableNetConnect();
  });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  describe('when the response is successful', () => {
    it('should resolve with it', (done) => {
      const tsBase = new TsModuleBase('base class');
      const ts = new TsModule('extend class');
      tsBase.sayPublic();
      ts.say();
      ts.sayPublic();
      done();
    });
  });
});
