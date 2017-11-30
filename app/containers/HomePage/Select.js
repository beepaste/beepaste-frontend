import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    $(this.selectInput).material_select();
    $(this.selectInput).on('change', this._onChange);
  }

  componentDidUpdate() {
    $(this.selectInput).material_select();
  }

  componentWillUnmount() {
    $(this.selectInput).off('change', this._onChange);
  }

  _onChange(e) {
    this.props.onSelectChange(e);
  }

  render() {
    const { placeholder, defaultValue, children, id, onSelectChange, name, ...other } = this.props;

    let options = placeholder && !defaultValue ? [<option disabled key={idgen()}>{placeholder}</option>] : [];
    options = options.concat(React.Children.map(children, (child) =>
      React.cloneElement(child, { key: child.props.value })
    ));
    return (<div className="input-field col s12 m3">
      <i className={`fa prefix ${this.props.icon}`}></i>
      <select
        id={id} ref={(ref) => (this.selectInput = ref)} defaultValue={defaultValue} name={name}
      >
        {options}
      </select>
    </div>);
  }
}

Select.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.array,
  onSelectChange: PropTypes.func,
  defaultValue: PropTypes.any,
  name: PropTypes.string,
  id: PropTypes.string,
};
export default Select;
