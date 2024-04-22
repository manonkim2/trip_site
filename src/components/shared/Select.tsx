import { forwardRef, TextareaHTMLAttributes } from 'react'

import Flex from './Flex'
import Text from './Text'

import styled from '@emotion/styled'
import { colors } from '@/styles/colorPalette'

interface Option {
  label: string
  value: string | number | undefined
}

interface SelectProps extends TextareaHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: Option[]
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, value, ...props }, ref) => {
    return (
      <Flex direction="column">
        {label && (
          <Text
            typography="t7"
            color="black"
            display={'inline-block'}
            style={{ marginBottom: 3, marginTop: 12 }}
          >
            {label}
          </Text>
        )}
        <BaseSelect required ref={ref} value={value} {...props}>
          <option disabled hidden value="">
            {placeholder}
          </option>
          {options.map(({ label, value }) => (
            <option key={label} value={value}>
              {label}
            </option>
          ))}
        </BaseSelect>
      </Flex>
    )
  },
)

const BaseSelect = styled.select`
  height: 42px;
  background-color: ${colors.gray};
  border: none;
  border-radius: 8px;
  padding: 0 12px;
  cursor: pointer;

  &:required:invalid {
    color: #c0c4c7;
  }
`

export default Select
