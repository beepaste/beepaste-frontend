import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from '../index';
import { PGP_MODAL } from '../../../containers/App/constants';
describe('modal', () => {
  const title = 'my custom title';
  const acceptSpy = jest.fn();
  it('should render my custom title', () => {
    const renderedComponent = shallow(
      <Modal title={title} />
    );
    expect(renderedComponent.contains(title)).toBe(true);
  });
  it('should not throw if no onAccept provided', () => {
    const renderedComponent = shallow(
      <Modal />
    );
    const instance = renderedComponent.instance();
    expect(instance.AcceptForm).not.toThrow();
  });
  // it('should call onAccept when provided', () => {
  //   const renderedComponent = shallow(
  //     <Modal onAccept={acceptSpy} />
  //   );
  // });
  it('should render label2 if twoValue is true', () => {
    const renderedComponent = shallow(
      <Modal label2={title} twoValue />
    );
    expect(renderedComponent.contains(title)).toBe(true);
  });
});
