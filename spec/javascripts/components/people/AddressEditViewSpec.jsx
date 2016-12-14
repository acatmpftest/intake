import Immutable from 'immutable'
import React from 'react'
import {AddressEditView} from 'components/people/AddressEditView'
import {shallow} from 'enzyme'

describe('AddressEditView', () => {
  let component
  let onChangeaddressSpy
  const addresses = Immutable.fromJS(
    [{street_address: '123 fake st',
      city: 'Springfield',
      state: 'NY',
      zip: '12345',
      type: 'Placement'
    }])
  onChangeaddressSpy = jasmine.createSpy('onChange')
  component = shallow(
      <AddressEditView
        addresses={addresses}
        onChange={onChangeaddressSpy}
      />
  )
  describe('render', () => {
    it('renders numbers', () => {
      expect(component.find('AddressField').length).toEqual(1)
    })
  })
})
