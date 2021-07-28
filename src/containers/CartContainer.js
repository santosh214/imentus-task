import Cart from "../components/Cart";
import { connect } from "react-redux";
import { removeToCart } from "../services/actions/Actions";
const mapStateToProps=state=>({
    cartData:state.cartItems
    })
    const mapDispatchToProps=dispatch=>({
        removeToCartHandler:data=>dispatch(removeToCart(data))
    })
export default connect(mapStateToProps,mapDispatchToProps)(Cart)