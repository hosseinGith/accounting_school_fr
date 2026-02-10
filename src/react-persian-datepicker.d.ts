// src/react-persian-datepicker.d.ts
declare module "react-persian-datepicker" {
  import { ComponentType } from "react";

  export interface PersianDatePickerProps {
    value?: string;
    onChange?: (date: string) => void;
    inputFormat?: string;
    inputJalaaliFormat?: string;
    showDefaultInput?: boolean;
    className?: string;
    inputPlaceholder?: string;
    autoClose?: boolean;
    [key: string]: unknown;
  }

  const PersianDatePicker: ComponentType<PersianDatePickerProps>;
  export default PersianDatePicker;
}
