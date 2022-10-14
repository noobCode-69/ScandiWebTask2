import Checkout from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "SourceComponent/ContentWrapper";
import Progress from "src/components/Progress";
import { appendWithStoreCode } from "SourceUtil/Url";

import { CHECKOUT_URL } from "SourceRoute/Checkout/Checkout.config.js";

export class NewCheckout extends Checkout {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    };
  }

  updateStep() {
    const { checkoutStep, history } = this.props;
    const { url } = this.stepMap[checkoutStep];
    history.push(appendWithStoreCode(`${CHECKOUT_URL}${url}`));
    this.setState((prevState) => {
      return {
        ...prevState,
        currentStep: prevState.currentStep + 1,
      };
    });
  }

  render() {
    const maxStep = Object.keys(this.stepMap).length;
    return (
      <ContentWrapper>
        <main block="Checkout">
          <Progress maxStep={maxStep} currentStep={this.state.currentStep} />
          <ContentWrapper
            wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
            label={__("Checkout page")}
          >
            {this.renderSummary(true)}
            <div block="Checkout" elem="Step">
              {this.renderTitle()}
              {this.renderGuestForm()}
              {this.renderStep()}
              {this.renderLoader()}
            </div>
            <div>
              {this.renderSummary()}
              {this.renderPromo()}
              {this.renderCoupon()}
            </div>
          </ContentWrapper>
        </main>
      </ContentWrapper>
    );
  }
}

export default NewCheckout;
