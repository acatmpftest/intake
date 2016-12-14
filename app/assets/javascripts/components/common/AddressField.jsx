import ADDRESS_TYPE from 'AddressType'
import InputField from 'components/common/InputField'
import React from 'react'
import SelectField from 'components/common/SelectField'
import US_STATE from 'USState'

const AddressField = ({streetAddress, city, state, zip, type, onChange}) => (
    <div className='row item'>
      <InputField
        gridClassName='col-md-6'
        labelClassName='no-gap'
        id='street_address'
        label='Address'
        onChange={(event) => onChange('street_address', event.target.value)}
      />
      <InputField
        gridClassName='col-md-6'
        labelClassName='no-gap-top-desktop'
        id='city'
        label='City'
        onChange={(event) => onChange('city', event.target.value)}
      />
      <SelectField
        gridClassName='col-md-4'
        labelClassName='no-gap'
        id='state'
        label='State'
        onChange={(event) => onChange('state', event.target.value)}
      >
        <option key='' value=''></option>
        {Object.keys(US_STATE).map((item) => <option key={item} value={item}>{US_STATE[item]}</option>)}
      </SelectField>
      <InputField
        gridClassName='col-md-2'
        labelClassName='no-gap'
        id='zip'
        label='Zip'
        onChange={(event) => onChange('zip', event.target.value)}
      />
      <SelectField
        gridClassName='col-md-6'
        labelClassName='no-gap-top-desktop'
        id='address_type'
        label='Address Type'
        onChange={(event) => onChange('type', event.target.value)}
      >
        <option key='' value=''></option>
        {ADDRESS_TYPE.map((item) => <option key={item} value={item}>{item}</option>)}
      </SelectField>
  </div>
)
export default AddressField
