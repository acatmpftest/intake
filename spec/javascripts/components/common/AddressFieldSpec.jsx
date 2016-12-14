import React from 'react'
import {shallow} from 'enzyme'
import AddressField from 'components/common/AddressField'

describe('AddressField', () => {
  let component
  let onChange = jasmine.createSpy('onChange')
  const props = {
    streetAddress: '123 fake street',
    city: 'SpringField',
    state: 'NY',
    zip: '12345',
    type: 'Placement',
    onChange: onChange,
  }
  beforeEach(() => {
    component = shallow(<AddressField {...props}/>)
  })

  it('renders the address fields', () => {
    expect(component.find('InputField[label="Address"]').length).toEqual(1)
    expect(component.find('InputField[label="City"]').length).toEqual(1)
    expect(component.find('InputField[label="Zip"]').length).toEqual(1)
    expect(component.find('SelectField[label="State"]').length).toEqual(1)
    expect(component.find('SelectField[label="Address Type"]').length).toEqual(1)
  })
  describe('address state', () => {
    it('renders a select field', () => {
      expect(component.find('SelectField[label="State"]').length).toEqual(1)
    })
  })
})
