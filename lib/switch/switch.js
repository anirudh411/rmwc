import React from 'react';
import ToggleBase from '../_base/toggle-component-base';
import FormField from '../form-field/form-field';
import classNames from 'classnames';

import { simpleComponentFactory } from '../_base/simple-component-factory';

export const SwitchRoot = simpleComponentFactory('SwitchRoot', {
	className: 'mdc-switch'
});

export const SwitchNativeControl = simpleComponentFactory('SwitchNativeControl', {
	tag: 'input',
	classNames: 'mdc-switch__native-control',
	defaultProps: {
		type: 'checkbox'
	}
});

export const SwitchBackground = simpleComponentFactory('SwitchBackground', {
	classNames: 'mdc-switch__background'
});

export const SwitchKnob = simpleComponentFactory('SwitchKnob', {
	classNames: 'mdc-switch__knob'
});

export const SwitchLabel = simpleComponentFactory('SwitchLabel', {
	tag: 'label'
});

export class Switch extends ToggleBase {
	render() {
		const { label, id, children, apiRef, ...rest } = this.props;
		const labelId = id || this.generatedId;

		const radio = (
			<SwitchRoot className={classNames({'mdc-switch--disabled': rest.disabled})}>
				<SwitchNativeControl id={labelId} />
				<SwitchBackground>
					<SwitchKnob/>
				</SwitchBackground>
			</SwitchRoot>
		);

		/**
		 * We have to conditionally wrap our checkbox in a formfield
		 * If we have a label
		 */
		if (label.length || children) {
			return (
				<FormField>
					{ radio }
					<SwitchLabel id={labelId + 'label'} htmlFor={labelId}>
						{ label }{ children }
					</SwitchLabel>
				</FormField>
			);
		} else {
			return radio;
		}
	}
}

export default Switch;