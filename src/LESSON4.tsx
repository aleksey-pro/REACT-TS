import React, { Component } from "react";
import ReactDOM from "react-dom";

// Компонент оборачивает другой - в пропсах children
type PortalProps = {
    children: React.ReactNode,
  }
  class Portal extends Component<PortalProps> {
    private el: HTMLDivElement = document.createElement('div');
    public componentDidMount():void {
      document.body.appendChild(this.el);
    }
    public componentWillUnmount():void {
      document.body.removeChild(this.el);
    }
    public render(): React.ReactElement<PortalProps> {
      return ReactDOM.createPortal(this.props.children, this.el);
    }
  }
  class MyComponent extends Component<{}, { count: number }> {
    state = {
      count: 0,
    }
    handleClick = () => {
      this.setState(({ count }) => ({
        count: ++count,
      }));
    }
    render() {
      return (
        <div onClick={this.handleClick}>
          <h1>Clicks: {this.state.count}</h1>
          <Portal>
            <h2>TEST PORTAL</h2>
            <button>Click</button>
          </Portal>
        </div>
      );
    }
  }

 class App extends Component {
     render() {
         return (
            <MyComponent />
         );
     }
 } 

 export default App;
