import CartItems from "components/CartItems";
import CartSummary from "../../reaction-plugins/reaction-component-library/package/src/components/CartSummary/v1";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  summary: {
    borderTop: theme.palette.borders.default
  }
});

class CheckoutSummary extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.object),
      checkout: PropTypes.shape({
        itemTotal: PropTypes.shape({
          displayAmount: PropTypes.string
        }),
        taxTotal: PropTypes.shape({
          displayAmount: PropTypes.string
        })
      })
    }),
    classes: PropTypes.object,
    hasMoreCartItems: PropTypes.bool,
    loadMoreCartItems: PropTypes.func,
    onChangeCartItemsQuantity: PropTypes.func,
    onRemoveCartItems: PropTypes.func,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  }

  static defaultProps = {
    hasMoreCartItems: false,
    loadMoreCartItems() {},
    onChangeCartItemsQuantity() {},
    onRemoveCartItems() {}
  }

  handleItemQuantityChange = (quantity, cartItemId) => {
    const { onChangeCartItemsQuantity } = this.props;

    onChangeCartItemsQuantity({ quantity, cartItemId });
  }

  handleRemoveItem = (_id) => {
    const { onRemoveCartItems } = this.props;

    onRemoveCartItems(_id);
  }

  renderCartItems() {
    const { cart, hasMoreCartItems, loadMoreCartItems } = this.props;

    if (cart && Array.isArray(cart.items)) {
      return (
        <Grid item xs={12}>
          <CartSummary
            isMiniCart
            isReadOnly
            hasMoreCartItems={hasMoreCartItems}
            onLoadMoreCartItems={loadMoreCartItems}
            items={cart.items}
            onChangeCartItemQuantity={this.handleItemQuantityChange}
            onRemoveItemFromCart={this.handleRemoveItem}
          />
        </Grid>
      );
    }

    return null;
  }



  render() {
    return (
      <aside>
        <Grid container spacing={3}>
          {this.renderCartItems()}
        
        </Grid>
      </aside>
    );
  }
}

export default withStyles(styles)(CheckoutSummary);
