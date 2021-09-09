import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import { Router } from 'express';

describe('Rendering ', () => {
  it(' App should render without crushing', () => {
    shallow(<Router><App /></Router>);
  });
});
