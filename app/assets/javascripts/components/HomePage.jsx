import * as screeningActions from 'actions/screeningActions'
import React from 'react'
import {Link} from 'react-router'
import {browserHistory} from 'react-router'

export default class HomePage extends React.Component {
  createScreening() {
    screeningActions.create()
      .then((jsonResponse) => {
        browserHistory.push({
          pathname: `/screenings/${jsonResponse.id}/edit`,
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <a href='#' className='row' onClick={() => { this.createScreening() }}>Start Screening</a>
        <Link to='/people/new' className='row'>Create Person</Link>
        <Link to='/screenings' className='row'>Screenings</Link>
      </div>
    )
  }
}
