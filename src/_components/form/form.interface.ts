import {FormHTMLAttributes, DetailedHTMLProps} from 'react';

export type IFormProps = FormHTMLAttributes<HTMLFormElement>;

export interface IFormExtendProps
    extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
    > {
    formName?: string;
}
