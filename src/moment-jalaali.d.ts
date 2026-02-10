// moment-jalaali.d.ts
declare module 'moment-jalaali' {
    import moment from 'moment';
    
    interface LoadPersianOptions {
      dialect?: 'persian-modern' | 'persian';
      usePersianDigits?: boolean;
    }
  
    interface JalaaliMoment extends moment.Moment {
      loadPersian: (options?: LoadPersianOptions) => void;
      jYear: () => number;
      jMonth: () => number;
      jDate: () => number;
      jDaysInMonth: () => number;
      jWeek: () => number;
      jWeekYear: () => number;
      startOf: (unit: moment.unitOfTime.StartOf) => JalaaliMoment;
      endOf: (unit: moment.unitOfTime.StartOf) => JalaaliMoment;
      add: (amount: moment.DurationInputArg1, unit?: moment.DurationInputArg2) => JalaaliMoment;
      subtract: (amount: moment.DurationInputArg1, unit?: moment.DurationInputArg2) => JalaaliMoment;
      format: (format?: string) => string;
    }
  
    const jMoment: JalaaliMoment & typeof moment;
    
    export = jMoment;
  }