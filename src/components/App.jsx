import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
// import { UncontrolledForm } from './UncontrolledForm/UncontrolledForm';
// import {LoginForm} from './LoginForm/LoginForm';
import {ProductReviewForm} from './ProductReviewForm/ProductReviewForm';


export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        {/* <LoginForm/> */}
        {/* <UncontrolledForm /> */}
        <ProductReviewForm />
      </>
    );
  }
}