'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { linkStylesheet } from '../utils/dom';
import GithubAPI from '../utils/GithubAPI';
import Stream from './Stream';
import Octicon from './Octicon';
import Error from './Error';

export default class GithubActivity extends React.Component {

  static propTypes = {
    /**
     * Fetch stream for this user name.
     */
    user: PropTypes.string.isRequired,
    /**
     * List of events to display.
     */
    types: PropTypes.array,
    /**
     * Whether to dynamically embed the octicons stylesheet.
     */
    linkOcticons: PropTypes.bool,
    /**
     * How often in milliseconds to update the activity stream.
     */
    interval: PropTypes.number,
    /**
     * Event data.
     */
    data: PropTypes.array
  };
  
  static defaultProps = {
    linkOcticons: true,
    interval: 60000,
    data: []
  };
  
  /**
   * Constructor
   * 
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      error:  null
    };
    this.interval = null;
    this.api = new GithubAPI();
  }
  
  /**
   * Invoked immediately before mounting occurs
   */
  componentWillMount() {
    if (this.props.linkOcticons) {
      linkStylesheet(Octicon.STYLESHEET_URL);
    }
  }
  
  /**
   * Invoked immediately after a component is mounted
   */
  componentDidMount() {
    this.fetchEvents();
    this.setupInterval();
  }
  
  /**
   * Invoked before a mounted component receives new props
   * 
   * @param {*} nextProps
   */
  componentWillReceiveProps(nextProps) {
    this.fetchEvents();
    this.setupInterval();
  }
  
  /**
   * Invoked immediately before a component is unmounted
   */
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  
  /**
   * Sets the state to the event data for the user
   */
  fetchEvents = () => {
    if (this.props.data.length > 0) {
      this.setState({events: this.props.data, error: null});
      return;
    }
    if (this.props.user != "") {
      this.api.fetchEvents(this.props.user)
        .then(events => {
          this.setState({events, error: null})
        })
        .catch(error => {
          this.setState({error, events: []});
        });
    }
  };
  
  /**
   * Sets up a regular interval to fetch events for the user
   */
  setupInterval = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.props.interval !== 0) {
      this.interval = setInterval(
        this.fetchEvents,
        this.props.interval
      );
    }
  };
  
  /**
   * Renders the component
   * 
   * @returns {*}
   */
  render() {
    if (this.state.error) {
      return <Error error={this.state.error} />;
    }
    if (!Array.isArray(this.state.events)) {
      console.error('Expected Github events to be an array.');
      return null;
    }
    
    return <Stream
      {...this.props}
      events={this.state.events} />;
  }
}
