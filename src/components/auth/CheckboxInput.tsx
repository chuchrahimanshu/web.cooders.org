import React from 'react'

interface CheckboxInputPropsInterface {
  value: boolean;
  handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement>
  label: string
}

const CheckboxInput: React.FC<CheckboxInputPropsInterface> = ({
  value, handleCheckboxChange, label
}) => {
  return (
   <label className="flex items-center cursor-pointer gap-2 relative">
      <div className="relative w-5 h-5">
        <input
          type="checkbox"
          checked={value}
          onChange={handleCheckboxChange}
          className={`
            appearance-none w-full h-full border-2
            transition-colors cursor-pointer hover:border-palette-yellow ease-in-out duration-300 hover:opacity-50
            ${value ? 'bg-palette-yellow border-palette-yellow' : 'border-secondary-overlay bg-secondary-overlay'}
          `}
        />
        {value && (
          <span className="absolute inset-0 flex items-center justify-center text-black font-bold pointer-events-none text-[16px]">
            ✓
          </span>
        )}
      </div>
      {label && <span className='opacity-50'>{label}</span>}
    </label>
  )
}

export default CheckboxInput