import Cart from "../components/Cart";
import { connect } from "react-redux";
const mapStateToProps=state=>({
    cartData:state.cartItems
    })
    const mapDispatchToProps=dispatch=>({
    })

export default connect(mapStateToProps,mapDispatchToProps)(Cart)