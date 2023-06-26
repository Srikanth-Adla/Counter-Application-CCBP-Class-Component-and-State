import {Components} from 'react'
class Welcome extends Components {
  render() {
    const {name} = this.props
    return <h1>Hello, {name}</h1>
  }
}

export default Welcome
