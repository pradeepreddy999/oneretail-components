import {
  type CompositeFilterDescriptor,
  type FilterDescriptor,
  type State,
} from "@progress/kendo-data-query";

export const isColumnFiltered = (field: string, dataState: State) => {
  if (!dataState.filter || !Array.isArray(dataState.filter.filters))
    return false;

  return dataState.filter.filters.some(
    (filter: FilterDescriptor | CompositeFilterDescriptor) => {
      if ("filters" in filter && Array.isArray(filter.filters)) {
        // CompositeFilterDescriptor (nested filters)
        return filter.filters.some(
          (f: FilterDescriptor | CompositeFilterDescriptor) =>
            (f as FilterDescriptor).field === field
        );
      } else {
        // Simple FilterDescriptor
        return (filter as FilterDescriptor).field === field;
      }
    }
  );
};

export const GetSortedArray = <
  T extends Record<string, string | number | null | undefined>
>(
  data: T[],
  field: keyof T
): T[] => {
  let finalData: T[] = [{ [field]: "" } as T];

  const dataNotValid =
    !Array.isArray(data) ||
    data.length === 0 ||
    !Object.prototype.hasOwnProperty.call(data[0], field);

  if (dataNotValid) return finalData;

  const fieldValues = [...new Set(data.map((x) => x[field]))];

  const fieldValuesString = fieldValues.join("");

  const isNumberType =
    !isNaN(Number(fieldValuesString)) ||
    (fieldValuesString.includes("-") &&
      fieldValues.every((x) => !isNaN(Number(x)))); // case for negative values

  const isDateType = fieldValues.some(
    (x) => typeof x === "string" && /\d{1,2}[/-]\d{1,2}[/-]\d{4}/.test(x)
  );

  const isStringType = !isNumberType && !isDateType;

  if (isStringType) {
    finalData = [...data].sort((a, b) => {
      const aVal = String(a[field] ?? "").toLowerCase();
      const bVal = String(b[field] ?? "").toLowerCase();
      return aVal.localeCompare(bVal);
    });
  } else if (isNumberType) {
    finalData = [...data].sort((a, b) => {
      const aVal = Number(a[field]);
      const bVal = Number(b[field]);
      return aVal - bVal;
    });
  } else if (isDateType) {
    const nonEmptyDates = data.filter((x) => !!x[field]);
    finalData = [...nonEmptyDates].sort((a, b) => {
      const date1 = new Date(String(a[field]));
      const date2 = new Date(String(b[field]));
      const isInvalid = isNaN(date1.getTime()) || isNaN(date2.getTime());
      if (isInvalid) return -1;
      return date1.getTime() - date2.getTime();
    });

    const emptyDates = data.filter((x) => !x[field]);
    if (emptyDates.length > 0) {
      finalData = [...finalData, ...emptyDates];
    }
  }

  return finalData;
};

export const GridColumnMenuAnchorRemoval = () => {
  const columnMenuAnchors = document.querySelectorAll(
    ".k-grid-header-menu,.k-grid-column-menu"
  );
  columnMenuAnchors.forEach((el) => el.removeAttribute("href"));
};

// debounce and throttle functions are used for performance optimization (limit the number of times a function is called).

// debounce function to reduce the call to a function untill the delay after the user event is inactive.
// debounced function will only run once after a certain delay since the last time it was triggered.

export const debounce = <T extends (...args: unknown[]) => void>(
  cb: T,
  delay: number = 1000
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

// throttle function to call a function in regular intervals untill the user event is active.
// throttle will call the function passed to it every time the delay ends as long as the trigger for the function is still happening.

export const throttle = <T extends (...args: unknown[]) => void>(
  cb: T,
  delay: number = 1000
): ((...args: Parameters<T>) => void) => {
  let shouldWait = false;
  let waitingArgs: Parameters<T> | null = null;

  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args: Parameters<T>): void => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
};
