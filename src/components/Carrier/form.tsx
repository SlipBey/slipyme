/* eslint-disable @typescript-eslint/no-explicit-any */

import { useLocaleParser } from "@/libs/localeParser";

interface ICarrier {
  input: any;
  selectedCheckbox?: any;
  setSelectedCheckbox?: any;
  selectedRadio?: any;
  setSelectedRadio?: any;
}

export const CarrierForm: React.FC<ICarrier> = ({
  input,
  setSelectedRadio,
  selectedRadio,
  setSelectedCheckbox,
  selectedCheckbox,
}) => {
  const parser = useLocaleParser();

  const handleChange = (name: string) => {
    if (selectedCheckbox.includes(name)) {
      const updatedList = selectedCheckbox.filter(
        (item: string) => item !== name,
      );
      setSelectedCheckbox(updatedList);
    } else {
      setSelectedCheckbox((prevList: any) => [...prevList, name]);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label>{parser.get(input.title)}</label>
      {!input.checkbox && !input.radio && (
        <input
          type={input.type}
          name={input.title}
          placeholder={parser.get(input.title || "" + "Input")}
          minLength={2}
        />
      )}
      {input.radio && (
        <div className="flex flex-col gap-2">
          {input.radio.map((radio: any, idx: any) => (
            <div
              key={idx}
              className="flex flex-row items-center gap-2"
              onClick={() => setSelectedRadio(radio.name)}
            >
              <input
                type="radio"
                name={radio.name}
                id={radio.name}
                checked={selectedRadio === radio.name}
              />
              <label htmlFor={radio.name}>{radio.title}</label>
            </div>
          ))}
        </div>
      )}
      {input.checkbox && (
        <div className="flex flex-col gap-2">
          {input.checkbox.map((checkbox: any, idx: any) => (
            <div key={idx} className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                name={checkbox.name}
                id={checkbox.name}
                onClick={() => handleChange(checkbox.name)}
              />
              <label htmlFor={checkbox.name}>{checkbox.title}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
