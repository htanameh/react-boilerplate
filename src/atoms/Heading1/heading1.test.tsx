import * as React from 'react';
import { shallow } from 'enzyme';
import Heading1 from './index';

test('heading1 has title', () => {
  const heading1 = shallow(<Heading1 text="test" />);
  expect(heading1.text()).toEqual('test');
});
