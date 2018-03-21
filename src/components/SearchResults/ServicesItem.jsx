import React from 'react';
import { translate } from 'react-i18next';
import './ServicesItem.css';

const ServicesItem = props => (
  <li className="services-item">
    <span className="services-item services-item_title">
      {props.index + 1}. {props.value.title}
    </span>
    <span className="services-item services-item_price">{props.value.bundle.price} zł</span>
    <span className="services-item services-item_date">{props.value.date} zł</span>
  </li>
);

export { ServicesItem };
export default translate()(ServicesItem);
