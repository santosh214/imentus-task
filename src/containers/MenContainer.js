import Men from "../components/Men";
import { connect } from "react-redux";
import {addToCart} from '../services/actions/Actions'
const mapStateToProps=state=>({
cartData:state.cartItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Men)