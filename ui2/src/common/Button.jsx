import React from 'react';
import { Button, Tooltip, Icon } from 'antd';
import './Button.css';

export const AppButton = ({ label, className, isLoading, tooltipText, ...props }) => (
  <Tooltip title={tooltipText}>
    <Button className={`${className} app-btn`} loading={isLoading} {...props}>
      {label}
    </Button>
  </Tooltip>
);

export const AppCheckboxButton = ({ label, id, className, icon, ...props }) => (
  <label htmlFor={`input${id}`} key={id} className="testtt">
    <input id={`input${id}`} type="checkbox" className="input-testtt" {...props} />
    <div className="testtt-label table-button">
      <div>{label}</div>
      <Icon type={icon} />
    </div>
  </label>
);
