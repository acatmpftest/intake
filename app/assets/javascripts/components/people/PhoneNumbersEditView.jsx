import Immutable from 'immutable'
import React from 'react'
import PhoneNumberField from 'components/common/PhoneNumberField'

export class PhoneNumbersEditView extends React.Component {
  constructor() {
    super(...arguments)
    this.addPhoneNumber = this.addPhoneNumber.bind(this)
    this.editPhoneNumber = this.editPhoneNumber.bind(this)
    this.deletePhoneNumber = this.deletePhoneNumber.bind(this)
  }

  addPhoneNumber() {
    const NEW_PHONE_NUMBER = Immutable.Map({number: '', type: ''})
    const newPhoneNumbers = this.props.phoneNumbers.push(NEW_PHONE_NUMBER)
    this.props.onChange(newPhoneNumbers)
  }

  editPhoneNumber(fieldSeq, value) {
    const {phoneNumbers} = this.props
    const newPhoneNumbers = phoneNumbers.setIn(fieldSeq, value)
    this.props.onChange(newPhoneNumbers)
  }

  deletePhoneNumber(index) {
    const {phoneNumbers} = this.props
    const newPhoneNumbers = phoneNumbers.delete(index)
    this.props.onChange(newPhoneNumbers)
  }

  render() {
    const {phoneNumbers} = this.props
    return (
      <div id='phone-numbers'>
        {
          phoneNumbers.map((numbers, index) => {
            const {number, type} = numbers.toJS()
            return (
              <div key={index} className='row list-item'>
                <PhoneNumberField
                  Number={number}
                  Type={type}
                  onChange={(field, value) => this.editPhoneNumber([index, field], value)}
                />
                <a className='list-item__a'
                  aria-label='Delete phone number'
                  href='#'
                  onClick={(event) => {
                    event.preventDefault()
                    this.deletePhoneNumber(index)
                  }}
                >
                  <i className='fa fa-times' />
                </a>
              </div>
              )
          })
        }
        <div className='row'>
          <div className='col-md-12'>
            <button
              className='btn btn-default btn-block'
              onClick={this.addPhoneNumber}
              aria-label='Add new phone number'
            >
              <i className='fa fa-plus' />
              <span> Add new phone number</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

PhoneNumbersEditView.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  phoneNumbers: React.PropTypes.object.isRequired,
}
