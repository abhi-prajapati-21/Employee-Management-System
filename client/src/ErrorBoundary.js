import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
      super(props)
      this.state = {
        error: null
      };
    }

    static getDerivedStateFromError = (error) => {
        return {error: error};
    }
  render() {
    if (this.state.error) {
        return <div>Something went wrong</div>
    }
    return this.props.children
  }
}

