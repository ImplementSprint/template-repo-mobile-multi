import { detox, device } from 'detox';

beforeAll(async () => {
  await detox.init();
}, 300000);

beforeEach(async () => {
  await device.launchApp({ newInstance: true });
});

afterAll(async () => {
  await detox.cleanup();
});